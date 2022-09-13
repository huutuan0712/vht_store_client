import React from 'react';
import shirt from '../assets/img/shirt.webp';
import { BsCheckCircle } from 'react-icons/bs';

export default function CardProduct() {
  return (
    <div className="shadow-lg rounded-lg border overflow-hidden ">
      <div className="bg-[#f6f5f3] relative group  ">
        <img src={shirt} alt="" className="object-cover" />
        <a
          href="/detail"
          className="absolute top-1/2 right-1/2 translate-x-1/2  z-10  flex items-center justify-center text-[#f1c40f] font-medium 
      px-3 py-2 border-2 border-[#f1c40f] opacity-0 transition duration-300 group-hover:opacity-100 text-sm"
        >
          View Product
        </a>
        <div className="absolute w-full h-full inset-0 bg-black/60 opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
      <div className="py-5 px-4 flex flex-col justify-between">
        <div className="text-sm mb-5 uppercase font-medium">
          MEN'S POLITICAL CAMPAIGN HOODIE LARGE FIT IN GREY
        </div>
        <div>
          <div className="flex items-center gap-2">
            <BsCheckCircle />
            <p className="text-base font-medium text-gray-400">Balenciaga</p>
          </div>
          <div className="text-right">$938.00</div>
        </div>
      </div>
    </div>
  );
}
