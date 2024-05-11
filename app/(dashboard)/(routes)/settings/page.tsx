import Heading from "@/components/heading";
import SubscriptionButton from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import { SettingsIcon } from "lucide-react";

const Settings = async () => {

  const isPro = await checkSubscription();

  return (
    <div>
      <Heading
      title="Settings"
      description="Manage your account"
      icon={SettingsIcon}
      iconColor="text-gray-700"
      bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
            {isPro ? "You are currently on Pro Plan": "You are currently on Free Plan"}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default Settings;
