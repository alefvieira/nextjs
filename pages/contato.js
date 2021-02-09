import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from 'reactstrap';

const Contato = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="success" dark expand="md" >
      <Container>
        <div className={styles.corlogo}>
          <NavbarBrand href="/"><h3>Hot Cursos Online</h3></NavbarBrand>
        </div>
        <div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-md" navbar className={styles.cabecapag}>
              <NavItem>
                <NavLink href="/"><spam>Home</spam></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contato"><spam>Contatos</spam></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sobre"><spam>Sobre</spam></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
        
      </Container>
      </Navbar>
      <div className={styles.seccao}>
        <Container>
          <h1>CONTATO</h1>
          <h1>CONTATO</h1>
          <h1>CONTATO</h1>
          <h1>CONTATO</h1>
          <h1>CONTATO</h1>
          <h1>CONTATO</h1>
          <h1>CONTATO</h1>
          <h1>CONTATO</h1>
          <h1>CONTATO</h1>
          <h1>CONTATO</h1>
          <h1>CONTATO</h1>
          

        </Container>
      </div>

      <div className={styles.rodape}>
        <Container>
          <h3>EU acho que estou conseguindo fazer essa gingonça</h3>
        </Container>
      </div>

      {/* FIM DO CÓDIGO */}
    </div>
  );
}

export default Contato;