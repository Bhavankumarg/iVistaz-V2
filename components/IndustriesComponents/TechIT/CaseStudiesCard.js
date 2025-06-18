import React from "react";
import CaseStudiesCategoriesComponents from "../CaseStudiesPropsFetch/CaseStudiesCategoriesComponents"
import Link from "next/link";

const CaseStudiesCard = () => {
  const categoryId = 17;
  return (
    <>
      <div>
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h3 className="lg:text-[32px] text-xl text-center lg:py-10 lg:p-0 p-5">
            Smarter, Faster, AI-Powered Marketing for Tech Brands
          </h3>
          <Link href="/ai-powered-marketing" className="btn-18">
            Ecplore Solutions
          </Link>
          <h3 className="lg:text-[32px] text-xl text-center lg:py-10 lg:p-0 p-5">
            Here are some instances where our expertise and cutting-edge
            solutions have propelled Tech/IT companies to success
          </h3>
          <div>
            <CaseStudiesCategoriesComponents categoryId={categoryId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesCard;
