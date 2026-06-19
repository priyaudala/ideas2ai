import React from "react";
import DevopsCloud from "../../components/Services/DevelopmentServices/DevopsCloud";
import ApplicationDevelopment from "../../components/Services/DevelopmentServices/ApplicationDevelopment";
import ApplicationIntegration from "../../components/Services/DevelopmentServices/ApplicationIntegration";
import DataMigration from "../../components/Services/DevelopmentServices/DataMigration";
import SnowFlake from "../../components/Services/DevelopmentServices/SnowFlake";

const DevelopmentServicesPage = () => {
  return (
    <div>
      <ApplicationIntegration />
      <ApplicationDevelopment />
      <DataMigration />
      <DevopsCloud />
      <SnowFlake />
    </div>
  );
};

export default DevelopmentServicesPage;
