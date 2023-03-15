import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
    const previous = prompt(`Whose name do you want to change?`);
    const current = prompt(`What do you want to change your name to?`);
    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.map((mentor) => {
        return mentor.name === previous ? { ...mentor, name: current } : mentor;
      }),
    }));
  };
  const hanbleAdd = () => {
    const name = prompt(`Write the name of the mentor you want to add.`);
    const title = prompt(`Write the title of the mentor you want to add.`);
    setPerson((prev) => ({
      ...prev,
      mentors: [...prev.mentors, { name, title }],
    }));
  };
  const hanbleDelete = () => {
    const deleteMentor = prompt(
      `Write the name of the mentor you want to delete.`
    );
    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.filter((mentor) => mentor.name !== deleteMentor),
    }));
  };
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{person.name}'s mentoris:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>Change the Mentor Name</button>
      <button onClick={hanbleAdd}>Add the Mentor</button>
      <button onClick={hanbleDelete}>Delete the Mentor</button>
    </div>
  );
}

const initialPerson = {
  name: "white",
  title: "Beginner",
  mentors: [
    {
      name: "Ellie",
      title: "Senior Developer",
    },
    {
      name: "Bob",
      title: "Full Stack Developer",
    },
  ],
};
