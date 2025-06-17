"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/new-home-page/case-studies/img-1.png",
    title: "300,000 Unique Leads in 3 Years",
    subtitle: "For a Global Retail Corporation’s MSME CSR Project",
    textColor: "text-[#000000]",
    gradientFrom: "#D0FFEF",
    gradientTo: "#B1C9FF",
    caseLink: "/case-studies/b2b-lead-gen-case-study-delivering-outcomes-with-paid-marketing-for-a-global-retail-giants-csr-project"
  },
  {
    image: "/new-home-page/case-studies/img-2.png",
    title: "10.8% Lead Conversion Rate",
    subtitle:
      "B2B Email Marketing Success for a Consulting Organization in the Social Impact Space",
    textColor: "text-[#64188D]",
    gradientFrom: "#F0D6FF",
    gradientTo: "#819EFF",
    caseLink: "/case-studies/b2b-email-marketing-case-study-delivering-qualified-leads-to-generate-interest-to-invest-in-the-clients-social-impact-projects"
  },
  {
    image: "/new-home-page/case-studies/img-3.png",
    title: "50 Thought Leadership Assets",
    subtitle: "For a global B2B Hi-Tech Company",
    textColor: "text-[#1416B4]",
    gradientFrom: "#FFCBAD",
    gradientTo: "#C2EDD6",
    caseLink: "/case-studies/thought-leadership-content-development-for-a-global-b2b-hi-tech-company"
  },
];

const CaseStudiesNew = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Embla Carousel */}
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_100%] relative group" key={index}>
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={1200}
                height={600}
                className="w-full lg:h-[600px] h-[200px] object-cover"
              />
<Link href={slide.caseLink}>
              {/* Replaced Overlay Card */}
              <div className="lg:absolute bottom-0 lg:left-[25%] transform lg:-translate-x-1/2 z-10 w-full lg:px-4">
                <div className="relative group w-full lg:max-w-xl h-[150px] mx-auto flex items-stretch">
                  {/* Main Card */}
                  <div className="flex-1 bg-white shadow flex items-center p-6 z-10">
                    <div>
                      <h2
                        className={`lg:text-2xl font-bold text-xl ${slide.textColor}`}
                      >
                        {slide.title}
                      </h2>
                      <p className="lg:text-lg text-black text-sm pt-3">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Block */}
                  
                    <div
                      className="w-20 h-auto flex items-center justify-center shadow 
     md:flex 
    md:-translate-x-full md:opacity-0 
    md:group-hover:translate-x-0 md:group-hover:opacity-100 
    transition-all duration-500 ease-in-out"
                      style={{
                        background: `linear-gradient(to bottom, ${slide.gradientFrom}, ${slide.gradientTo})`,
                      }}
                    >
                      <Image
                        src="/new-home-page/black-arrow.png"
                        alt="arrow black"
                        width={20}
                        height={20}
                      />
                    </div>
                  
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 lg:top-1/2 top-[30%] -translate-y-1/2 z-10 text-white"
      >
        <Image
          src="/new-home-page/right.svg"
          width={30}
          height={30}
          alt="Prev"
          className="lg:w-10 lg:h-10 w-5 h-5"
        />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 lg:top-1/2 top-[30%] -translate-y-1/2 z-10 text-white"
      >
        <Image
          src="/new-home-page/left.svg"
          width={30}
          height={30}
          alt="Next"
          className="lg:w-10 lg:h-10 w-5 h-5"
        />
      </button>
    </div>
  );
};

export default CaseStudiesNew;
