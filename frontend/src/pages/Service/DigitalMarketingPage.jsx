import React from "react";
import SearchEngineOptimization from "../../components/Services/DigitalMarketing/SearchEngineOptimization";
import SocialMediaMarketing from "../../components/Services/DigitalMarketing/SocialMediaMarketing";
import SearchEngineMarketing from "../../components/Services/DigitalMarketing/SearchEngineMarketing";
import OnlineReputationManagement from "../../components/Services/DigitalMarketing/OnlineReputationManagement";
import Strategy from "../../components/Services/DigitalMarketing/Strategy";
import Analytics from "../../components/Services/DigitalMarketing/Analytics";

const DigitalMarketingPage = () => {
  return (
    <div>
      <SearchEngineOptimization />
      <SocialMediaMarketing />
      <SearchEngineMarketing />
      <OnlineReputationManagement />
      <Strategy />
      <Analytics />
    </div>
  );
};

export default DigitalMarketingPage;
