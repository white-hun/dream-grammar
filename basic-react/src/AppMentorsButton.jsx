import React from "react";
import { useImmer } from "use-immer";
import Button from "./components/Button";

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const previous = prompt(`Whose name do you want to change?`);
    const current = prompt(`What do you want to change your name to?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === previous);
      mentor.name = current;
    });
  };
  const handleAdd = () => {
    const name = prompt(`Write the name of the mentor you want to add.`);
    const title = prompt(`Write the title of the mentor you want to add.`);
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };
  const handleDelete = () => {
    const deleteMentor = prompt(`Write the name of the mentor you want to delete.`);
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === deleteMentor);
      person.mentors.splice(index, 1);
    });
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
      <Button text="Change the Mentor Name" onClick={handleUpdate} />
      <Button text="ADD the Mentor" onClick={handleAdd} />
      <Button text="Delete the Mentor" onClick={handleDelete} />
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
