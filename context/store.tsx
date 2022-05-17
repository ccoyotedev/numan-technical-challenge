import { generateRandomId } from "./actions";

export interface State {
  userId: string;
}

export const initialState: State = {
  userId: generateRandomId(),
};
