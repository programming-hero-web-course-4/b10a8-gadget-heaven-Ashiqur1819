import Banner from "../components/Banner";
import Hero from "../components/Hero";


const Home = () => {
    return (
      <div>
        <div className="relative">
          <Banner></Banner>
          <div className="max-w-7xl mx-auto">
            <Hero></Hero>
          </div>
        </div>
      </div>
    );
};

export default Home;