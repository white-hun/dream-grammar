export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { previous, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          return mentor.name === previous ? { ...mentor.name, name: current } : mentor;
        }),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "deleted": {
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.deleteMentor),
      };
    }
    default: {
      throw Error(`알 수 없는 액션 타입 ${action.type}`);
    }
  }
}
