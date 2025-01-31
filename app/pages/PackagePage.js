"use client";

import Header from "../components/package/Header";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { DESTINATIONS_KEYWORD } from "../utils/common";
import Packages2 from "../components/package/Packages2";
import Packages from "../components/experience/Packages";

const PackagePage = ({ packageType }) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const params = useParams();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 880);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Header />
      {packageType === 2 ? (
        isMobileView ? (
          <Packages />
        ) : (
          <Packages2 />
        )
      ) : (
        <>
          <Packages destination={DESTINATIONS_KEYWORD[params["id"]]} />
        </>
      )}
    </div>
  );
};

export default PackagePage;
