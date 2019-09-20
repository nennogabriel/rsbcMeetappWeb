import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import SubmitButton from '~/components/SubmitButton';

import BannerInput from './BannerInput';

import { Container } from './styles';
import { meetupsCreateRequest } from '~/store/modules/meetups/actions';

export default function Meetup() {
  const dispatch = useDispatch();
  const meetup = {};

  function handleSubmit(data) {
    dispatch(meetupsCreateRequest(data));
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="avatar_id" />

        <Input name="title" placeholder="Título de Meetup" />
        <Textarea
          name="description"
          rows="4"
          placeholder="Descrição completa"
        />
        <Input name="date" type="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <SubmitButton>Salvar Meetup</SubmitButton>
      </Form>
    </Container>
  );
}
