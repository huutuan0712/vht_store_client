import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import shirt from '../assets/img/shirt.webp';
import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { BiCheck, BiSun } from 'react-icons/bi';

export default function LayoutWrapper() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header />
      <main className="bg-[#fafafa] dark:bg-[#191919] dark:text-[#DDDDDD]">
        <div className="layout-container pb-20 pt-5 sm:px-4 overflow-hidden">
          <Outlet />
        </div>
        <button
          className="fixed px-2 py-3 bg-[#fecd48] flex items-center gap-1 flex-col  top-[40vh] right-0 z-30"
          onClick={() => setShow(!show)}
        >
          <p className="text-lg font-semibold">4</p>
          <BiSun className="text-2xl" />
        </button>
        <div className="fixed right-0 top-[60vh] bg-[#666] px-2 py-3 flex flex-col gap-2">
          <a href="#">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#">
            <FaYoutube className="text-2xl" />
          </a>
          <a href="#" className="text-2xl">
            <FaInstagramSquare />
          </a>
        </div>

        <div
          className={`${
            show && 'active'
          } fixed top-[45vh] right-[40px] py-3 px-3 bg-[#f6f5f3] shadow-md translate-x-[100%] transition ease-in duration-700 opacity-0  `}
        >
          <h3 className="text-xl font-semibold mb-5 border-b-2 border-[#fecd48]">
            Cart (4)
          </h3>
          <div className="h-[250px] overflow-auto mb-3 p-1 custom-scrollbar">
            <ul>
              <li className="flex items-center gap-1 mb-4 border-2 p-1 border-[#f1c40f]">
                <div className="h-24 w-24">
                  <img src={shirt} alt="" className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className=" font-medium max-w-[250px] mb-2 mt-2 ">
                    MEN'S POLITICAL CAMPAIGN HOODIE LARGE FIT IN GREY
                  </p>
                  <p className=" text-sm font-semibold mb-2">$938.00</p>
                  <div className="flex justify-between items-center text-sm mb-3">
                    <p>Size:</p>
                    <p>XS</p>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <p>Quantity:</p>
                    <p>6</p>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-1 mb-4 border-2 p-1 border-[#f1c40f] ">
                <div className="h-24 w-24">
                  <img src={shirt} alt="" className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className=" font-medium max-w-[250px] mb-2 mt-2 ">
                    MEN'S POLITICAL CAMPAIGN HOODIE LARGE FIT IN GREY
                  </p>
                  <p className=" text-sm font-semibold mb-2">$938.00</p>
                  <div className="flex justify-between items-center text-sm mb-3">
                    <p>Size:</p>
                    <p>XS</p>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <p>Quantity:</p>
                    <p>6</p>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-1 mb-4 border-2 p-1 border-[#f1c40f]">
                <div className="h-24 w-24">
                  <img src={shirt} alt="" className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className=" font-medium max-w-[250px] mb-2 mt-2">
                    MEN'S POLITICAL CAMPAIGN HOODIE LARGE FIT IN GREY
                  </p>
                  <p className=" text-sm font-semibold mb-2">$938.00</p>
                  <div className="flex justify-between items-center text-sm mb-3">
                    <p>Size:</p>
                    <p>XS</p>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <p>Quantity:</p>
                    <p>6</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="px-5 py-3 bg-[#fecd48] text-center rounded-full max-w-[150px] block font-semibold text-lg mx-auto"
          >
            Check Out
          </a>
        </div>
      </main>
    </>
  );
}
