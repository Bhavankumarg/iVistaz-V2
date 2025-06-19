import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCircleChevRight } from "react-icons/ci";

const BreadCrumbs = () => {
  return (
    <div>
      <div className="flex flex-col justify-between w-full">
        <div className="w-full py-4 mt-24 container mx-auto lg:px-0 px-5">
          {/* Bread-crumb */}
          <div className="flex items-center mb-3 flex-nowrap">
            <div className="flex items-center">
              <Link href="/art/services" className="no-underline">
                <p className="text-[14px] lg:text-[16px] text-black px-1">Services</p>
              </Link>
              <CiCircleChevRight className="text-red-500" />
              <Link href="" className="no-underline px-1">
                <p className="text-[14px] lg:text-[16px] text-black">
                  {" "}
                  Content development for B2C and B2B
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
