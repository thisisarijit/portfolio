import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 text-primary/10 flex justify-between items-center overflow-hidden pointer-events-none">
      <span className="text-[18rem] md:text-[25rem] lg:text-[30rem] font-extrabold">
        {"<"}
      </span>
      <span className="text-[18rem] md:text-[25rem] lg:text-[30rem] font-extrabold">
        {">"}
      </span>
    </div>
  );
};

export default Background;
