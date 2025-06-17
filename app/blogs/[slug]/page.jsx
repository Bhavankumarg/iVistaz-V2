import React from "react";
import Posts from "./Posts";

const page = ({ params }) => {
  return (
    <div>
      <Posts slug={params.slug} />
    </div>
  );
};

export default page;
