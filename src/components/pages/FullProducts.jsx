import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ButtonSmall from "../ButtonSmall";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import dropdown from "../../images/dropdown.png";


const FullProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(products)
  let componentMounted = true;

  useEffect(() => {
    axios
      .get("http://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
        if(componentMounted){
          setFilter(res.data)
          console.log(filter)
        }
        return () => {
          componentMounted = false;
        }
      });
  }, []);
  

  const filterProducts = (catg) => {
    const updateList = products.filter((x)=>x.category.name === catg);
    setFilter(updateList);
  }

  return (

    
    

    <div id="FullproductsSection">
      <div className="FullcategorySection">
        <h1 className="title">A List of all our Products</h1>

        <ul className="categories">
          <li onClick={()=>setFilter(products)}>All</li>
          <li onClick={()=>filterProducts("Shoes")}>Shoes</li>
          <li onClick={()=>filterProducts("Furniture")}>Furnitures</li>
          <li onClick={()=>filterProducts("Clothes")}>Clothes</li>
          <li onClick={()=>filterProducts("Electronics")}>Electronics</li>
          <li onClick={()=>filterProducts("Others")}>Others</li>
        </ul>

        <div className="categories-sm">
          <div className="filter">
            <h5>Filter by categories</h5>
            <img src={dropdown} />
          </div>
          <div className="filter-list-2">
            <li onClick={() => setFilter(products)}>All</li>
            <li onClick={() => filterProducts("Shoes")}>Shoes</li>
            <li onClick={() => filterProducts("Furniture")}>Furnitures</li>
            <li onClick={() => filterProducts("Clothes")}>Clothes</li>
            <li onClick={() => filterProducts("Electronics")}>Electronics</li>
            <li onClick={() => filterProducts("Others")}>Others</li>
          </div>
        </div>

      </div>

      {loading ? (
        <div className="Fullproducts">
          
          <Skeleton className="space" height={340} width={300} />
          <Skeleton className="space" height={340} width={300} />
          <Skeleton className="space" height={340} width={300} />
          <Skeleton className="space" height={340} width={300} />
          
          <Skeleton className="space" height={340} width={300} />
          <Skeleton className="space" height={340} width={300} />
          <Skeleton className="space" height={340} width={300} />
          <Skeleton className="space" height={340} width={300} />

        </div>
      ) : (
        <div className="Fullproducts">
          {filter.map((product) => {
            return (
              <div key={product.id} className="card">
                <img src={product.images} />
                <p className="niche">{product.category.name}</p>
                <h3 className="product-name">{product.title}</h3>
                <div className="addtocart">
                  <p className="price">${product.price}.<span style={{ color: "darkgray" }}>00</span></p>
                <NavLink className='link' to={`/products/${product.id}`}>
                  <ButtonSmall color="#2845d33b" text="Buy now" />
                </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FullProducts;
