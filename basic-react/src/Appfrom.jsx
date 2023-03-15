// import React, { useState } from "react";

// export default function Appfrom() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeemail = (e) => {
//     setEmail(e.target.value);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="text">이름:</label>
//       <input type="text" id="name" name="name" value={name} onChange={onChangeName} />
//       <label htmlFor="email">이메일:</label>
//       <input type="email" id="email" name="email" value={email} onChange={onChangeemail} />
//       <button>Submit</button>
//     </form>
//   );
// }

//-----------------------------------------------------------------------------------------

import React, { useState } from "react";

export default function Appfrom() {
  const [form, setForm] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const onChange = (e) => {
    // e.target에서 e.target.name, e.target.email을 받아온다
    const { name, value } = e.target;
    // 기존에 Form에 있는 데이터는 그대로 유지하고 현재 이름이 변경되고 있는 input의 key에 전달받은 value를 덮어 씌워준다
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">이름:</label>
      <input type="text" id="name" name="name" value={form.name} onChange={onChange} />
      <label htmlFor="email">이메일:</label>
      <input type="email" id="email" name="email" value={form.email} onChange={onChange} />
      <button>Submit</button>
    </form>
  );
}
