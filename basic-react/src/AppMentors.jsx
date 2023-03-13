import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: "white",
    title: "Beginner",
    mentors: [
      {
        name: "Ellie",
        title: "Senior Developer",
      },
      {
        name: "Bob",
        title: "Senior Developer",
      },
    ],
  });
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{person.name}'s is:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const previous = prompt(`Whose name do you want to change?`);
          const current = prompt(`What do you want to change your name to?`);
          setPerson((prev) => ({
            ...prev,
            mentors: [
              ...(prev.mentors.name === { name: previous }
                ? { name: current }
                : ""),
            ],
          }));
          console.log(previous);
          console.log(current);
        }}
      >
        Change the Mentor Name
      </button>
    </div>
  );
}
