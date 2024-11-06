import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-c1 pb-60 pt-6 px-4 md:px-8 lg:px-12">
      <div className="hero-content text-center">
        <div className="md:max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white space-y-3">
            <h2>Upgrade Your Tech Accessorize with</h2>
            <h2>Gadget Heaven Accessories</h2>
          </h1>
          <p className="py-6 md:max-w-3xl mx-auto text-white">
            Explore the ultimate collection of innovative tech accessories
            designed to enhance your devices. From stylish cases to efficient
            chargers, Gadget Heaven provides the essential tools to seamlessly
            elevate your tech experience.
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
