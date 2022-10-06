import React, { useState } from 'react';
import * as S from '../Styled/StyledMain.js';

const Main = () => {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);
  const tarefas = { tarefas: tarefa, id: Date.now() };

  const Adc = () => {
    if (tarefa !== '') {
      setLista((listaAntiga) => [...listaAntiga, tarefas]);
    }
    setTarefa('');
  };

  const Delete = (id) => {
    setLista(lista.filter((item) => item.id !== id));
  };
 
  const ClearAll = () => {
    setLista([]);
  };

  const Riscar = () => {
    setLista();
  }

  return (
    <S.Anotacao>
      <S.Caderno
        onSubmit={(e) => {e.preventDefault()}}>
        <S.Barra>
          <S.Input
            value={tarefa}
            onChange={(e) => {
              setTarefa(e.target.value);
            }}
            type="text"
          />
          <S.Funcoes>
            <S.Botao onClick={() => Adc()}>adicionar tarefa</S.Botao>
            <S.Botao onClick={() => ClearAll()}>Limpar Tarefas</S.Botao>
          </S.Funcoes>
        </S.Barra>

        <h2>Minhas Tarefas</h2>
        <S.Lista>
          {lista.map((item) => (
            <S.Linhas>
              <div>
                <input className='teste' id={item.id} type="checkbox" />
                <label for={item.id}>{item.tarefas}</label>
                <button onClick={() => Delete(item.id)}>X</button>
                <button onClick={()=> Riscar()}>Feita</button>
              </div>
              <S.Hr />
            </S.Linhas>
          ))}
        </S.Lista>
      </S.Caderno>
    </S.Anotacao>
  );
};

export default Main;
