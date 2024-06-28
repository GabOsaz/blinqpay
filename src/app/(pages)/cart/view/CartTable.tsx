import Image from "next/image";
import { QtyBtn, Th } from "./tableUnits";
import { ProductT } from "../../(home)/products/types";
import useCartLogic from "../controller/useCartLogic";

function CartTable() {
  const { cartItems, handleQtyChange, totalCartPrice, handleCheckout } =
    useCartLogic();

  return (
    <>
      <div className="mt-2 sticky top-12">
        <span className="font-semibold">{cartItems.length} items</span>{" "}
        <span>in cart</span>
      </div>
      <section className="mx-auto mt-6 px-1 md:px-5 py-4 bg-[#e2dbe3] rounded-2xl w-full lg:w-4/5 text-black shadow-2xl overflow-x-auto">
        {cartItems.length ? (
          // <div >
            // <table className="">
            <>
            <table className="lg:table-fixed w-full border-separate border-spacing-y-10 border-spacing-x-10 text-black">
              <thead>
                <tr>
                  <Th className="w-[22rem] md:w-[30rem]" text="Products" />
                  <Th className="w-[7rem]" text="Unit Price" />
                  <Th className="w-[10rem]" text="Quantity" />
                  <Th className="w-[10rem]" text="Total Price" />
                </tr>
              </thead>
              <tbody>
                {cartItems.map((datum: ProductT) => {
                  const {
                    id, image, price, totalPrice, quantity, rating, category, title,
                  } = datum;
                  return (
                    <tr className="" key={id}>
                      <td className="flex justify-between">
                        <div className="flex lg:space-x-4">
                          <div className="hidden lg:block">
                            <div className="w-[16rem] h-[14rem] bg-white flex items-center justify-center rounded-3xl">
                              <Image
                                alt={title}
                                src={image}
                                width="122"
                                height="76" />
                            </div>
                          </div>
                          <div className="flex flex-col justify-between w-full md:my-8 text-black">
                            <div>
                              <h3 className="uppercase text-[#86898D] text-sm">
                                {category}
                              </h3>
                              <p className="mt-3 text-lg font-semibold">
                                {title}
                              </p>
                            </div>
                            <div className="text-[#86898D]">
                              <p>
                                Rating:{" "}
                                <span className="text-yellow-500 font-bold">
                                  {rating.rate}
                                </span>
                              </p>
                              <p>
                                Num. Surveyed:{" "}
                                <span className="text-black">
                                  {rating.count}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="w-16">${price}</td>
                      <td>
                        <div className="flex space-x-4 items-center">
                          <QtyBtn
                            onClick={() => handleQtyChange(datum, "-")}
                            text="-" />
                          <span>{quantity}</span>
                          <QtyBtn
                            onClick={() => handleQtyChange(datum, "+")}
                            text="+" />
                        </div>
                      </td>
                      <td>${totalPrice}</td>
                    </tr>
                  );
                })}
                <tr>
                  <Th className="w-[22rem] md:w-[30rem]" text="" />
                  <Th className="w-[7rem]" text="" />
                  <Th className="w-[10rem] text-lg" text="Grand Total" />
                  <Th
                    className="w-[10rem] text-xl text-green-700"
                    text={` $${totalCartPrice.toFixed(2).toString()}`} />
                </tr>
              </tbody>
            </table><div className="mt-6 flex justify-center w-full">
              <button
                onClick={handleCheckout}
                type="button"
                className="bg-green-700 rounded-lg px-6 py-3 text-white"
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center mt-6 px-5 py-4 bg-[#e2dbe3] rounded-2xl w-full lg:w-4/5 mx-auto">
            <h2 className="text-2xl text-gray-700"> Oops, empty cart you've got here! </h2>
            <button
              onClick={handleCheckout}
              type="button"
              className="bg-green-700 mt-6 rounded-lg px-6 py-3 text-white"
            >
              Go Add to Cart
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default CartTable;
