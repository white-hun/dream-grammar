// (useState set함수의 값(or객체), 실행하려는 동작)
// 기존의 객체(set함수) 의 행동에 따라 새로은 set함수의 객체를 만들어서 return 해주는 함수
export default function personReducer(person, action) {
  // action의 type별로 동작()
  switch (action.type) {
    case "updated": {
      // const previous = action.previous;
      // const current = action.current; -->
      // --> 구조 분해 할당
      const { previous, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          return mentor.name === previous
            ? { ...mentor, name: current }
            : mentor;
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
        mentors: person.mentors.filter(
          (mentor) => mentor.name !== action.deleteMentor // 한개라서 구조 분해 할당 X
        ),
      };
    }
    // 설정하지 않은 action이라면 error
    default: {
      throw Error(`알 수 없는 액션 타입: ${action.type}`);
    }
  }
}
