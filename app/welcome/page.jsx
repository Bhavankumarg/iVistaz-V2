import React from "react";
import HomeComponents from "../../components/HomeComponents";
import NextSeo from "@/components/Seo/Seo";
const page = () => {
  const seoField = {
    title: "Join the iVistaz Team",
    description:
      "Looking for a dynamic career in digital marketing? Join the iVistaz team and be part of an innovative company dedicated to driving success for our clients. Explore our career opportunities today.",
    path: "/welcome",
  };
  return (
    <div>
      <NextSeo {...seoField} />
      <HomeComponents />
    </div>
  );
};

export default page;
