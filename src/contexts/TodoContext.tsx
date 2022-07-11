import { createContext, useReducer } from 'react';
import { Children } from '../types';
import { Action, TodoDispatch, TodosState } from '../types/todos';

const initialTodos: TodosState = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: true,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: true,
  },
  {
    id: 5,
    text: 'TypeScript 적용하기',
    done: false,
  },
];

const todosReducer = (state: TodosState, action: Action) => {
  switch (action.type) {
    case 'CREATE':
      return (state = [...state, action.todo]);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled  action type`);
  }
};

export const TodoStateContext = createContext<TodosState | undefined>(
  undefined,
);
export const TodoDispatchContext = createContext<TodoDispatch | undefined>(
  undefined,
);

export const TodoProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(todosReducer, initialTodos);
  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={state}>
        {children}
      </TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  );
};
