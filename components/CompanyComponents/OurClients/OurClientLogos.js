"use client";
import React, { useState, useEffect } from "react";
import { getClientLogos } from "../../../utils/ClientsData";
import { clientlogosData } from "@/utils/ClientsData";
import Image from "next/image";

const OurClientLogos = () => {
  const [clientLogos, setClientLogos] = useState([]);

  useEffect(() => {
    const logos = getClientLogos();
    setClientLogos(logos);
  }, []);

  return (
    <div className="w-full">
      <div className="container mx-auto bg-white rounded-2xl p-6 pb-10">
        {clientLogos.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="w-1/2 sm:w-1/4 lg:w-1/6 flex justify-center items-center p-2 rounded-xl"
              >
                <Image
                  width={500}
                  height={200}
                  src={logo}
                  alt={`Client logo ${index}`}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurClientLogos;
