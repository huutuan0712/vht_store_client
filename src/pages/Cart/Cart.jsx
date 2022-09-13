import React from 'react';
import CardItem from '../../components/card/CardItem';
import { BiPlus, BiMinus } from 'react-icons/bi';

export default function Cart() {
  return (
    <>
      <div className="grid-cols-card mt-10 ">
        <div className="bg-white px-5 shadow-md pb-6 ">
          <div className="flex justify-between items-center  pb-10 mb-10 border-b-2 border-[#f1c40f]  overflow-">
            <h2 className="font-semibold text-2xl  ">Shopping Cart</h2>
            <p className="font-semibold text-xl  ">4 items</p>
          </div>
          <ul className="grid-cols-card-items mb-6 ">
            <li className="text-lg text-gray-700 font-medium">
              Product Details
            </li>
            <li className="text-lg text-gray-700 font-medium">Quantity</li>
            <li className="text-lg text-gray-700 font-medium">Price</li>
            <li className="text-lg text-gray-700 font-medium">Total</li>
          </ul>
          <div className="overflow-y-auto h-[500px] custom-scrollbar">
            <div className="grid-cols-card-items items-center gap-10 mb-3 shadow-md">
              <CardItem />
              <div className="flex items-center justify-between gap-5 px-2 py-2 bg-gray-100">
                <button>
                  <BiMinus />
                </button>
                <p>4</p>
                <button>
                  <BiPlus />
                </button>
              </div>
              <div className="text-lg font-semibold">$938.00</div>
              <div className="text-lg font-semibold">$3752.00</div>
            </div>
            <div className="grid-cols-card-items items-center gap-10 mb-3 shadow-md">
              <CardItem />
              <div className="flex items-center justify-between gap-5 px-2 py-2 bg-gray-100">
                <button>
                  <BiMinus />
                </button>
                <p>4</p>
                <button>
                  <BiPlus />
                </button>
              </div>
              <div className="text-lg font-semibold">$938.00</div>
              <div className="text-lg font-semibold">$3752.00</div>
            </div>
            <div className="grid-cols-card-items items-center gap-10 mb-3 shadow-md">
              <CardItem />
              <div className="flex items-center justify-between gap-5 px-2 py-2 bg-gray-100">
                <button>
                  <BiMinus />
                </button>
                <p>4</p>
                <button>
                  <BiPlus />
                </button>
              </div>
              <div className="text-lg font-semibold">$938.00</div>
              <div className="text-lg font-semibold">$3752.00</div>
            </div>
            <div className="grid-cols-card-items items-center gap-10 mb-3 shadow-md">
              <CardItem />
              <div className="flex items-center justify-between gap-5 px-2 py-2 bg-gray-100">
                <button>
                  <BiMinus />
                </button>
                <p>4</p>
                <button>
                  <BiPlus />
                </button>
              </div>
              <div className="text-lg font-semibold">$938.00</div>
              <div className="text-lg font-semibold">$3752.00</div>
            </div>
          </div>
        </div>
        <div className="pl-11 pr-4">
          <h2 className="font-semibold text-2xl pb-10 mb-10 border-b-2 border-[#f1c40f]">
            Order Summary
          </h2>
          <div className="pb-10 mb-5 border-[#09a677] border-b-2">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-lg font-medium">ITEMS : 4</h3>
              <p className="text-lg font-semibold">$3752</p>
            </div>
            <div className="mb-5">
              <h3 className="text-lg font-medium mb-3">SHIPPING</h3>
              <select className="select select-warning  w-full max-w-xs">
                <option disabled selected>
                  Standard Delivery - $4.00
                </option>
                <option> Express Delivery - $7.00</option>
              </select>
            </div>
            <div className="mb-6">
              <form>
                <label className="text-lg font-medium mb-6 block">
                  PROMO CODE
                </label>
                <input
                  type="text"
                  placeholder="Enter your code here ..."
                  className="input w-full max-w-xs mb-6"
                />
                <button className="px-5 py-3 bg-[#fdeeee] text-red-600 font-semibold">
                  APPLY
                </button>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-lg font-medium">TOTAL COST</h3>
            <p className="text-lg font-semibold">$3752</p>
          </div>
          <button className="uppercase bg-[#fecd48] font-semibold text-xl shadow-md rounded-sm active:shadow-sm active:scale-[.98] active:translate-y-0 active:bg-[#e5b32f] hover:bg-[#fecd48] hover:-translate-y-[2px] transition-all duration-[250ms] z-10 relative overflow-hidden w-full py-5 group">
            checkout
            <div className="-z-10 bg-[#ffffff33] absolute top-[-1000%] bottom-[-375%] w-9 translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"></div>
          </button>
          {/* <button className=" px-8 py-4 bg-[#fecd48] text-lg font-semibold mx-auto w-full shadow-md rounded-lg">
            CHECKOUT
          </button> */}
        </div>
      </div>
    </>
  );
}
