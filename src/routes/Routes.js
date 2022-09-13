import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Cart from '../pages/Cart/Cart';

import Home from '../pages/Home/Home';
import Men from '../pages/Men/Men';
import NotFound from '../pages/NotFound/NotFound';
import Detail from '../pages/Product/Detail';
import Women from '../pages/Women/Women';

const ROUTER = {
  HOME: {
    path: '/',
    component: Home,
    hasLayout: true,
    cate: false,
  },
  MEN: {
    path: '/men',
    component: Men,
    hasLayout: true,
    cate: true,
  },
  WOMEN: {
    path: '/women',
    component: Women,
    hasLayout: true,
    cate: true,
  },
  PROD_DETAIL: {
    path: '/detail',
    component: Detail,
    hasLayout: true,
    cate: true,
  },
  CART: {
    path: '/cart',
    component: Cart,
    hasLayout: true,
    cate: true,
  },
  LOGIN: {
    path: '/login',
    component: Login,
    hasLayout: true,
  },
  REGISTER: {
    path: '/register',
    component: Register,
    hasLayout: true,
  },

  NOTFOUND: {
    path: '*',
    component: NotFound,
  },
};

export default ROUTER;
