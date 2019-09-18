import styled from 'styled-components';
import { color } from '~/styles/index';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(0deg, ${color.bgStart}, ${color.bgEnd});
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Content = styled.div`
  width: 320px;
  text-align: center;
  font-size: 1.4rem;

  form {
    margin: 10px 0;
    display: flex;
    flex-direction: column;

    input {
      margin: 8px 10px;
      background: rgba(0, 0, 0, 0.2);
      padding: 14px 20px;
      border-radius: 4px;
      font-size: 1.8rem;
      color: #eee;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 10px 10px 30px;
      font-weight: bold;
    }

    button {
      margin: 8px 0;
      background: ${color.primary};
      border-radius: 4px;
      padding: 14px 20px;
      font-weight: bold;
      font-size: 1.8rem;
      color: #ffffff;
      margin: 10px;
    }
  }

  a {
    margin: 10px 0;
    color: #ffffff;
    padding: 10px;
    font-size: 1.8rem;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;
