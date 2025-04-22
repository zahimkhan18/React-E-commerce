import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/contact";
import Notfoundpage from "./components/Notfoundpage/Notfoundpage";
import Navbar from "./components/Navbar/Navbar";

const paths = createBrowserRouter([
  {
    path: "/",
    element:(
      <>
        <Navbar />
        <Home/>
      </>
    )
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element:(
      <>
        <Navbar />
        <Contact />
      </>
    )
  },
  {
    path: "/products",
    element:(
      <>
        <Navbar />
        <Products />
      </>
    )
  },
]);


function App() {
  const [count, setCount] = useState(0);
  return <RouterProvider router={paths}/>
}

export default App;
