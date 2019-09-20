import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Header, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetups');
      const data = response.data.map(item => {
        return {
          ...item,
          dateFormatted: format(parseISO(item.date), "d 'de' MMMM", {
            locale: pt,
          }),
        };
      });
      setMeetups(data);
    }
    loadMeetups();
  }, []);
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
        {meetups.map(meetup => (
          <li key={String(meetup.id)}>
            <Meetup to={`/detail/${meetup.id}`} past={meetup.past.toString()}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.dateFormatted}</span>
                <MdChevronRight size={20} color="#fff" />
              </div>
            </Meetup>
          </li>
        ))}
      </ul>
    </>
  );
}
