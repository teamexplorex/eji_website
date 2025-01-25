"use client";

import Header from "../components/package/Header";
import { useState } from "react";
import { useParams } from "next/navigation";
import { DESTINATIONS_KEYWORD } from "../utils/common";
import Packages2 from "../components/package/Packages2";
import Packages from "../components/experience/Packages";

const PackagePage = ({ packageType }) => {
  const params = useParams();
  return (
    <div>
      <Header />
      {packageType === 2 ? (
        <Packages2 />
      ) : (
        <>
          <Packages destination={DESTINATIONS_KEYWORD[params["id"]]} />
        </>
      )}
    </div>
  );
};

export default PackagePage;
