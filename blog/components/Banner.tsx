import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div className="space-y-4">
        <h1 className="text-7xl text-[#A7CECB]">badma&apos;s daily blog!</h1>
        <h3 className="text-[#A7CECB]">
          welcome to{" "}
          <span className="underline decoration-2 text-[#A7CECB] decoration-[#907AD6]">
            every developer&apos;s
          </span>
          {" "}
          favourite blog in the devosphere
        </h3>
      </div>
      <div>
      <p className="mt-5 md:mt-2 text-[#A7CECB] max-w-sm">
        new product features | the latest in technology | the weekly debugging
        nightmares and more!
      </p>
      </div>    
    </div>
  );
};

export default Banner;
