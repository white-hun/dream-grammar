// My code
import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "White",
    title: "Beginner",
    mentor: {
      name: "ellie",
      title: "Senior Developer",
    },
  });
  return (
    <div>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>
        {person.name}'s mentor {person.mentor.name} is a {person.mentor.title}
      </p>
      <button
        onClick={() => {
          const name = prompt(`What's your mentor's name?`);
          // object return 할 때 소괄호
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, name }, // mentor의 key, value를 풀어서 복사 name을 prompt로 받은 name으로 변경(name: name)
          }));
        }}
      >
        Change the Mentor Name
      </button>
      <button
        onClick={() => {
          const title = prompt(`What's your mentor's title?`);
          setPerson((prev) => ({
            ...prev,
            mentor: { ...prev.mentor, title },
          }));
        }}
      >
        Change the Mentor Title
      </button>
    </div>
  );
}
