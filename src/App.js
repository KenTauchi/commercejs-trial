import React, { useState, useEffect } from "react";
import "./styles/scss/styles.scss";
import { commerce } from "./lib/Commerce";
import ProductsList from "./lib/components/ProductsList";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log("error fetching your product data list");
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app">
      <ProductsList products={products} />
    </div>
  );
};

export default App;
