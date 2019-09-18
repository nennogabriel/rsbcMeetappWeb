import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-radius: 1px solid #eee;
    }
    a {
      transition: transform linear 120ms;
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  padding-left: 20px;
  font-size: 1.3rem;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #eee;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 1.2rem;
      color: #aaa;
    }
  }

  button {
    background: #d44059;
    border-radius: 4px;
    color: #fff;
    padding: 10px 20px;
    font-size: 1.4rem;
    font-weight: bold;
    &:hover {
      background: ${darken(0.03, '#d44059')};
    }
  }
`;
