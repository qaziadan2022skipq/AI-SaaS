import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const inter = Poppins({ subsets: ['latin'], weight: "400" })

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

  const apiLimitCount = await getApiLimit() as number;
  const isPro = await checkSubscription() as boolean

  return (
    <div className={cn("p-4 lg:p-0 h-full relative", inter.className)}>
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-black rounded-br-lg rounded-tr-lg">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className={cn("md:pl-72", inter.className)}>
        <Navbar />
        {children}
      </main>

    </div>
  );
};

export default DashboardLayout;
