import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";

const Body = lazy(() => import("./components/Body"));
const AboutUs = lazy(() => import("./components/About"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const Contact = lazy(() => import("./components/Contact"));
const ResturantMenu = lazy(() => import("./components/ResturantMenu"));
const Cart = lazy(() => import("./components/Cart"));
const Profile = lazy(() => import("./components/Profile"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

const appRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "about",
          element: <AboutUs />,
          children: [
            {
              path: "profile",
              element: <Profile />,
            },
          ],
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "resturants",
          element: <Navigate to={"/"} />,
        },
        {
          path: "resturants/:id",
          element: <ResturantMenu />,
        },
      ],
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter()} />);