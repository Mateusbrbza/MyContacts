import { Link } from 'react-router-dom';

import { Container, Header, ListContainer, Card, InputSearchContainer } from './styles';

import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/delete.svg';

export default function Home() {
  return (
    <Container>
      {/* <Loader /> */}
      {/* <Modal danger /> */}

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Barboza</strong>
              <small>Instagram</small>
            </div>
            <span>email@email.com</span>
            <span>(48) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  );
}
