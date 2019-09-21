import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MdEvent, MdPlace, MdEdit, MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';

import holderImg from '~/assets/imageHold.jpg';

function Details({ match }) {
  const id = Number(match.params.id);
  const meetups = useSelector(state => state.meetups.list);
  const [meetup, setMeetup] = useState({});
  useEffect(() => {
    setMeetup(meetups[id]);
  }, [id, meetups]);
  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <div>
          <button type="button" className="edit">
            <MdEdit size={16} /> Editar
          </button>
          <button type="button" className="cancel">
            <MdCancel size={16} />
            Cancel
          </button>
        </div>
      </header>
      <main>
        <img src={meetup.File ? meetup.File.url : holderImg} alt="" />
        <div>{meetup.description}</div>
      </main>
      <footer>
        <div>
          <MdEvent size={16} />
          <span>{meetup.dateFormatted}</span>
        </div>
        <div>
          <MdPlace size={16} />
          <span>{meetup.location}</span>
        </div>
      </footer>
    </Container>
  );
}

export default Details;

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
