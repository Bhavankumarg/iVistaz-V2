import React from "react";
import CaseStudiesCategoriesComponents from "../CaseStudiesPropsFetch/CaseStudiesCategoriesComponents"

const CaseStudiesCard = () => {
  const categoryId = 10;
  return (
    <>
      <div>
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h3 className="lg:text-[32px] text-center lg:w-5xl lg:py-10 lg:p-0 p-5">
            Here’s how we have helped brands win over the dynamic and highly
            competitive industry through digital marketing for automobile brands
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
