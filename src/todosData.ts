export type todosDataType = {
  id: number,
  text: string,
  completed: boolean,
};

//Ideally should get JSON from an API
export const todosData = [
  {
    id: 1,
    text: "Learn HTML",
    completed: true,
  },
  {
    id: 2,
    text: "Learn CSS",
    completed: false,
  },
  {
    id: 3,
    text: "Learn Javascript",
    completed: false,
  },
  {
    id: 4,
    text: "Learn React",
    completed: true,
  },
  {
    id: 5,
    text: "Apply for a job",
    completed: false,
  },
];
