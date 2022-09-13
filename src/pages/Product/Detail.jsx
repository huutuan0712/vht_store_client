import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

import { BiCheck, BiTrash } from 'react-icons/bi';
import Slider from 'react-slick';
import shirt from '../../assets/img/shirt.webp';
import shirt1 from '../../assets/img/shirt.webp';
import shirt2 from '../../assets/img/shirt.webp';
import shirt3 from '../../assets/img/shirt.webp';
import { BiPlus, BiMinus, BiHeart } from 'react-icons/bi';
import Comment from '../../components/comment/Comment';

export default function Detail() {
  const source = [shirt, shirt1, shirt2, shirt3];
  const settings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    dotsClass: 'dot-group',
    customPaging: (i) => (
      <img src={source[i]} alt="" className="bg-[#f6f5f3]" />
    ),
  };
  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Men's Product</a>
          </li>
          <li>Men's Political Campaign Large Fit T-shirt In White</li>
        </ul>
      </div>
      <div className="flex justify-center gap-10">
        <div className="px-5 py-10 max-w-[600px]">
          <Slider {...settings} className="prod_detail">
            {source.map((item, idx) => (
              <img src={item} key={idx} alt="" className="block bg-[#f6f5f3]" />
            ))}
          </Slider>
        </div>
        <div>
          <div className="bg-white px-[30px] pb-[25px] ">
            <h2 className="text-4xl font-semibold mb-10">
              MEN'S POLITICAL CAMPAIGN LARGE FIT T-SHIRT IN WHITE
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <BiCheck className="text-xl bg-[#f1c40f]  rounded-full" />
              <p className="text-base font-semibold text-black">Balenciaga</p>
            </div>
            <p className="text-lg font-medium text-gray-700k mb-10">
              Political Campaign Hoodie Large Fit in dark grey and white curly
              fleece
            </p>
            <ul className="text-base text-gray-500 flex items-center gap-5 pb-10">
              <li className="px-3 py-2 bg-[#f6f5f3]">hoodie</li>
              <li className="px-3 py-2 bg-[#f6f5f3]">rapper</li>
              <li className="px-3 py-2 bg-[#f6f5f3]">cool</li>
            </ul>
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-medium ">Size :</h3>
                <div className="text-lg font-semibold">Extra Small</div>
              </div>
              <ul className="flex items-center gap-4 mb-6">
                <li>
                  <button className="px-2 py-2 bg-[#fecd48] text-base font-semibold outline-none appearance-none">
                    XS
                  </button>
                </li>
                <li>
                  <button className="px-2 py-2  text-base  font-medium outline-none appearance-none">
                    S
                  </button>
                </li>
                <li>
                  <button className="px-2 py-2  text-base  font-medium outline-none appearance-none">
                    M
                  </button>
                </li>
                <li>
                  <button className="px-2 py-2  text-base  font-medium outline-none appearance-none">
                    L
                  </button>
                </li>
                <li>
                  <button className="px-2 py-2  text-base font-medium outline-none appearance-none">
                    XL
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-medium ">Color :</h3>
                <div className="text-lg font-semibold">Gray</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 mb-2 h-5 w-5 bg-[#406174]">
                  <BiCheck className="text-xl" />
                </div>
                <div className="flex items-center gap-2 mb-2 h-5 w-5 bg-black">
                  <BiCheck className="text-xl" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6 ">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-medium ">Quantity :</h3>
                <div className="text-lg font-semibold">4</div>
              </div>
              <div className="flex items-center justify-between gap-5 px-4 py-3 bg-gray-100">
                <button className="outline-none appearance-none ">
                  <BiMinus />
                </button>
                <p>4</p>
                <button className="outline-none appearance-none">
                  <BiPlus />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-10 ">
              <h3 className="text-lg font-medium ">Price :</h3>
              <div className="text-xl font-semibold">$938.00</div>
            </div>
            <div className="flex items-center justify-between gap-4  ">
              <div className="px-4 py-2 text-red-500 text-lg">
                <BiHeart className="h-6 w-6" />
              </div>
              <button className="uppercase bg-[#fecd48] font-semibold text-xl shadow-md rounded-sm active:shadow-sm active:scale-[1] active:translate-y-0 active:bg-[#e5b32f] hover:bg-[#fecd48] hover:-translate-y-[2px] transition-all duration-[250ms] z-10 relative overflow-hidden w-full py-5 group">
                Add To Basket
                <div className="-z-10 bg-[#ffffff33] absolute top-[-1000%] bottom-[-375%] w-9 translate3d-rotate group-hover:transition group-hover:duration-[1000ms] group-hover:ease-in-out group-hover:translate3d-rotate-hover"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Comment />
      <div className="max-w-[600px]">
        <div className="">
          <h3 className="text-xl font-semibold mb-3 ">Similar Products</h3>
          <div className="flex gap-3">
            <div className="flex flex-col shadow-md rounded-lg border relative">
              <div className="bg-[#f5f6f3]">
                <img src={shirt} alt="" />
              </div>
              <div className="p-4 flex-1">
                <h5 className="text-sm font-semibold mb-3">
                  MEN'S POLITICAL CAMPAIGN LARGE FIT T-SHIRT IN WHITE
                </h5>
                <div className="flex flex-col items-end gap-3">
                  <p className="text-sm font-medium text-gray-400 line-through ">
                    $2020.00
                  </p>
                  <p className="text-md font-semibold ">$1819.80</p>
                </div>
              </div>
              <div className="absolute top-3 right-2 rounded-md px-3 py-1 shadow-md bg-[#fecd48]">
                <p className="text-lg font-semibold leading-none mb-1 ">10%</p>
                <p className="text-[10px] font-normal uppercase text-center">
                  off
                </p>
              </div>
            </div>
            <div className="flex flex-col shadow-md rounded-lg border relative">
              <div className="bg-[#f5f6f3]">
                <img src={shirt} alt="" />
              </div>
              <div className="p-4 flex-1">
                <h5 className="text-sm font-semibold mb-3">
                  MEN'S POLITICAL CAMPAIGN LARGE FIT T-SHIRT IN WHITE
                </h5>
                <div className="flex flex-col items-end gap-3">
                  <p className="text-sm font-medium text-gray-400 line-through ">
                    $2020.00
                  </p>
                  <p className="text-md font-semibold ">$1819.80</p>
                </div>
              </div>
              <div className="absolute top-3 left-2 rounded-md px-3 py-2 bg-[#fdeeee] shadow-md">
                <p className="text-lg font-semibold leading-none text-red-500">
                  Limited
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
