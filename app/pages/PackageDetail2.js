"use client";
import { useEffect, useState } from "react";

import PackageHeader from "../packagedetaildemo/Header";
import PackageDetails from "../packagedetaildemo/PackageDetails";
import axios from "axios";
import PackageDetailTabs from "../packagedetaildemo/PackageDetailTabs";

import { useParams } from "next/navigation";

export const TABS = [
  "TOUR_ITINERARY",
  "COST",
  "INCLUSION",
  "EXCLUSION",
  "POLICY",
];

const PackageDetailPage = () => {
  const [packageData, setPackageData] = useState(null);
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_APP_URL + "/package/" + params["id"]
      );
      setPackageData(data.message);
    })();
  }, []);

  return (
    packageData && (
      <div>
        <PackageHeader packageData={packageData}/>
        <PackageDetailTabs
          TABS={TABS}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <PackageDetails activeTab={activeTab} packageData={packageData}/>
      </div>
    )
  );
};

export default PackageDetailPage;
