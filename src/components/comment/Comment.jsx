import React from 'react';
import dog from '../../assets/img/catface-8.webp';
import { FaStar } from 'react-icons/fa';

export default function Comment() {
  return (
    <div className=" bg-[#f5f6f3] px-5 py-4 rounded-md mb-3">
      <h3 className="text-2xl font-semibold mb-3">Comments</h3>
      <ul className=" overflow-y-auto h-[500px] custom-scrollbar px-10 mb-3">
        <li className="bg-white rounded-2xl px-3 py-5 flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-20 w-20">
              <img src={dog} alt="" className="object-cover rounded-full" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Huu Tuan</h3>
              <p>i'm so good</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-col px-5 py-3 ">
            <ul className="flex items-center gap-2 mb-5 ">
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-gray-500" />
              </li>
            </ul>
            <span className="text-sm font-normal text-gray-500">
              6 months ago
            </span>
          </div>
        </li>
        <li className="bg-white rounded-2xl px-3 py-5 flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-20 w-20">
              <img src={dog} alt="" className="object-cover rounded-full" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Huu Tuan</h3>
              <p>i'm so good</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-col px-5 py-3 ">
            <ul className="flex items-center gap-2 mb-5 ">
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-gray-500" />
              </li>
            </ul>
            <span className="text-sm font-normal text-gray-500">
              6 months ago
            </span>
          </div>
        </li>
        <li className="bg-white rounded-2xl px-3 py-5 flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-20 w-20">
              <img src={dog} alt="" className="object-cover rounded-full" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Huu Tuan</h3>
              <p>i'm so good</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-col px-5 py-3 ">
            <ul className="flex items-center gap-2 mb-5 ">
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-gray-500" />
              </li>
            </ul>
            <span className="text-sm font-normal text-gray-500">
              6 months ago
            </span>
          </div>
        </li>
        <li className="bg-white rounded-2xl px-3 py-5 flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-20 w-20">
              <img src={dog} alt="" className="object-cover rounded-full" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Huu Tuan</h3>
              <p>i'm so good</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-col px-5 py-3 ">
            <ul className="flex items-center gap-2 mb-5 ">
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-[#f1c40f]" />
              </li>
              <li>
                <FaStar className="text-gray-500" />
              </li>
            </ul>
            <span className="text-sm font-normal text-gray-500">
              6 months ago
            </span>
          </div>
        </li>
      </ul>
      <div className="flex items-center gap-3 mb-5 px-6">
        <h3 className="text-xl font-semibold mb-3">Your rating :</h3>
        <ul className="flex items-center gap-2 mb-5 ">
          <li>
            <FaStar className="text-gray-500 text-xl hover:text-[#f1c40f]" />
          </li>
          <li>
            <FaStar className="text-gray-500 text-xl hover:text-[#f1c40f]" />
          </li>
          <li>
            <FaStar className="text-gray-500 text-xl hover:text-[#f1c40f]" />
          </li>
          <li>
            <FaStar className="text-gray-500 text-xl hover:text-[#f1c40f]" />
          </li>
          <li>
            <FaStar className="text-gray-500 text-xl hover:text-[#f1c40f]" />
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3 px-6 pb-3">
        <div className="h-24 w-24">
          <img src={dog} alt="" className="object-cover rounded-full" />
        </div>
        <textarea
          cols="100"
          placeholder="What's your thought ?"
          className="w-full h-[70px] outline-none shadow-sm px-5 py-3 overflow-y-auto custom-scrollbar  "
          style={{ height: '100px' }}
        ></textarea>
        <button className="px-5 py-3 font-medium text-lg bg-[#fecd48] rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
}
