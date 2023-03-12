import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 데이터를 네트워크에서 받아옴");
        setProducts(data);
      });
    return () => {
      console.log("🧹 청소하기");
    };
  }, [checked]);
  return (
    <div>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={onChange}
      />
      <label htmlFor="checkbox">Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
