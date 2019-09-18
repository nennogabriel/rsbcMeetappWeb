import React from 'react';
import { MdEvent, MdPlace, MdEdit, MdCancel } from 'react-icons/md';

import { Container } from './styles';

export default function Details() {
  return (
    <Container>
      <header>
        <h1>Titulo do evento</h1>
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
        <img src="https://picsum.photos/940/300" alt="" />
        <p>Lorem ipsum sifus estts. Lorem Lore</p>
        <p>Lorem ipsum sifus estts. Lorem Lore</p>
        <p>Lorem ipsum sifus estts. Lorem Lore</p>
        <p>Lorem ipsum sifus estts. Lorem Lore</p>
      </main>
      <footer>
        <div>
          <MdEvent size={16} />
          <span>24 de julho, às 12h</span>
        </div>
        <div>
          <MdPlace size={16} />
          <span>Barker st, 211</span>
        </div>
      </footer>
    </Container>
  );
}
