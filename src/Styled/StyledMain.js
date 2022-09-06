import styled from 'styled-components';

export const Caderno = styled.form`
  background-color: #f5e5d8;
  h2{
    text-align: center;
  }
`;

export const Anotacao = styled.div`
  width: 40%;
  margin: auto;
  border: solid;
  border-radius:15px;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 85%;
  margin-top: 40px;
  height: 40px;
  border-radius: 10px;
  font-size: 25px;
  text-indent: 20px;
  align-self: center;
`;

export const Botao = styled.button`
  margin: 20px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
  text-transform: capitalize;
`;

export const Barra = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Funcoes = styled.div`
  width: 40%;
  align-self: center;
  display: flex;
  justify-content: space-around;
`;

export const Hr = styled.hr`
  width: 95%;
  margin: auto;
  border: solid 1px black;
`;

export const Linhas = styled.div`
  div{
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const Lista = styled.div`
  width: 90%;
  margin: auto;
  padding-bottom: 10px;
  max-height: 550px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
