"use client";
import React from "react";
import Image from "next/image";

const EverythingConnect = () => {
  const cards = [
    {
      imageUrl: "/new-home-page/eveything/img-1.png",
      title: "Performance.",
      desc: "We build strategies that are measurable from day one. Less noise, more action — and results that hold.",
      bgGradient: "from-[#4C146A] to-[#080808]",
      
    },
    {
      imageUrl: "/new-home-page/eveything/img-2.png",
      title: "Design.",
      desc: "Simple, human, and intuitive. We design for clarity, not just looks.",
      bgGradient: "from-[#ED1C24] via-[#ED1D24] to-[#FF5C00]",
      // marginHeight: "mt-5"
    },
    {
      imageUrl: "/new-home-page/eveything/img-3.png",
      title: "Content.",
      desc: "What you say, and how you say it, matters. We help you say it well — and make it resonate.",
      bgGradient: "from-[#0D3B66] to-[#328D21]",
      // marginHeight: "mt-10"
    },
    {
      imageUrl: "/new-home-page/eveything/img-4.png",
      title: "Technology.",
      desc: "Tech that fits, scales, and works quietly in the background. Tailored tech solutions carefully chosen to fit your needs.",
      bgGradient: "from-[#1416B4] to-[#4C146A]",
      // marginHeight: "mt-16"
    },
  ];

  return (
    <>
      <div className="bg-black">
      <div>
        <h4 className="lg:text-6xl text-2xl text-center text-white">Everything <br className="hidden sm:block" /> connects.</h4>
      </div>
     

      <div className="container mx-auto lg:py-20 lg:flex gap-10 justify-center items-start lg:p-0 p-5 flex- ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group lg:w-80 w-full h-[400px] overflow-hidden mt-10 shadow-xl"
          >
            {/* Image transitions out on hover */}
            <div className={`absolute inset-0 z-0 transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:translate-y-10 group-hover:scale-110 group-hover:opacity-0 ${card.marginHeight}`}>
              <Image
                src={card.imageUrl}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out"
              />
            </div>

            {/* Gradient background that fades in smoothly */}
            <div
              className={`absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr ${card.bgGradient}`}
            ></div>

            {/* Text content */}
            <div className="absolute inset-0 z-20 flex flex-col py-10 px-6">
              <h4 className="text-3xl text-white mb-4">{card.title}</h4>
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h4 className="lg:text-5xl text-2xl text-center lg: text-white">Where form meets function.</h4>
      </div>
      </div>
    </>
  );
};

export default EverythingConnect;
