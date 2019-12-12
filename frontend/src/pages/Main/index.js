import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
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

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      const response = await api.get('/meetups');

      const data = response.data.map(a => ({
        ...a,
        formatedDate: format(parseISO(a.createdAt), 'dd/mm/yyyy', {
          locale: pt,
        }),
      }));

      setArticles(data);
    }

    loadArticles();
  }, []);

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
              <strong>a</strong>
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
          {articles.map(a => (
            <Article key={a.id}>
              <p className="profile">{a.User.name}</p>
              <strong>{a.title}</strong>
              <p className="date">{a.formatedDate}</p>
            </Article>
          ))}
        </ul>
      </DivMiddle>
      <DivRight />
    </>
  );
}
