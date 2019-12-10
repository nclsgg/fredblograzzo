import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  display: block;
  margin: auto auto;
  width: 100%;
  margin-bottom: 2em;
  padding: 0.5em 0;
  border: none;
  border-bottom: 1px solid #000001;
  padding-bottom: 1.25em;
  color: #757575;
`;

export const ButtonIn = styled.button`
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  width: 250px;
  height: 40px;
  border: 20px;
  border-radius: 10px;
  background: #9954ff;
`;

export const Registerbtn = styled.p`
  font-size: 13px;
  margin-top: 3px;

  a {
    font-size: 13px;
    color: #9954ff;
  }
`;
