// my practice
import React, { useState } from "react";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const totalClick = () => setCount((prev) => prev + 1);
  return (
    <div className="container">
      <div className="banner">
        Total count: {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      <div className="counters">
        <Counter total={count} onClick={totalClick} />
        <Counter total={count} onClick={totalClick} />
      </div>
    </div>
  );
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import React, { useState } from "react";
// import "./App.css";
// import Counter from "./components/Counter";

// export default function AppCounter() {
//   const [count, setCount] = useState(0);
//   const totalClick = () => setCount((prev) => prev + 1);
//   return (
//     <div className="container">
//       <div className="banner">
//         Total count : {count} {count > 10 ? "🔥" : "❄️"}
//       </div>
//       <div className="counters">
//         <Counter total={count} onClick={totalClick} />
//         <Counter total={count} onClick={totalClick} />
//       </div>
//     </div>
//   );
// }
