import { useContext, useEffect, useState } from "react";
// import { CartContext, GadgetContex, HandleCartContext } from "../App";
import { NavLink } from "react-router-dom";
import DashboardCart from "../components/DashboardCart";
import { GadgetContex } from "../App";
import DashboardWish from "../components/DashboardWish";



const Dashboard = () => {

  const newAddToGadget = useContext(GadgetContex)
  const [active, setActive] = useState(true)



  const handleAcitveBtn = (status) => {
    setActive(status)
  }

 

    return (
      <div>
        <div className="h-96 text-center space-y-3 pt-12 mx-auto px-4 md:px-8 lg:px-12 bg-c1">
          <h2 className="text-4xl font-bold text-white">Dashboard</h2>
          <p className="text-white max-w-4xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center gap-6 justify-center pt-6">
            <NavLink
              onClick={() => handleAcitveBtn(true)}
              className="bg-white text-c1 px-10 py-3 text-lg font-semibold rounded-full"
            >
              Cart
            </NavLink>
            <NavLink
              onClick={() => handleAcitveBtn(false)}
              className="bg-c1 text-white border px-10 py-3 text-lg font-semibold rounded-full"
            >
              Wishlist
            </NavLink>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-12 mb-24">
          {newAddToGadget.map(
            (gadget) =>
              active ? <DashboardCart gadget={gadget}></DashboardCart> : <DashboardWish gadget={gadget}></DashboardWish>
          )}
        </div>
      </div>
    );
};

export default Dashboard;