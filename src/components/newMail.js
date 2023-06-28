import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { getChatGPTResponse } from '../lib/gptApi';


const ViewMail= ({contactId}) => {


  const [responseValue, setResponseValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('formal');

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = event.target.elements.response.value;
    // Aquí puedes hacer algo con la respuesta, como enviarla a través de una API
    console.log(response);
  };

  const handleGenerate =  async (event) => {
    event.preventDefault();
    const respuestaGPT = await getChatGPTResponse(`genera un correo electronico ${categoryValue} de 30 palabras aproximadamente para el siguiente asunto: ${subjectValue}`)
    setResponseValue(respuestaGPT);
  };
  const handleSubjectChange = (event) => {
    const value = event.target.value;
    setSubjectValue(value)
  }

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmailValue(value)
  }

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategoryValue(value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setResponseValue(value);
  };

  return (
    <Container className="py-3 bg-dark text-white">
      <Row className="mb-3">
        <Col>
        <Form.Group controlId="response">
            <Form.Label>Destinatario</Form.Label>
            <Form.Control type="text"
                            placeholder="johndoe@123.com"
                            as="textarea"
                            value={emailValue}
                            rows={1}
                            onChange={handleEmailChange} />
        </Form.Group>
        <Form.Group controlId="response">
              <Form.Label>Asunto</Form.Label>
              <Form.Control type="text"
                             placeholder="Escribe el asunto"
                             as="textarea"
                             value={subjectValue}
                             rows={2}
                             onChange={handleSubjectChange} />
            </Form.Group>
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
              ENVIAR
            </Button>{"  "}
            <Button variant='primary' onClick={handleGenerate}>Generar Respuesta</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewMail;