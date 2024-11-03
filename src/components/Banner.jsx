import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-c1 pb-60 pt-6">
      <div className="hero-content text-center">
        <div className="md:max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6 md:max-w-3xl mx-auto text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn bg-white text-c1 px-6 text-lg rounded-full">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
