import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaFacebookF, FaLinkedinIn, FaGofore } from 'react-icons/fa';
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from 'react-icons/hi';
import video from '../../assets/video/lv.mp4';
import { Link } from 'react-router-dom';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().label('Name').required(),
      password: Yup.string().required(),
    }),
  });
  return (
    <>
      <video src={video} loop autoPlay className="fixed object-cover"></video>
      <div className=" absolute top-[40px] right-[40px] rounded-3xl border shadow-lg px-24 py-14 bg-[#fafafa]">
        <h1 className="text-5xl mb-5 text-center font-semibold text-[#f1c40f]">
          Sign In
        </h1>
        <div className="flex items-center justify-center gap-5 mb-6">
          <div className="h-12 w-12 rounded-full border shadow-md flex justify-center items-center ">
            <FaFacebookF className="text-2xl" />
          </div>
          <div className="h-12 w-12 rounded-full border shadow-md flex justify-center items-center ">
            <FaGofore className="text-2xl" />
          </div>
          <div className="h-12 w-12 rounded-full border shadow-md flex justify-center items-center ">
            <FaLinkedinIn className="text-2xl" />
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-[#F6F5F3] p-2">
            <HiOutlineUser className="text-2xl text-gray-400" />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={`block w-full outline-none bg-transparent py-2 px-3 ${
                formik.touched.name && formik.errors.name
                  ? 'border-red-400'
                  : 'border-gray-300'
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </div>
          <div className="mb-2">
            {formik.touched.name && formik.errors.name && (
              <span className="text-red-400">{formik.errors.name}</span>
            )}
          </div>

          <div className="mb-6 flex items-center gap-2 rounded-lg bg-[#f6f5f3] p-2">
            <HiOutlineLockClosed className="text-2xl text-gray-400  " />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className={`block w-full outline-none bg-transparent py-2 px-3 ${
                formik.touched.password && formik.errors.password
                  ? 'border-red-400'
                  : 'border-gray-300'
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          <div className="mb-2">
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-400">{formik.errors.password}</span>
            )}
          </div>

          <div className="text-center mb-5">
            <a href="#" className="text-base font-medium mx-auto block mb-3">
              Forget your password ?
            </a>
            <button
              className="px-10 py-3 rounded-3xl shadow-lg bg-[#f1c40f] text-base font-semibold"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center">
          Don't have any account ?
          <Link to={'/register'} className="text-[#f1c40f]">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
