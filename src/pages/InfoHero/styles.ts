import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';

export const Container = styled.div`
  margin: auto;
  margin-top: 60px;
  max-width: 1020px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin: auto;
    width: 420px;
    height: 420px;
    border: 1px solid #a8a8b3;
  }

  strong {
    text-align: center;
    font-size: 20px;
    padding-bottom: 10px;
  }

  p {
    text-align: center;
    font-size: 18px;
  }
`;

export const Comics = styled.div``;

export const Icon = styled(FiChevronLeft)`
  width: 30px;
  height: 30px;
  color: #303841;

  position: sticky;
  top: 50%;

  transition: transform 0.2s;

  &:hover {
    transform: translateX(10px);
  }
`;
