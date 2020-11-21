import styled from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
  margin: 10px auto;
  max-width: 750px;
  display: flex;


  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    border: 2px solid #e3e3e3;
    border-right: 0;

    &::placeholder {
      color: #A8A8B3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #f95959;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#f95959')}
    }
  }
`;

export const Container = styled.div`
  padding-top: 15px;
  width: 100%;
`;


export const Content = styled.div`
  display: flex;
  margin: 10px auto;
  max-width: 1200px;
  background: #e3e3e3;
  border-radius: 5px;
  padding: 24px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  div {
    flex: 1;
    margin: 0 35px;

    strong {
      font-size: 18px;
      color: #303841;
    }

    p {
      font-size: 18px;
      margin-top: 4px;
      color: #303841;
    }
  }
`;
