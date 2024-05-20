import { ModalProvider } from "@/components/modal-provider";
import { checkSubscription } from "@/lib/subscription";

const LandingPageLayout = async ({
    children
}: {
    children: React.ReactNode
}) => {
    const isPro = await checkSubscription()
    return (
        <>
        {isPro ? <></> : <ModalProvider />}
        <main className="h-full bg-[#000000] overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
        </main>
        </>
    )
}

export default LandingPageLayout