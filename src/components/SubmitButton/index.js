import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

export default function SubmitButton() {
  const working = useSelector(state => state.ux.working);
  return (
    <button type="submit" disabled={working}>
      {working ? 'Carregando...' : 'Entrar'}
    </button>
  );
}
