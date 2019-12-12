import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdControlPointDuplicate } from 'react-icons/md';
import { FaFolder, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import {
  Content,
  Archives,
  Categories,
  DivLeft,
  Profile,
  DivMiddle,
  DivRight,
  Options,
  Buttons,
  Article,
} from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <Content>
        <DivLeft>
          <img src={logo} alt="Logo" />
          <button type="submit">
            <FaFolder /> Meu diretório
          </button>
          <Archives>
            <p>ARQUIVOS</p>
            <Link to="/main">Meus artigos</Link>
            <Link to="/main">Compartilhados</Link>
            <Link to="/main">Lixeira</Link>
          </Archives>
          <Categories>
            <p>CATEGORIAS</p>
            <Link to="/main">Sem categoria</Link>
            <Link to="/main">Desenvolvimento Mobile</Link>
            <Link to="/main">TI</Link>
            <Link to="/main">Design</Link>
            <Link to="/main">Desenvolvimento Web</Link>
          </Categories>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <p>Usuário premium</p>
            </div>
            <button type="button" onClick={handleSignOut}>
              <FiLogOut />
            </button>
          </Profile>
        </DivLeft>
      </Content>
      <DivMiddle>
        <h1>Meus artigos</h1>
        <Options>
          <p>1 artigo selecionado</p>
          <aside />
          <Buttons>
            <button type="button">
              <MdControlPointDuplicate />
            </button>
            <button type="button">
              <FaEdit />
            </button>
            <button type="button">
              <FaTrashAlt />
            </button>
          </Buttons>
        </Options>
        <ul>
          <Article>
            <p className="profile">Nicolas Guadagno</p>
            <strong>O que é identidade social?</strong>
            <p className="date">12/12/2019</p>
          </Article>
        </ul>
      </DivMiddle>
      <DivRight />
    </>
  );
}
