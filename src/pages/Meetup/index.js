import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import SubmitButton from '~/components/SubmitButton';

import BannerInput from './BannerInput';

import { Container } from './styles';

export default function Meetup() {
  function handleSubmit() {}
  const meetup = {};

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
