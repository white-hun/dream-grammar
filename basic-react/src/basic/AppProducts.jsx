import React, { useState } from "react";
import "./App.css";
import Products from "./components/Products";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  const showClick = () => setShowProducts((show) => !show);
  //   console.log(showProducts);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={showClick}>Toggle</button>
    </div>
  );
}
