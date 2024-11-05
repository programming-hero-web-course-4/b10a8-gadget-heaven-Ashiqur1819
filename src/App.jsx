import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { createContext, useState } from 'react';

export const CartContext = createContext(0);
export const WishContext = createContext(0);
export const HandleCartContext = createContext()
export const GadgetContex = createContext([])
export const addToCartContext = createContext()
export const HandleWishContext = createContext([])
export const WishlishContext = createContext()
export const HandleRemoveContex = createContext()

const App = () => {

  const [addToCart, setAddToCart] = useState(0)
  const [addToWish, setAddToWish] = useState(0)
  const [addGadget, setAddGadget] = useState([])
  const [addGadget2, setAddGadget2] = useState([])


  const handleAddToCart = () => {
    
  };

  const handleWishlish = () => {

  }

  const handleAddToCartBtn = (gadget) => {

    const validGadget = addGadget.find(g => g.product_id === gadget.product_id);

    if(!validGadget){
      handleAddToCart(setAddToCart(addToCart + 1));
    const newAddToGadget = [...addGadget, gadget];
    setAddGadget(newAddToGadget);
    }else{
      alert("Already added")
    }
  }

  const handleAddToWishBtn = (gadget) => {

    const validGadget2 = addGadget2.find(g2 => g2.product_id === gadget.product_id)

    if(!validGadget2){
      handleWishlish(setAddToWish(addToWish + 1))
    const newAddToGadget2 = [...addGadget2, gadget]
    setAddGadget2(newAddToGadget2);
    }else{
      alert("Already added")
    }

  }

  const handleRemove = (gadget) => {
    const remainingGadgets = addGadget.filter(gad => gad.product_id !== gadget.product_id)
    setAddGadget(remainingGadgets)
     handleAddToCart(setAddToCart(addToCart - 1));
  }




  return (
    <GadgetContex.Provider value={addGadget}>
      <HandleRemoveContex.Provider value={handleRemove}>
        <HandleWishContext.Provider value={handleAddToWishBtn}>
          <HandleCartContext.Provider value={handleAddToCartBtn}>
            <WishlishContext.Provider value={handleWishlish}>
              <addToCartContext.Provider value={handleAddToCart}>
                <WishContext.Provider value={[addToWish, setAddToWish]}>
                  <CartContext.Provider value={[addToCart, setAddToCart]}>
                    <div className="font-sora bg-base-200">
                      <Navbar></Navbar>
                      <div>
                        <Outlet
                          handleAddToCartBtn={handleAddToCartBtn}
                        ></Outlet>
                      </div>
                      <Footer></Footer>
                    </div>
                  </CartContext.Provider>
                </WishContext.Provider>
              </addToCartContext.Provider>
            </WishlishContext.Provider>
          </HandleCartContext.Provider>
        </HandleWishContext.Provider>
      </HandleRemoveContex.Provider>
    </GadgetContex.Provider>
  );
};

export default App;