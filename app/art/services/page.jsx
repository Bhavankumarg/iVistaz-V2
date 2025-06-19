"use client";
import React from "react";
import Link from "next/link";
import { CiCircleChevRight } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { servicesData } from "@/utils/data";
// import NextSeo from "@/components/Seo/Seo";

function page() {
  const pathname = usePathname();
  // const [domainName, setDomainName] = useState("");

  // const seoField = {
  //   title: "Art Marketing Solution",
  //   description:
  //     "Promote your art with iVistaz's specialized marketing solutions. We help artists and galleries increase their online presence and connect with art enthusiasts, ensuring your work reaches a broader audience.",
  //   path: `${pathname}`,
  //   metaImage: "",
  // };

  return (
    <>
      {/* <NextSeo {...seoField} /> */}
      <div className="flex flex-col justify-between min-h-screen">
        <Image
          width={600}
          height={300}
          src="/art/h-icon.svg"
          className="absolute h-2/3 -right-0 -top-70 hidden lg:block overflow-hidden"
          alt=""
        />

        <div className="py-4 mt-32 container mx-auto lg:px-0 px-5">
          {/* Bread-crumb */}
          <div className="flex items-center mb-3 flex-nowrap">
            <div className="flex items-center">
              <Link href="/welcome" className="no-underline">
                <span className="text-md text-black px-1">Home</span>
              </Link>
              <CiCircleChevRight className="text-red-500" />
              <Link href="" className="no-underline px-1">
                <span className="text-md text-black">Art</span>
              </Link>
              <CiCircleChevRight className="text-red-500" />
              <Link href="" className="no-underline px-1">
                <span className="text-md text-black">Services</span>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-5xl md:text-7xl font-bold lg:py-5 py-5 text-[#ed2023] font-monument-bold">
              Services
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="">
              <p className="text-[18px] font-monument-light">
                At the core of everything we do lies the art of transforming
                exceptional services into extraordinary results with effective
                digital marketing techniques. We are dedicated to crafting and
                curating tailored digital marketing solutions that exceed your
                expectations. Whether it’s a comprehensive package for content
                creation and design or a single service, we’re here to help
                brands achieve more than what they wish for. And the best part?
                We have a{" "}
                <Link
                  href="/mastery/about-us"
                  className="text-[#ed2023] underline"
                >
                  performance-based digital marketing model.
                </Link>{" "}
                This means we get paid only when we deliver results.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3  container mx-auto py-20 gap-10">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center py-5"
              >
                <Image src={item.logo} width={60} height={60} alt="icon" />
                <div>
                  <p className="text-[18px] py-5 text-center">
                    <Link href={item.pageLink} className="hover:text-[#ed2023]">
                      {item.description}
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
