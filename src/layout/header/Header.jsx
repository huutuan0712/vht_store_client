import React, { useState } from 'react';
import { BiCartAlt, BiUser } from 'react-icons/bi';
import { HiOutlineUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Sun from '../../assets/img/sun.webp';
import { Navbar } from '../../pages/Home/header';

export default function Header() {
  const [selectText, setSelectText] = useState(1);

  return (
    <header className="px-24 pb-5 pt-10">
      <div className="flex justify-between item-center mb-16">
        <Link
          to={'/login'}
          className="flex  item-center text-base font-semibold px-5 gap-2  "
        >
          <HiOutlineUser className="h-6 w-6" /> Login
        </Link>
        <div className="relative mr-16">
          <Link to="/">
            <span className="font-extrabold text-3xl  ">V E L Z O N</span>
            <span className="absolute  top-[-15%] right-[15%] translate-x-1 z-[-1]">
              <img src={Sun} alt="" className="w-12 h-12 spinner-1 " />
            </span>
          </Link>
        </div>
        <Link to={'/cart'}>
          <div className="flex items-center px-3 relative">
            <BiCartAlt className="w-8 h-8 p-1 " />
            <div className="absolute left-0 top-0 h-5 w-5  bg-red-500 rounded-full text-center text-white">
              <p className="text-sm">4</p>
            </div>
          </div>
        </Link>
      </div>
      <ul className="flex gap-7 items-center justify-center">
        {Navbar.map((item, idx) => (
          <li key={idx} className="relative group transition p-1">
            <Link
              key={idx.id}
              to={item.path}
              className={`${
                selectText === item.id && 'font-bold  '
              } text-base  font-weight`}
              onClick={() => setSelectText(item.id)}
            >
              {item.name}
            </Link>
            <div className="animate-nav-move text-left  group-hover:-z-10 group-hover:opacity-100 " />
          </li>
        ))}
      </ul>
    </header>
  );
}
