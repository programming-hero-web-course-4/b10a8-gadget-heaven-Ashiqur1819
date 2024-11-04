import { useEffect, useState } from "react";
import Gadget from "./Gadget";

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        fetch("gadgets.json")
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gadgets.map((gadget) => (
          <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
        ))}
      </div>
    );
};

export default Gadgets;