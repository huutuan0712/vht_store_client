import React from 'react';

import {
  AiTwotoneFire,
  AiFillPlayCircle,
  AiFillPlaySquare,
} from 'react-icons/ai';

import Banner from '../../assets/img/guy.webp';
import Footer from './footer/Footer';
import Header from './header/Header';

export default function Home() {
  return (
    <>
      <main className="px-20">
        <div className="max-w-[1290] pt-[50px] mx-auto">
          <Header />
          <div className="flex  items-center gap-20 pt-14 lg:flex-col">
            <div className="max-w-[600px] ">
              <p className="text-gray-400 flex font-semibold items-center gap-2 text-2xl mb-4">
                TRENDY COLLECTION'S{' '}
                <AiTwotoneFire className="text-[#f1c40f] h-7 w-7" />
              </p>
              <p className="text-7xl font-semibold mb-10">
                <p className="whitespace-nowrap">DRESSES TO</p>
                <p className="whitespace-nowrap">BE NOTICED</p>
              </p>
              <div className="max-w-[500px] border-l-4 font-medium pl-4 text-lg shadow-md mb-10 animate-pulse">
                Fashion is part of the daily air and it changes all the time,
                with all the events
              </div>
              <div className="flex justify-center item-center gap-2">
                <button className=" rounded-full bg-[#f1c40f] px-4 py-2 outline-none text-lg font-semibold  uppercase flex items-center gap-3 ">
                  start shopping
                  <AiFillPlayCircle className="w-8 h-8 " />
                </button>

                <button className="px-4 py-2 outline-none text-lg font-medium  flex items-center gap-2">
                  <AiFillPlaySquare className="w-11 h-11 " />
                  What's Trending ?
                </button>
              </div>
            </div>
            <div className="max-w-[600px] max-h-[600px] overflow-x-hidden flex-shrink-0">
              <img src={Banner} alt="" className="" />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
