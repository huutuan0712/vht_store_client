import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/4">
        <img
          className="block w-full"
          src="https://bazar-react.vercel.app/assets/images/illustrations/404.svg"
          alt=""
        />
        <div className="flex justify-center gap-2 items-center mt-2">
          <button className="btn btn-ghost" onClick={() => navigate('/')}>
            Go Back
          </button>
          <button className="btn btn-ghost" onClick={() => navigate('/')}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
