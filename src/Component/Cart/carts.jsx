import React, { use } from "react";
import Cart from "./cart";

const Carts = ({ cartsList, cartsData, setCartsData }) => {
  // const [toggle, setToggle] = useState(false);
  const cartsItems = use(cartsList);

  return (
    <section className="pricing-section container space-y-7 mx-auto mt-30 flex items-center flex-col max-w-7xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {cartsItems.map((cart_item, index) => (
          <Cart
            key={index}
            cart_item={cart_item}
            cartsData={cartsData}
            setCartsData={setCartsData}
          ></Cart>
        ))}
      </div>
    </section>
  );
};

export default Carts;
