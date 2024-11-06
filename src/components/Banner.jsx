import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-c1 pb-60 pt-6 px-4 md:px-8 lg:px-12">
      <div className="hero-content text-center">
        <div className="md:max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-relaxed">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6 md:max-w-3xl mx-auto text-white">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to="/dashboard">
            <button className="btn bg-white text-c1 px-6 text-lg rounded-full">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
