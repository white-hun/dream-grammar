import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prev) => !prev);

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("π₯ λ°μ΄ν°λ₯Ό λ€νΈμν¬μμ λ°μμ΄");
        setProducts(data);
      });
    return () => {
      console.log("π§Ή μ²­μνκΈ°");
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
      <label htmlFor="checkbox">Show Only π₯ Sale</label>
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
