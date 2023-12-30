import React from "react";
import RootPage from "../components/pages/RootPage";
import Statistics from "../components/native/Statistics";
import DynamicHeroImage from "@/components/native/DynamicHeroImage";
export default function page() {
  return (
    <div>
      <div className="   z-0">
        <DynamicHeroImage />
      </div>
      <Statistics />
      <RootPage />
    </div>
  );
}
