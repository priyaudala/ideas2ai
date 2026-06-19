import React from "react";
import ImplementationServices from "../../components/Services/ApplicationSupport/ImplementationServices";
import PostImplementationSupport from "../../components/Services/ApplicationSupport/PostImplementationSupport";
import TroubleshootingSupport from "../../components/Services/ApplicationSupport/TroubleshootingSupport";
import TechSupport from "../../components/Services/ApplicationSupport/TechSupport";

const ApplicationSupportPage = () => {
  return (
    <div>
      <ImplementationServices />
      <PostImplementationSupport />
      <TroubleshootingSupport />
      <TechSupport />
    </div>
  );
};

export default ApplicationSupportPage;
