import React from 'react';
import quayMat from '../../../assets/img/quayMat.webp';
import shirt from '../../../assets/img/Shirt-landing.webp';
import shoe from '../../../assets/img/Shoe-landing.webp';
import Sung from '../../../assets/img/Sunglasses-landing.webp';
import {
  AiTwotoneFire,
  AiFillPlayCircle,
  AiFillPlaySquare,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <>
      <div className="flex item-center gap-20">
        <div className="max-h-[250px] max-w-[250px]">
          <img src={quayMat} alt="" className="object-cover flex-shirt-0" />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-4 mb-3">
            <div className="flex justify-center item-center h-12 w-12 rounded-full bg-[#f1c40f]">
              <AiTwotoneFire className="w-8 h-8 mt-2" />
            </div>
            <h2 className="text-2xl font-semibold">FEATURED</h2>
          </div>
          <div className="bg-black rounded-tl-3xl py-[17px] px-12 ">
            <ul className=" flex items-center gap-10">
              <li className="flex  items-center gap-5 pr-[50px]">
                <div className="w-36 h-36 ">
                  <img
                    src={shirt}
                    alt=""
                    className="object-cover "
                    sizes="100vw"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-xl uppercase font-bold ">Shirts</h3>
                  <a
                    href="#"
                    className="text-gray-200 text-sm font-medium hover:text-gray-500"
                  >
                    See All
                  </a>
                </div>
              </li>
              <li className="flex  items-center gap-5 pr-[50px]">
                <div className="w-36 h-36 ">
                  <img
                    src={shoe}
                    alt=""
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-xl uppercase font-bold ">Shores</h3>
                  <a
                    href="#"
                    className="text-gray-200 text-sm font-medium hover:text-gray-500"
                  >
                    See All
                  </a>
                </div>
              </li>
              <li className="flex  items-center gap-5 pr-[50px] ">
                <div className="w-36 h-36 ">
                  <img
                    src={Sung}
                    alt=""
                    className="object-cover "
                    sizes="100vw"
                  />
                </div>
                <div className="text-white">
                  <h3 className="text-xl uppercase font-bold ">Accessory</h3>
                  <a
                    href="#"
                    className="text-gray-200 text-sm font-medium hover:text-gray-500"
                  >
                    See All
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
