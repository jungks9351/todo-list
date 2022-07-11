import styled from 'styled-components';
import TodoItem from './TodoItem';

import useTodosState from '../hooks/useTodosState';

const TodoList = () => {
  const todos = useTodosState();

  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.ul`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default TodoList;
