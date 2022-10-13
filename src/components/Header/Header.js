import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
              <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Promo-Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/quiz">Quiz</Nav.Link>
            <Nav.Link href="/statistic">Statistic</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;