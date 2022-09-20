import React from "react";

// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import FeatureComponent from "./sections/featurecomponent";
import PortfolioComponent from "./sections/portfoliocomponent";

const CustomComponents = () => {
  return (
    <div>
      <Banner2 />
      <FeatureComponent />
      <PortfolioComponent />
      {/* <PricingComponent /> */}
      {/* <BlogComponent /> */}
    </div>
  );
};

export default CustomComponents;
