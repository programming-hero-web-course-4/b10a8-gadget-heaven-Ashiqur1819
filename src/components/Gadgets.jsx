import { useEffect, useState } from "react";
import Gadget from "./Gadget";
import { useLoaderData, useParams } from "react-router-dom";


const Gadgets = () => {
    const data = useLoaderData()

    const [gadgets, setGadgets] = useState([]);
    const {category} = useParams()


        useEffect(() => {
          if (category) {
            const filteredByCategory = [...data].filter(
              (gadget) => gadget.category === category
            );
            setGadgets(filteredByCategory);
          } else {
            setGadgets(data);
          }
        }, [data, category]);



    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gadgets.map((gadget) => (
          <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
        ))}
      </div>
    );
};

export default Gadgets;