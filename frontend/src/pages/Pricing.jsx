import React, { useEffect } from "react";
import PricingComparison from "../components/PricingComparison";
import GoldPlanPerks from "../components/GoldPlanPerks";
import Faq from "../components/Faq";

export default function Pricing() {
  

  return (
    <div className="font-sans">
      <h1 className="text-center text-3xl mt-10  mb-5 text-[#03194F]">Enjoy (way) more with KidsReading Gold</h1>
      <p className="text-center text-xs mb-6">Take advantage of our Gold Family Plan option to experience all the benefits KidsReading has to offer.</p>
      <PricingComparison />
      <GoldPlanPerks />
      <Faq />
    </div>
  );
}
