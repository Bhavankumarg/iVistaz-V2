"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
// import NextSeo from "@/components/Seo/Seo";

const HomeBanner = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  useEffect(() => {
    setDomainName(window.location.hostname);
  }, []);

  // const seoField = {
  //   title: "Expert SEM Strategies for Effective Online Advertisin",
  //   description:
  //     "Navigate micro-moments with expert SEM. Place ads at the top of SERPs, optimize CPL, and drive conversions with search, display, video, shopping, and discovery ads.",
  //   path: `${pathname}`,
  //   metaImage: "/services/sem-banner.jpg",
  // };

  const bannerSubHeading = "SEARCH ENGINE";
  const bannerHeading = "MARKETING";

  return (
    <>
      {/* <NextSeo {...seoField} /> */}
      <div className="bg-white relative z-10 w-full">
        <div className="w-full mx-auto container">
          <div className="flex flex-col items-center lg:px-0 px-2">
            {/* Breadcrumb */}
  
            {/* Banner Section - Manual Implementation */}
            <div className="relative w-full overflow-hidden rounded-4xl mb-8">
              {/* Desktop Image */}
              <div className="relative lg:h-[358px] h-[400px] w-full">
                <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('/services/sem-mobile-banner.jpg')] lg:bg-[url('/services/sem-banner.jpg')]" />
                <div className="absolute inset-0 bg-opacity-40 z-10 flex lg:items-center pt-5">
                  <div className="container mx-auto px-6 z-20 text-white">
                    <h3 className="lg:text-[48px] text-3xl font-monument-bold uppercase tracking-wider lg:px-14">
                      {bannerSubHeading}
                    </h3>
                    <h1 className="lg:text-[64px] text-4xl font-monument-bold lg:px-14">
                      {bannerHeading}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
