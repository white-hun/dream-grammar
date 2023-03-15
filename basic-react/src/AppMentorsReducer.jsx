import React, { useReducer } from "react";
import personReducer from "./Reducer/person-reducer";

export default function AppMentors() {
  // dispatch를 이용해서 원하는 action을 명령, (작성한 로직 함수 와, 초기값)
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const changeClick = () => {
    const previous = prompt(`Whose name do you want to change?`);
    const current = prompt(`What do you want to change your name to?`);
    dispatch({ type: "updated", previous, current });
  };
  const AddClick = () => {
    const name = prompt(`Write the name of the mentor you want to add.`);
    const title = prompt(`Write the title of the mentor you want to add.`);
    dispatch({ type: "added", name, title });
  };
  const deleteClick = () => {
    const deleteMentor = prompt(
      `Write the name of the mentor you want to delete`
    );
    dispatch({ type: "delete", deleteMentor });
  };
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
      <button onClick={changeClick}>Change the Mentor Name</button>
      <button onClick={AddClick}>Add the Mentor</button>
      <button onClick={deleteClick}>Delete the Mentor</button>
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
