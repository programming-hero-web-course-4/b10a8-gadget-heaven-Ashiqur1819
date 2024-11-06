import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { createContext, useState } from 'react';
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from "react-helmet-async";

export const CartContext = createContext(0);
export const WishContext = createContext(0);
export const HandleCartContext = createContext()
export const GadgetContex = createContext([])
export const addToCartContext = createContext()
export const HandleWishContext = createContext([])
export const WishlishContext = createContext()
export const HandleRemoveContex = createContext()
export const HandlePrice = createContext(0)


const App = () => {

  const [addToCart, setAddToCart] = useState(0)
  const [addToWish, setAddToWish] = useState(0)
  const [addGadget, setAddGadget] = useState([])
  const [addGadget2, setAddGadget2] = useState([])
  const [price, setPrice] = useState(0)
  const [sortPrice, setSortPrice] = useState([])


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
    toast.success(`${gadget.product_title} Successfully Added To Cart.`);
    }else{
      toast.error(`${gadget.product_title} Already Added To Cart!`);
    }
  }

  const handleAddToWishBtn = (gadget) => {

    const validGadget2 = addGadget2.find(g2 => g2.product_id === gadget.product_id)

    if(!validGadget2){
      handleWishlish(setAddToWish(addToWish + 1))
    const newAddToGadget2 = [...addGadget2, gadget]

    setAddGadget2(newAddToGadget2);
    toast.success(`${gadget.product_title} Successfully Added To Wishlist.`);
    }else{
      toast.error(`${gadget.product_title} Already Added To Wishlist!`);
    }
  }

  const handleRemove = (gadget) => {
    const remainingGadgets = addGadget.filter(gad => gad.product_id !== gadget.product_id)
    setAddGadget(remainingGadgets)
    handleAddToCart(setAddToCart(addToCart - 1));
    toast.success(`${gadget.product_title} Successfully Removed.`);
  }

  const handleRemove2 = (gadget) => {
    const remainingGadgets = addGadget2.filter(gad => gad.product_id !== gadget.product_id)
    setAddGadget2(remainingGadgets)
    handleWishlish(setAddToWish(addToWish - 1));
    toast.success(`${gadget.product_title} Successfully Removed.`);
    console.log('dkfkdj')
  }

  const handleIncreasePrice = p => {
    const newPrice = Number(price + p);
    setPrice(newPrice)
  }

  const handleDecreasePrice = p => {
    const newPrice = Number(price - p);
    setPrice(newPrice)
  }

  const handleSortPrice = (newAddToGadget) => {
   const sort =  newAddToGadget.sort((a, b) => b.price - a.price)
   setSortPrice(sort)
  }

  const handlePurchaseBtn = () => {
    setAddGadget([])
    setPrice(0)
    setAddToCart(0)
  }


  return (
    <HelmetProvider>
      <GadgetContex.Provider
        value={[addGadget, addGadget2, handleSortPrice, handlePurchaseBtn]}
      >
        <HandlePrice.Provider value={[price, setPrice]}>
          <HandleRemoveContex.Provider
            value={[handleRemove, handleDecreasePrice, handleRemove2]}
          >
            <HandleWishContext.Provider value={{ handleAddToWishBtn }}>
              <HandleCartContext.Provider
                value={[handleAddToCartBtn, handleIncreasePrice]}
              >
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
                          <ToastContainer></ToastContainer>
                        </div>
                      </CartContext.Provider>
                    </WishContext.Provider>
                  </addToCartContext.Provider>
                </WishlishContext.Provider>
              </HandleCartContext.Provider>
            </HandleWishContext.Provider>
          </HandleRemoveContex.Provider>
        </HandlePrice.Provider>
      </GadgetContex.Provider>
    </HelmetProvider>
  );
};

export default App;