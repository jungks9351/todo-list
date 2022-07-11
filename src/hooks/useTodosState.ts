import { useContext } from 'react';
import { TodoStateContext } from '../contexts/TodoContext';

const useTodosState = () => {
  const state = useContext(TodoStateContext);
  if (!state) throw new Error('TodosProvider not found');
  return state;
};

export default useTodosState;
