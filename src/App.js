import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, ContentWithHeader } from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Parent from "./components/ParentComponent";
import Error from "./components/Error";
import About from "./components/About";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./context/UserContext";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Pricing = lazy(() => import("./components/Pricing"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Dummy Name",
    email: "dummyname@radiansys.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser,
        }}
      >
        <div className="flex flex-col min-h-screen">
          <Header /> {/* Place the Header component here */}
          <div className="flex-grow">
            {/* Render the content, including ContentWithHeader and Outlet */}
            <ContentWithHeader>
              <Outlet />
            </ContentWithHeader>
          </div>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
          />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: (
          <Suspense fallback={<Shimmer numberOfCards={10} />}>
            <Pricing />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/parent",
        element: <Parent />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
