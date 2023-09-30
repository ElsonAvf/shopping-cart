import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Shop from './Shop';
import Home from './Home';
import Cart from './Cart';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/shop',
      element: <Shop />
    },
    {
      path: '/shop/cart',
      element: <Cart />
    }
  ]);
  return <RouterProvider router={router} />;
}
