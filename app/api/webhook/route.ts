import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { buffer } from "micro";

export const maxDuration = 300;

export const config = { api: { bodyparser: false } };

export async function POST(req: any) {
  const requestBuffer = await buffer(req);
  const signature = headers().get("stripe-signature") as string;
  console.log("SIGN: " + signature);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      requestBuffer,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(`WebHook Error : ${error}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    if (!session?.metadata?.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }
    await prismadb.userSubscription.create({
      data: {
        userId: session?.metadata?.userId,
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeroidEnd: new Date(
          subscription.current_period_end * 1000
        ),
      },
    });
  }

  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    await prismadb.userSubscription.update({
      where: {
        stripeSubscriptionId: subscription.id,
      },
      data: {
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeroidEnd: new Date(
          subscription.current_period_end * 1000
        ),
      },
    });
  }
  return new NextResponse(null, { status: 200 });
}
