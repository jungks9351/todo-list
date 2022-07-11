import { useContext } from 'react';
import { TodoDispatchContext } from '../contexts/TodoContext';

const useTodosDispatch = () => {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('TodosProvider not found');
  return dispatch;
};

export default useTodosDispatch;
