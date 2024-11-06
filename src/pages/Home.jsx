import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet-async";




const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Gadgets | Gadget Heaven</title>
        </Helmet>
        <div className="relative mb-96">
          <Banner></Banner>
          <Hero></Hero>
        </div>
        <div className="mb-12">
          <h2 className="text-4xl text-center font-bold text-c1">
            Explore Cutting-Edge Gadgets
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6  max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-24">
          <div className="w-full mb-6">
            <Categories></Categories>
          </div>
          <div className="col-span-3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default Home;