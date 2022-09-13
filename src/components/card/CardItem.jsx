import React from 'react';
import shirt from '../../assets/img/shirt.webp';

import { BiCheck, BiTrash } from 'react-icons/bi';

export default function CardItem() {
  return (
    <>
      <div className="flex items-center gap-2 ">
        <div className="bg-[#f6f5f3] h-[100px] w-[100px]   ">
          <img src={shirt} alt="" className="object-cover " />
        </div>
        <div className="flex-1">
          <div className="py-5 px-3 flex flex-col justify-between">
            <div className="text-sm mb-3 uppercase font-semibold">
              MEN'S POLITICAL CAMPAIGN HOODIE LARGE FIT IN GREY
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BiCheck className="text-lg bg-[#f1c40f]  rounded-full" />
                <p className="text-base font-medium text-gray-700">
                  Balenciaga
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-sm">XS</p>
                  <div className="h-3 w-3 bg-[#406174]" />
                </div>
                <button>
                  <BiTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
