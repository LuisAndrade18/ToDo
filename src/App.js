import React from 'react';
import * as S from './Styled/StyledApp.js';
import Main from './Components/Main.js';

function App(){
  return (
    <div>
      <S.GlobalStyle />
      <S.Title>To-Do</S.Title>
      <Main/>
    </div>
  );
};
export default App;