import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import TodoContainer from './components/TodoContainer';
import TodoCreate from './components/TodoCreate';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

import GlobalStyle from './styles/GlobalStyle';

interface TodoType {
  id: number;
  content: string;
  completed: boolean;
}

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoContainer>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoContainer>
    </>
  );
};

export default App;
