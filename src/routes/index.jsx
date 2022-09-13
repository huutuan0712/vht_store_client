import React from 'react';
import { Route, Routes as RouterWrapper } from 'react-router-dom';
import LayoutWrapper from '../layout';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Home from '../pages/Home/Home';
import ROUTER from './Routes';

export default function Routes() {
  return (
    <RouterWrapper>
      {Object.values(ROUTER).map((router, idx) =>
        router.hasLayout ? (
          <Route key={idx}>
            <Route key={idx} path="/login" element={<Login />} />
            <Route key={idx} path="/register" element={<Register />} />
            <Route
              key={idx}
              element={router.cate ? <LayoutWrapper /> : <Home />}
            >
              <Route
                key={idx}
                path={router.path}
                element={<router.component />}
              />
            </Route>
          </Route>
        ) : (
          <Route
            key={idx}
            index={idx}
            path={router.path}
            element={<router.component />}
          />
        )
      )}
    </RouterWrapper>
  );
}
