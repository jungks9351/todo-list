import { Dispatch } from 'react';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type Action =
  | { type: 'CREATE'; todo: Todo }
  | { type: 'TOGGLE'; id: number }
  | { type: 'REMOVE'; id: number };

export type TodosState = Todo[];
export type TodoDispatch = Dispatch<Action>;
