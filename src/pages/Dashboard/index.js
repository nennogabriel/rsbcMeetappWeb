import React from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Content, Header, Meetup } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <Header>
          <h1>Meus meetups</h1>
          <button type="button">
            <MdAddCircleOutline size={20} />
            Novo meetup
          </button>
        </Header>
        <ul>
          {[1, 2, 3, 4, 5].map(i => (
            <li key={String(i)}>
              <Meetup to="/dashboard" past={i === 1} next={i === 2}>
                <strong>Meetup Title</strong>
                <div>
                  <span>3 de julho de 2001, às 10h</span>
                  <MdChevronRight size={20} color="#fff" />
                </div>
              </Meetup>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
