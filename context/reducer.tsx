import { State } from "./store";

export type Action = {
  type: "SET_USER_ID";
  userId: State["userId"];
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.userId,
      };
  }
};
