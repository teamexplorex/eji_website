"use client";
import { useState, useEffect } from "react";

import PackageHeader from "../components/package/detail/Header";
import PackageDetails from "../components/package/detail/PackageDetails";
import PackageDetailTabs from "../components/package/detail/PackageDetailTabs";
import GetInTouch from "../components/popups/GetInTouch";

export const TABS = [
  "TOUR_ITINERARY",
  "COST",
  "INCLUSION",
  "EXCLUSION",
  "POLICY",
];

const PackageDetailPage = ({ packageData }) => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup once after 5 seconds
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timeout); // Cleanup on component unmount
  }, []);

  return packageData && (
    <div>
      <PackageHeader packageData={packageData} />
      <PackageDetailTabs
        TABS={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <PackageDetails activeTab={activeTab} packageData={packageData} />

      {/* Conditionally render the GetInTouch component as a popup */}
      {showPopup && <GetInTouch onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default PackageDetailPage;
