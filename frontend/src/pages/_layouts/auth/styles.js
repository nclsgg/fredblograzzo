import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #9954ff, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 300px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  align-items: center;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  }

  span {
    color: #f64c75;
    align-self: flex-start;
  }

  a {
    color: #000000;
    margin-top: 15px;
    font-size: 13px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    width: 100%;
    padding: 0 15px;
    color: #000000;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  button {
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    width: 255px;
    height: 40px;
    border: 0px;
    border-radius: 4px;
    background: #9954ff;
    margin-top: 10px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#9954ff')};
    }
  }
`;
