import Link from 'next/link';
import { useEffect } from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

export default function NavBar({ userName }) {

  useEffect(() => {
    console.log(userName)
  }, [])
  return (
    <Navbar className="navbar navbar-dark bg-dark l-7">
      <Link href="/" passHref className='text-muted text-decoration-none ml-7'>
        <Navbar.Brand>MAIL-GPT</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto me-auto">
          <Nav.Link>
            <Link href="/" passHref className='text-muted text-decoration-none ml-2'>
              Inicio
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/HomePage" passHref className='text-muted text-decoration-none ml-2'>
              Dashboard
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/AboutPage" passHref className='text-muted text-decoration-none ml-2'>
              Inbox
            </Link>
          </Nav.Link>
        </Nav>
        <span className='text-muted text-decoration-none ml-7' style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          {userName}
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
}