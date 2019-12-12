import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
  height: 100%;
  background: #333;
  display: flex;
  flex-direction: row;
`;

// TELA DIREITA ( NAV DRAWER / PERFIL )

export const DivLeft = styled.div`
  background: #fff;
  width: 250px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    width: 120px;
    margin-top: 15px;
  }

  button {
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    width: 180px;
    height: 40px;
    border: 0px;
    border-radius: 100px;
    background: #9954ff;
    margin-top: 30px;
    margin-bottom: 40px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#9954ff')};
    }
  }
`;

export const Archives = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  width: 100%;
  border-bottom: 1px solid #dadada;

  p {
    font-size: 15px;
    color: #adadad;
    margin-bottom: 5px;
  }

  a {
    width: 100%;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: bold;
    color: #000;
    margin-right: 65%;
    margin-bottom: 13px;
  }
`;

export const Categories = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 10%;
  width: 100%;
  border-bottom: 1px solid #dadada;

  p {
    font-size: 15px;
    color: #adadad;
    margin-bottom: 5px;
  }

  a {
    width: 100%;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: bold;
    color: #000;
    margin-right: 65%;
    margin-bottom: 13px;
  }
`;

export const Profile = styled.div``;

// TELA PRINCIPAL ( LISTAGEM DE ARTIGOS )

export const DivMiddle = styled.div`
  background: #eff3f8;
  width: 50%;
  align-items: center;

  h1 {
    margin-top: 30px;
    margin-left: 20px;
    font-size: 25px;
    font-family: 'Arimo';
  }
`;

export const Options = styled.div`
  display: flex;
  border-top: 1px solid #dadada;
  margin-top: 30px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 20px;
    color: #bcbdcf;
    margin-right: 150px;
  }
`;

export const Buttons = styled.div`
  margin-top: 20px;
  display: flex;

  button {
    color: #bcbdcf;
    font-size: 15px;
    margin-left: 10px;
    background: none;
    border: none;
  }
`;

export const Article = styled.li`
  border-bottom: 1px solid #dadada;

  strong {
    margin-left: 20px;
    font-size: 15px;
    color: #000;
    display: block;
  }

  .profile {
    margin-left: 20px;
    font-size: 12px;
    color: #c7c7c7;
    display: block;
  }

  .date {
    margin-left: 20px;
    font-size: 10px;
    color: #c7c7c7;
    display: block;
    margin-bottom: 10px;
  }
`;

// TELA ESQUERDA ( CRIAÇÃO E VISUALIZAÇÃO DE ARTIGOS)

export const DivRight = styled.div`
  background: #fff;
  width: 50%;
`;
