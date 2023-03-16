import React, { useState } from "react";
import "./App.css";
import TestProducts from "./components/TestProduct.";

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(true);
  const showClick = () => setShowProducts((show) => !show);
  //   console.log(showProducts);
  return (
    <div>
      {showProducts && <TestProducts />}
      <button onClick={showClick}>Toggle</button>
    </div>
  );
}
