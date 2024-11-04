import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Hero from "../components/Hero";


const Home = () => {
    return (
      <div>
        <div className="relative mb-96">
          <Banner></Banner>
          <Hero></Hero>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-24">
          <div>
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