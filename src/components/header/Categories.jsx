import React from "react";
import Style from "./Categories.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={Style.categories}>
      <ul>
        {categories &&
          categories.map((category, index) => {
            return (
              <NavLink
                key={index}
                className={Style.link}
                to={`/categories/${category}`}
              >
                <li>{category.toUpperCase()}</li>
              </NavLink>
            );
          })}
      </ul>
    </div>
  );
};
