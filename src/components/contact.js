import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Contact Us</h1>
          <p>Have a question or comment? We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}