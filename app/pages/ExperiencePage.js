"use client";

import Header from "../components/experience/Header";
import Packages from "../components/experience/Packages";
import { useParams } from "next/navigation";
import { EXPERIENCES_KEYWORDS } from "../utils/common";

const ExperiencePage = () => {
  const params = useParams();

  return (
    <div>
      <Header />
      <Packages experience={EXPERIENCES_KEYWORDS[params["id"]]} />
    </div>
  );
};

export default ExperiencePage;
