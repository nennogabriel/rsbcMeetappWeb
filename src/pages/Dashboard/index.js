import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Header, Meetup } from './styles';

export default function Dashboard() {
  return (
    <>
      <Header>
        <h1>Meus meetups</h1>
        <Link to="/meetup">
          <MdAddCircleOutline size={20} />
          Novo meetup
        </Link>
      </Header>
      <ul>
        {[1, 2, 3, 4, 5].map(i => (
          <li key={String(i)}>
            <Meetup to="/detail" past={i === 1} next={i === 2}>
              <strong>Meetup Title</strong>
              <div>
                <span>3 de julho de 2001, às 10h</span>
                <MdChevronRight size={20} color="#fff" />
              </div>
            </Meetup>
          </li>
        ))}
      </ul>
    </>
  );
}
