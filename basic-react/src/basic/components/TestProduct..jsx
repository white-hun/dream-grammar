// import React, { useEffect, useState } from "react";

// export default function TestProducts() {
//   const [products, setProducts] = useState([]);
//   const [checked, setChecked] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const onChange = () => {
//     setChecked((prev) => !prev);
//   };

//   useEffect(() => {
//     fetch(`data/${checked ? "sale_" : ""}products.json`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("🔥 데이터를 네트워크에서 받아옴");
//         setProducts(data);
//         setLoading(true);
//       });
//     return () => {
//       console.log("🧹 청소하기");
//     };
//   }, [checked]);
//   return (
//     <div>
//       {loading ? (
//         <div>
//           <input id="checkbox" type="checkbox" value={checked} onChange={onChange} />
//           <label htmlFor="checkbox">Show Only 🔥 Sale</label>
//           <ul>
//             {products.map((product) => (
//               <li key={product.id}>
//                 <article>
//                   <h3>{product.name}</h3>
//                   <p>{product.price}</p>
//                 </article>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div className="loader">
//           <span>Loading...</span>
//         </div>
//       )}
//     </div>
//   );
// }

//----------------------------------------------------------------------

import React, { useState } from "react";
import useProducts from "../../hooks/use-products";

export default function TestProducts() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: checked });
  const onChange = () => setChecked((prev) => !prev);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <input id="checkbox" type="checkbox" value={checked} onChange={onChange} />
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
