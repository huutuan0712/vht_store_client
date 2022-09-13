import React from 'react';
import { BiSearch, BiCartAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Navbar } from '.';
import Sun from '../../../assets/img/sun.webp';

export default function Header() {
  return (
    <>
      <div className="flex justify-between item-center gap-3 lg:flex-col lg:justify-center">
        <ul className="flex gap-7 items-center justify-center">
          {Navbar.map((item, idx) => (
            <li key={idx}>
              <Link
                key={idx.id}
                to={item.path}
                className="text-base font-semibold hover:text-[#f1c40f]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative mr-16 text-center">
          <span className="font-extrabold text-3xl  lg:shadow-sm ">
            V E L Z O N
          </span>
          <span className="absolute  top-[-15%] right-[15%] translate-x-1 translate-y-0 z-[-1]  lg:hidden ">
            <img src={Sun} alt="" className="w-12 h-12 spinner-1 " />
          </span>
        </div>
        <div className="flex items-center px-3 rounded-lg shadow-lg lg:hidden">
          <BiSearch className="w-8 h-8 p-1" />
          <input
            type="text"
            placeholder="Search..."
            className="p-1 outline-none bg-transparent cursor-auto"
          />
          <div className="border-l-2 pl-2">
            <BiCartAlt className="w-8 h-8 p-1 " />
          </div>
        </div>
      </div>
    </>
  );
}
