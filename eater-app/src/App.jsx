import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement : <Error />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/checkout",
        element: <Checkout/>,
      },
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}