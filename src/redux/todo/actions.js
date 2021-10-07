import { TodoType } from "./types";

let initialId = 0;

export const insertTodo = (row) => ({
  type: TodoType.INSERT_TO_DO,
  payload: {
    id: ++initialId,
    content: row,
  },
});
export const toggleTodo = (id) => ({
  type: TodoType.TOGGOl_TODO,
  payload: {
    id,
  },
});
