import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>,
  },
  {
    path: "/cart",
    element: <div>Cart Page</div>,
  },
  {
    path: "/checkout",
    element: <div>Checkout Page</div>,
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}