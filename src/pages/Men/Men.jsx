import React from 'react';
import {
  BsChevronRight,
  BsSortDown,
  BsSortUp,
  BsSearch,
  BsChevronUp,
} from 'react-icons/bs';
import { BiCheck, BiSun } from 'react-icons/bi';
import saleOff from '../../assets/img/saleOff.webp';

import CardProduct from '../../components/CardProduct';

export default function Men() {
  return (
    <>
      <div className="flex  items-center gap-2 mb-8 ">
        <a href="/">Homepage</a>
        <BsChevronRight />
        <a href="#">Men's Product</a>
      </div>
      <div className="flex items-center gap-3">
        <div className="">
          <h3 className="font-semibold text-5xl mb-5">Men's Products</h3>
          <p className="text-lg text-gray-600 font-medium mb-14">
            Showing 4 products out of 19 products
          </p>
          <div className="text-base text-right  font-bold relative">
            <p>SORTED BY:</p>
            <div className="flex items-center gap-1 absolute top-[-2px] right-[-90px]  ">
              <button className="text-black py-1 px-2 flex items-center">
                <BsSortDown className="text-lg" />
              </button>
              <button className="text-black py-1 px-2 items-center">
                <BsSortUp className="text-lg" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-[150px] pb-[20px]  relative">
          <div className="flex max-w-[500px] ml-auto rounded-full">
            <input
              type="text"
              placeholder="we can give you everything, expect the girl you lost ..."
              className="outline-none border-2 border-gray-200 appearance-none -mr-16 py-2 px-7 flex-1 rounded-full bg-transparent peer"
            />
            <button className="flex items-center gap-2 py-2 px-2 bg-[#fecd48] rounded-full">
              <BsSearch />
              <p className="text-base font-medium">Search</p>
            </button>
          </div>
          <div className="absolute top-[-40px] right-[-70px] ">
            <img src={saleOff} alt="" className="object-cover" />
          </div>
        </div>
      </div>
      <div className="grid-cols-prod gap-x-4 items-start">
        <div>
          <div className="overflow-y-hidden shadow-lg mb-4 ">
            <button className="flex items-center justify-between py-[23px] px-5 w-full">
              <p className="font-semibold">Price</p>
              <BsChevronUp />
            </button>
            <div className="bg-white">
              <div className="px-6 py-2 mb-4">
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Form</span>
                    <div className="text-xl font-bold">$0</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">To</span>
                    <div className="text-xl font-bold">$1800</div>
                  </div>
                </div>
                <div className="py-3 mb-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="20"
                    className="range range-sm w-full"
                  />
                </div>
                <div className="text-center mb-4">
                  <button className="px-4 py-3 border-2 border-gray-300 outline-none hover:border-[#f1c40f] ">
                    Apply filter
                  </button>
                </div>
                <div className="text-sm">
                  <span>Result :</span>
                  <span>10 products</span>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-y-hidden shadow-lg mb-4">
            <button className="flex items-center justify-between py-[23px] px-5 w-full">
              <p className="font-semibold">Status</p>
              <BsChevronUp />
            </button>
            <div className="bg-white">
              <div className="px-6 pt-2 pb-4 ">
                <div className="flex items-center gap-3 mb-6 ">
                  <div className="h-[18px] w-[18px] relative">
                    <input
                      type="radio"
                      className="appearance-none h-full w-full transition rounded-full border-2  border-[#f1c40f] "
                      // border-gray-600
                    />
                    <div className="absolute h-3 w-3 rounded-full bg-[#f1c40f] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
                  </div>
                  <div className="flex-1 text-sm font-semibold flex justify-between items-center">
                    <p> Sale-off</p>
                    <p className="">6</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-6 ">
                  <div className="h-[18px] w-[18px] relative">
                    <input
                      type="radio"
                      className="appearance-none h-full w-full transition rounded-full border-2  border-gray-600  "
                    />
                    {/* <div className="absolute h-3 w-3 rounded-full bg-[#f1c40f] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " /> */}
                  </div>
                  <div className="flex-1 text-sm font-medium flex justify-between items-center">
                    <p> Limited</p>
                    <p className="">7</p>
                  </div>
                </div>
                <div className="flex items-center gap-3  ">
                  <div className="h-[18px] w-[18px] relative">
                    <input
                      type="radio"
                      className="appearance-none h-full w-full transition rounded-full border-2  border-gray-600  "
                    />
                    {/* <div className="absolute h-3 w-3 rounded-full bg-[#f1c40f] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " /> */}
                  </div>
                  <div className="flex-1 text-sm font-medium flex justify-between items-center">
                    <p> No filter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-y-hidden shadow-lg ">
            <button className="flex items-center justify-between py-[23px] px-5 w-full">
              <p className="font-semibold">Brand</p>
              <BsChevronUp />
            </button>
            <div className="bg-white">
              <div className="px-6 pt-2 pb-4 ">
                <div className="flex items-center gap-3 mb-6 ">
                  <div className="h-[18px] w-[18px] relative">
                    <input
                      type="radio"
                      className="appearance-none h-full w-full transition rounded-full bg-gray-300 "
                      // border-gray-600
                    />
                    <div className="absolute h-4 w-4 rounded-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center ">
                      <BiCheck className="text-lg" />
                    </div>
                  </div>
                  <div className="flex-1 text-sm font-semibold flex justify-between items-center">
                    <p> Balenciaga</p>
                    <p className="">7</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-6 ">
                  <div className="h-[18px] w-[18px] relative">
                    <input
                      type="radio"
                      className="appearance-none h-full w-full transition rounded-full bg-gray-300  "
                    />
                    {/* <div className="absolute h-3 w-3 rounded-full bg-[#f1c40f] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " /> */}
                  </div>
                  <div className="flex-1 text-sm font-medium flex justify-between items-center">
                    <p> Louis Vuitton</p>
                    <p>5</p>
                  </div>
                </div>
                <div className="flex items-center gap-3  ">
                  <div className="h-[18px] w-[18px] relative">
                    <input
                      type="radio"
                      className="appearance-none h-full w-full transition rounded-full bg-gray-300  "
                    />
                    {/* <div className="absolute h-3 w-3 rounded-full bg-[#f1c40f] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " /> */}
                  </div>
                  <div className="flex-1 text-sm font-medium flex justify-between items-center">
                    <p> Gucci</p>
                    <p>5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-3 gap-x-3 gap-y-5">
            <li>
              <CardProduct />
            </li>
            <li>
              <CardProduct />
            </li>
            <li>
              <CardProduct />
            </li>
            <li>
              <CardProduct />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
