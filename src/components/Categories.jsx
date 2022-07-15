import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ButtonSmall from "./ButtonSmall";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import dropdown from "../images/dropdown.png";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(products);
  let componentMounted = true;

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=4")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
        if (componentMounted) {
          setFilter(res.data);
          console.log(filter);
        }
        return () => {
          componentMounted = false;
        };
      });
  }, []);

  const filterProducts = (catg) => {
    const updateList = products.filter((x) => x.category.name === catg);
    setFilter(updateList);
  };

  return (
    <div id="productsSection">
      <div className="categorySection">
        <h1 className="title">Featured Products</h1>

       
      </div>

      {loading ? (
        <div className="products">
          <Skeleton className="space" height={300} width={250} />
          <Skeleton className="space" height={300} width={250} />
          <Skeleton className="space" height={300} width={250} />
          <Skeleton className="space" height={300} width={250} />
        </div>
      ) : (
        <div className="products">
          {filter.map((product) => {
            return (
              <div key={product.id} className="card">
                <img src={product.images} />
                <p className="niche">{product.category.name}</p>
                <h3 className="product-name">{product.title}</h3>
                <div className="addtocart">
                  <p className="price">${product.price}.<span style={{ color: "darkgray" }}>00</span></p>
                  <NavLink className="link" to={`/products/${product.id}`}>
                    <ButtonSmall color="#2845d33b" text="Buy now" />
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      )}

            {/* <div className="seeAll">
            <NavLink className="link" to="/products">
            <ButtonSmall color="#2845d33b" text="Start Shopping Now!" />
            </NavLink>
            </div> */}

    </div>

    

  );
};

export default Categories;
