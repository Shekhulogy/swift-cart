import React, { Suspense } from "react";
import "./App.css";
import { Home } from "./components/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import { CategoryProducts } from "./components/CategoryProducts.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path="categories/electronics"
          element={
            <div className="category">
              {" "}
              <CategoryProducts category={"electronics"} />
            </div>
          }
        />
        <Route
          path="categories/jewelery"
          element={
            <div className="category">
              <CategoryProducts category={"jewelery"} />
            </div>
          }
        />
        <Route
          path="categories/men's clothing"
          element={
            <div className="category">
              <CategoryProducts category={"men's clothing"} />
            </div>
          }
        />
        <Route
          path="categories/women's clothing"
          element={
            <div className="category">
              <CategoryProducts category={"women's clothing"} />
            </div>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
