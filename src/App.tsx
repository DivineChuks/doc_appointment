import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Pay from "./pages/Pay";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pay",
        element: <Pay />,
      },
      {
        path: "/book",
        element: <Appointment />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="font-montserrat">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
