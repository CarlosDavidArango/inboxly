import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { getChatGPTResponse } from '../lib/gptApi';
const emails = [
  {
    id: 2,
    from: 'jane.doe@example.com',
    subject: 'New Product Launch',
    date: '2023-04-17 14:30:00',
    body: 'I wanted to let you know that we will be launching a new product next week. Stay tuned for more details!'
  },
  {
    id: 3,
    from: 'bob.smith@example.com',
    subject: 'Job Application Status',
    date: '2023-04-16 16:45:00',
    body: 'Thank you for your interest in our company. We have received your application and will be in touch soon.'
  },
  {
    id: 4,
    from: 'jane.doe@example.com',
    subject: 'Project Update',
    date: '2023-04-15 11:15:00',
    body: 'I just wanted to give you a quick update on the project. We are making good progress and should be able to meet the deadline.'
  },
  {
    id: 5,
    from: 'john.doe@example.com',
    subject: 'New Feature Request',
    date: '2023-04-14 13:00:00',
    body: 'I have a new feature request for our product. Can we discuss this in our next meeting?'
  },
];



const ViewMail= ({MailId}) => {

  const Mail = emails.find(Mail => Mail.id == MailId);

  const [responseValue, setResponseValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('formal');

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = event.target.elements.response.value;
    // Aquí puedes hacer algo con la respuesta, como enviarla a través de una API
    console.log(response);
  };

  const handleGenerate =  async (event) => {
    event.preventDefault();
    const respuestaGPT = await getChatGPTResponse(`genera una respuesta ${categoryValue} afirmativa de 30 palabras aproximadamente para el siguiente correo electronico: ${Mail.body}`)
    setResponseValue(respuestaGPT);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setResponseValue(value);
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategoryValue(value);
  };

  return (
    <Container className="py-3 bg-dark text-white">
      <Row className="mb-3">
        <Col>
          <h3>{Mail.subject}</h3>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={3} sm={2} md={1}>
          <img
            src="https://via.placeholder.com/150"
            alt="Avatar del remitente"
            className="img-fluid rounded-circle"
          />
        </Col>
        <Col>
          <p>{Mail.from}</p>
        </Col>
        <Col className="text-right">
          <p>{Mail.date}</p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <p>{Mail.body}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form className='mb-3' onSubmit={handleSubmit}>
            <Form.Group controlId="response">
              <Form.Label>Respuesta</Form.Label>
              <Form.Control type="text"
                             placeholder="Escribe tu respuesta"
                             as="textarea"
                             value={responseValue}
                             rows={7}
                             onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Categoría</Form.Label>
              <Col xs={6}>
                <Form.Select value={categoryValue} onChange={handleCategoryChange}>
                  <option value="formal">Formal</option>
                  <option value="amigable">Amigable</option>
                  <option value="familiar">Familiar</option>
                  <option value="casual">Casual</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
              Responder
            </Button>{"  "}
            <Button variant="outline-primary">Reenviar</Button>{"  "}
            <Button variant="outline-danger">Eliminar</Button>{"  "}
            <Button variant='primary' onClick={handleGenerate}>Generar Respuesta</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewMail;