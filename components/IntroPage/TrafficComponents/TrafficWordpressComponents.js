"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import CaseStudiesCategoriesComponents from "../../IndustriesComponents/CaseStudiesPropsFetch/CaseStudiesCategoriesComponents";
const TrafficWordpressComponents = () => {
  const categoryId = 2;

  return (
    <div className="bg-black pb-10 min-h-screen text-center">
      {/* Logo and Heading Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-[300px]">
          <div className="mb-4">
            <Link href="/">
              <Image
                src="/ivista_logo.svg"
                width={300}
                height={80}
                alt="ivista logo"
                className=""
              />
            </Link>
          </div>

          <div>
            {/* Desktop */}
            <p className="text-white font-monument-bold text-2xl md:text-[28px] pt-10">
            Here are some traffic performances
            </p>
            <p className="text-white font-monument-bold text-2xl md:text-[28px] pt-4">
              we have achieved for our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="container mx-auto lg:px-0 px-4">
        <CaseStudiesCategoriesComponents categoryId={categoryId} />
      </div>
    </div>
  );
};

export default TrafficWordpressComponents;
