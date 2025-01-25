"use client"

import AuthenticatedLayout from "./AuthenticatedLayout";
import UnAuthenticatedLayout from "./UnauthenticationLayout";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LayoutConfig = (props) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isAuthenticatedPage, setIsAuthenticatedPage] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    setIsAuthenticatedPage(isAuthenticated);
  }, [isAuthenticated]);

  return (
    isAuthenticatedPage !== null && (
      <>
        {isAuthenticated &&
        router.pathname !== "/" ? (
          <AuthenticatedLayout>{props.children}</AuthenticatedLayout>
        ) : (
          <UnAuthenticatedLayout>{props.children}</UnAuthenticatedLayout>
        )}
      </>
    )
  );
};

export default LayoutConfig;
