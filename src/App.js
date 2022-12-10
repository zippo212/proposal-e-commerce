import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./hooks/ScrollToTop";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

const Layout = () =>{
  return (
    <div className="app">
      <Navbar/>
      <ScrollToTop/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/products/:id",
        element:<Products />
      },
      {
        path: "/product/:id",
        element:<Product />
      },
      {
        path: "*",
        element:<NotFound />
      }
    ]
  }
])

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
