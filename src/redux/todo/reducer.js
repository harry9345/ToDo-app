import { TodoType } from "./types";

const initialState = {
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoType.INSERT_TO_DO:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: action.payload.id,
            content: action.payload.content,
            isComplete: false,
          },
        ],
      };
    case TodoType.TOGGOL_TO_DO:
      const { id } = action.payload;
      return {
        ...state,
        data: state.data.map((row) => {
          if (row.id === id) {
            return {
              id: row.id,
              content: row.content,
              isComplete: !row.isComplete,
            };
          } else {
            return row;
          }
        }),
      };

    default:
      return state;
  }
};
