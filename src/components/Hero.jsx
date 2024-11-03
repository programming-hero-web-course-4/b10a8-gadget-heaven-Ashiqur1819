import hero from "../assets/banner.jpg"

const Hero = () => {
    return ( 
      <div className="max-w-5xl mx-auto p-4 border rounded-3xl backdrop-blur-2xl absolute -bottom-60 left-0 right-0 ">
        <img src={hero} className="w-full h-[400px] object-cover rounded-3xl" alt="" />
      </div>
    );
};

export default Hero;