import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteLayout from './routes';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function App() {
  return (
    <BrowserRouter>
      <RouteLayout />
    </BrowserRouter>
  );
}
