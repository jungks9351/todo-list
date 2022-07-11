import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import TodoContainer from './components/TodoContainer';
import TodoCreate from './components/TodoCreate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { TodoProvider } from './contexts/TodoContext';

import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoContainer>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoContainer>
    </TodoProvider>
  );
};

export default App;
