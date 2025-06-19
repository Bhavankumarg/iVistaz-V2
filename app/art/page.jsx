"use client";
import React from "react";
import Link from "next/link";
import { CiCircleChevRight } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

function page() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");

  const title = "Art Marketing Solutions ";
  const description =
    "Promote your art with iVistaz's specialized marketing solutions. We help artists and galleries increase their online presence and connect with art enthusiasts, ensuring your work reaches a broader audience.";
  const path = `${pathname}`;
  const metaImage = "";

  return (
    <>
      <div className="flex flex-col justify-between min-h-screen w-full">
        <Image
          width={600}
          height={300}
          src="/art/h-icon.svg"
          className="absolute h-2/3 -right-0 -top-56 hidden lg:block overflow-hidden"
          alt=""
        />

        <div className="w-full md:w-4/5 py-4 mt-32 container mx-auto lg:px-0 px-5">
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
            </div>
          </div>
          <div>
            <h1 className="text-5xl md:text-7xl font-bold lg:py-10 py-5">
              ART
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3">
              <p className="text-xl font-semibold">
                <i className="font-monument-semibold-italic">
                  "It's not what you look that matters, it's what you see." –
                </i>{" "}
                Henry David Thoreau
              </p>
              <p className="text-xl pt-4">
                A picture may speak a thousand words but an action speaks louder
                than them. Therefore, we create digital experiences that lead to
                meaningful conversations and convert to qualified leads.
              </p>
              <div className="mt-12">
                <Link href="/art/services">
                  <span className="btn-11">Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 md:w-4/5 lg:-mt-56 mx-auto pb-10">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="w-full flex lg:justify-end">
              <Image width={500} height={200} src="/art/arts.svg" alt="" />
            </div>
          </div>
          {/* Mobile-only links can be added here */}
        </div>
      </div>
    </>
  );
}

export default page;
