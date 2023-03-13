//---My code(by googling)---------------------------------------
// import React, { useState } from "react";

// export default function AppXY() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const pointMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//     console.log(e.clientX, e.clientY);
//   };
//   const pointStyle = {
//     transform: `translate(${position.x}px, ${position.y}px)`,
//   };
//   return (
//     <div className="container" onPointerMove={pointMove}>
//       <div className="pointer" style={pointStyle}></div>
//     </div>
//   );
// }
//--------------------------------------------------------------

// import React, { useState } from "react";

// export default function AppXY() {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   return (
//     <div
//       className="container"
//       onPointerMove={(e) => {
//         setX(e.clientX);
//         setY(e.clientY);
//         console.log(e.clientX, e.clientY);
//       }}
//     >
//       <div
//         className="pointer"
//         style={{ transform: `translate(${x}px, ${y}px)` }}
//       ></div>
//     </div>
//   );
// }

//---Upgrade-----------------------------------------------------------
// 여러번 set 하는 것보다 object로 묶어서 한번에 처리하는 편이 좋다

// import React, { useState } from "react";

// export default function AppXY() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   return (
//     <div
//       className="container"
//       onPointerMove={(e) => {
//         setPosition({ x: e.clientX, y: e.clientY });
//         console.log(e.clientX, e.clientY);
//       }}
//     >
//       <div
//         className="pointer"
//         style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
//       ></div>
//     </div>
//   );
// }

//---X Move-----------------------------------------------------------

import React, { useState } from "react";

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        // object를 return 할 때는 소괄호로 묶어야한다
        // setPosition((prev) => ({ x: e.clientX, y: prev.y, z: prev.z })); // 일일히 나열해 작성하는 것 보다 -->
        // --> 스프레드 연산자를 이용해서 prev에 있는 key, value 들을 낱개로 복사해와서 다른값이 필요한 것만 값을 정해주면 된다
        setPosition((prev) => ({ ...prev, x: e.clientX }));
        console.log(e.clientX, e.clientY);
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}
