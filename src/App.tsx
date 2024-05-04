import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/Login";
import ProductList from "./Pages/ProductList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      Component: LoginPage,
    },
    {
      path: "/product-list",
      Component: ProductList,
    },
    {
      path: "/",
      Component: LoginPage,
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
