import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouteLayout from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <RouteLayout />
    </BrowserRouter>
  );
}
