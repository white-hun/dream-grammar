import React, { useCallback, useReducer } from "react";
import { Button } from "./components/Button";
import personReducer from "./Reducer/person-reducer";

export default function AppUseCallback() {
  // useCallback 업데이트 될 때 한번만 렌더링
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleUpdate = useCallback(() => {
    const previous = prompt(`Whose name do you want to change?`);
    const current = prompt(`What do you want to change your name to?`);
    dispatch({ type: "updated", previous, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`Write the name of the mentor you want to add.`);
    const title = prompt(`Write the title of the mentor you want to add.`);
    dispatch({ type: "added", name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const deleteMentor = prompt(`Write the name of the mentor you want to delete`);
    dispatch({ type: "deleted", deleteMentor });
  }, []);
  return (
    <div>
      <h1>
        {person.name} is {person.title}
      </h1>
      <p>{person.name}'s mentor is:</p>
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
