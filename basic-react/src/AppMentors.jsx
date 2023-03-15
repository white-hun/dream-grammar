// My code
// import React, { useState } from "react";

// export default function AppMentors() {
//   const [person, setPerson] = useState({
//     name: "white",
//     title: "Beginner",
//     mentors: [
//       {
//         name: "Ellie",
//         title: "Senior Developer",
//       },
//       {
//         name: "Bob",
//         title: "Full Stack Developer",
//       },
//     ],
//   });
//   return (
//     <div>
//       <h1>
//         {person.name} is {person.title}
//       </h1>
//       <p>{person.name}'s mentoris:</p>
//       <ul>
//         {person.mentors.map((mentor, index) => (
//           <li key={index}>
//             {mentor.name} ({mentor.title})
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={() => {
//           const previous = prompt(`Whose name do you want to change?`);
//           const current = prompt(`What do you want to change your name to?`);
//           setPerson((prev) => ({
//             ...prev,
//             mentors: prev.mentors.map((mentor) => {
//               return mentor.name === previous
//                 ? { ...mentor, name: current }
//                 : mentor;
//             }),
//           }));
//         }}
//       >
//         Change the Mentor Name
//       </button>
//       <button
//         onClick={() => {
//           const AddMentorName = prompt(
//             `Write the name of the mentor you want to add.`
//           );
//           const AddMentorTitle = prompt(
//             `Write the title of the mentor you want to add.`
//           );
//           setPerson((prev) => ({
//             ...prev,
//             mentor: prev.mentors.push({
//               name: AddMentorName,
//               title: AddMentorTitle,
//             }),
//           }));
//           console.log(person.mentors);
//         }}
//       >
//         Add the Mentor
//       </button>
//       <button
//         onClick={() => {
//           const DeleteMentorName = prompt(
//             `Write the name of the mentor you want to delete.`
//           );
//           setPerson((prev) => ({
//             ...prev,
//             mentors: prev.mentors.filter(
//               (mentor) => mentor.name !== DeleteMentorName
//             ),
//           }));
//           console.log(person.mentors);
//         }}
//       >
//         Delete the Mentor
//       </button>
//     </div>
//   );
// }

// setPerson((prev) => ({
//   ...prev,
//   mentors: prev.mentors.splice(
//     prev.mentors.indexOf({ name: DeleteMentorName })
//   ),
// }));

//---------------------------------------------------------------------------------
// import React, { useState } from "react";

// export default function AppMentors() {
//   const [person, setPerson] = useState({
//     name: "white",
//     title: "Beginner",
//     mentors: [
//       {
//         name: "Ellie",
//         title: "Senior Developer",
//       },
//       {
//         name: "Bob",
//         title: "Full Stack Developer",
//       },
//     ],
//   });
//   return (
//     <div>
//       <h1>
//         {person.name} is {person.title}
//       </h1>
//       <p>{person.name}'s mentoris:</p>
//       <ul>
//         {person.mentors.map((mentor, index) => (
//           <li key={index}>
//             {mentor.name} ({mentor.title})
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={() => {
//           const previous = prompt(`Whose name do you want to change?`);
//           const current = prompt(`What do you want to change your name to?`);
//           setPerson((prev) => ({
//             ...prev,
//             mentors: prev.mentors.map((mentor) => {
//               return mentor.name === previous
//                 ? { ...mentor, name: current }
//                 : mentor;
//             }),
//           }));
//         }}
//       >
//         Change the Mentor Name
//       </button>
//       <button
//         onClick={() => {
//           const name = prompt(`Write the name of the mentor you want to add.`);
//           const title = prompt(`Write the title of the mentor you want to add.`);
//           setPerson((prev) => ({
//             ...prev,
//             mentors: [...prev.mentors, { name, title }],
//           }));
//         }}
//       >
//         {" "}
//         Add the Mentor
//       </button>
//       <button
//         onClick={() => {
//           const deleteMentor = prompt(`Write the name of the mentor you want to delete.`);
//           setPerson((prev) => ({
//             ...prev,
//             mentors: prev.mentors.filter(
//               (mentor) => mentor.name !== deleteMentor
//             ),
//           }));
//         }}
//       >
//         {" "}
//         Delete the Mentor
//       </button>
//     </div>
//   );
// }

//---------------------------------------------------------------------------------

// import React, { useState } from "react";

// export default function AppMentors() {
//   const [person, setPerson] = useState(initialPerson);
//   const handleUpdate = () => {
//     const previous = prompt(`Whose name do you want to change?`);
//     const current = prompt(`What do you want to change your name to?`);
//     setPerson((prev) => ({
//       ...prev,
//       mentors: prev.mentors.map((mentor) => {
//         return mentor.name === previous ? { ...mentor, name: current } : mentor;
//       }),
//     }));
//   };
//   const hanbleAdd = () => {
//     const name = prompt(`Write the name of the mentor you want to add.`);
//     const title = prompt(`Write the title of the mentor you want to add.`);
//     setPerson((prev) => ({
//       ...prev,
//       mentors: [...prev.mentors, { name, title }],
//     }));
//   };
//   const hanbleDelete = () => {
//     const deleteMentor = prompt(
//       `Write the name of the mentor you want to delete.`
//     );
//     setPerson((prev) => ({
//       ...prev,
//       mentors: prev.mentors.filter((mentor) => mentor.name !== deleteMentor),
//     }));
//   };
//   return (
//     <div>
//       <h1>
//         {person.name} is {person.title}
//       </h1>
//       <p>{person.name}'s mentoris:</p>
//       <ul>
//         {person.mentors.map((mentor, index) => (
//           <li key={index}>
//             {mentor.name} ({mentor.title})
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleUpdate}>Change the Mentor Name</button>
//       <button onClick={hanbleAdd}>Add the Mentor</button>
//       <button onClick={hanbleDelete}>Delete the Mentor</button>
//     </div>
//   );
// }

// const initialPerson = {
//   name: "white",
//   title: "Beginner",
//   mentors: [
//     {
//       name: "Ellie",
//       title: "Senior Developer",
//     },
//     {
//       name: "Bob",
//       title: "Full Stack Developer",
//     },
//   ],
// };
//---practice---------------------------------------------------

import React, { useState } from "react";

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  const changeClick = () => {
    const previousMentorName = prompt(`Whose name do you want to change?`);
    const currentMentorName = prompt(
      `What do you want to change your name to?`
    );
    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.map((mentor) => {
        return mentor.name === previousMentorName
          ? { ...mentor, name: currentMentorName }
          : mentor;
      }),
    }));
  };
  const AddClick = () => {
    const AddMentorName = prompt(
      `Write the name of the mentor you want to add.`
    );
    const AddMentorTitle = prompt(
      `Write the title of the mentor you want to add.`
    );
    setPerson((prev) => ({
      ...prev,
      mentors: [
        ...prev.mentors,
        { name: AddMentorName, title: AddMentorTitle },
      ],
    }));
  };
  const deleteClick = () => {
    const deleteMentor = prompt(
      `Write the name of the mentor you want to delete`
    );
    setPerson((prev) => ({
      ...prev,
      mentors: prev.mentors.filter((mentor) => {
        return mentor.name !== deleteMentor;
      }),
    }));
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
