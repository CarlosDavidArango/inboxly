import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to register user here
  }

  return (
    <Container className="py-5 bg-secondary">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-primary mb-4">
            Regístrate en Inboxly
          </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo electrónico" value={email} onChange={handleEmailChange} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu contraseña" value={password} onChange={handlePasswordChange} />
            </Form.Group>

            <Button variant="primary" type="submit" className='mt-2'>
              Regístrate
            </Button>
          </Form>

          <p className="mt-3">
            ¿Ya tienes una cuenta? <Link href="/login">Inicia sesión aquí</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}