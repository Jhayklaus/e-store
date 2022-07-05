import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import ButtonSmall from "./ButtonSmall";
import Header from "./Header";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then((res) => {
      setProduct(res.data);
      setLoading(false);
      console.log(product);
    });
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="product-img">
          <Skeleton width={600} height={400} />
        </div>
        <div className="product-context">
          <Skeleton width={300} height={50} />
          <br />
          <Skeleton width={400} height={50} />
          <br />
          <Skeleton width={200} height={50} />
          <br />
          <Skeleton width={400} height={100} />
          <br />
          <div className="productCTA">
            <Skeleton width={100} height={50} />
            <Skeleton width={100} height={50} />
          </div>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="backBtn">
          <NavLink className="link" to="/">
            <ButtonSmall text="<<< Back" color="#2845d33b" />
          </NavLink>
        </div>
        <div className="product-img">
          <img
            src={product.images}
            alt={product.title}
            height="400px"
            width="600px"
          />
        </div>
        <div className="product-context">
          <h4>Category: {product.category.name}</h4>
          <h1>{product.title}</h1>
          <h2>
            ${product.price}.<span style={{ color: "darkgray" }}>00</span>
          </h2>
          <p>{product.description}</p>

          <div className="productCTA">
            <ButtonSmall color="#2845d33b" text="Go to Cart" />
            <ButtonSmall color="#2845d33b" text="Add to Cart" />
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <Header />
      <div className="detailSection">
        <div className="details">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
