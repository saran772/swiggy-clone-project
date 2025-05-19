import { StrictMode } from "react";
import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Body from "./component/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./component/contact.jsx";
import Error from "./component/Error.jsx";
import Restaurantmenu from "./component/Restaurantmenu.jsx";
import Shimmer from "./component/shimmer.jsx";

const Instamart = lazy(() => import("./component/Instamart.jsx"));

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resid",
        element: <Restaurantmenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={approuter} />
  </StrictMode>
);
