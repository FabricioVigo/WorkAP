import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";


import Home from "../views/Home";
import About from "../views/about";
import Services from "../views/Services";
import Contact from "../views/contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/contact",
    element: <Contact />
  },

])

const MyRoutes = () => <RouterProvider router={router} />;
export default MyRoutes