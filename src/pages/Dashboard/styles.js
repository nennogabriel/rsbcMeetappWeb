import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  font-size: 1.4rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: 0 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;

  button {
    background: #d44059;
    border-radius: 4px;
    color: #fff;
    padding: 10px 20px;
    font-size: 1.4rem;
    font-weight: bold;
    display: flex;
    align-items: center;

    &:hover {
      background: ${darken(0.03, '#d44059')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const Meetup = styled(Link)`
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-bottom: 5px;
  border-radius: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  transition: all linear 120ms;

  &:hover {
    transform: translateX(2%);
    background: rgba(0, 0, 0, 0.3);
  }

  div {
    display: flex;
    align-items: center;
  }
  span {
    color: #ddd;
    font-size: 1.4rem;
  }
`;
