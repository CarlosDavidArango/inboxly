import Link from 'next/link';
import HomePage from '../HomePage';
import useClasifyMails from '../../hooks/useClasifyMails';
import { Container, Row, Col, Card, Table, Tab, Form, Button} from 'react-bootstrap';
import { useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import useIsMounted from '../../hooks/useIsMounted';


export default function Home() {
  const [Category, setCategory] = useState("Todos")
  const [mailsReady, setMailsReady] = useState(false)
  const router = useRouter()
  const IsMounted = useIsMounted()


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
  const categories = ["Todos", "Recordatorio", "Spam", "Familia", "Urgente", "Comercial", "Trabajo"]
  const Mails = useClasifyMails(emails)

  
  useEffect(() => {
    if (Mails.length > 0) {
        setMailsReady(true)
    }
  }, [Mails])

  useEffect(() => {
    console.log(router.query.user)
  }, [])

  
  

  const handleFilter = (event) => {
    const newCategory = event.target.value
    setCategory(newCategory);
    console.log(Category)
    console.log(newCategory)
  }

  
  if(!mailsReady || !IsMounted) {
    return null
  }
  return (
    <HomePage userName = {router.query.userName}>
      <Container fluid style={{ borderLeft: 'none' }}>
        <Row className='mb-3'>
          <Col sm={12} md={6} lg={4}>
            <Card className=' bg-primary bg-darken-md'>
              <Card.Header>
                <h5>PENDIENTES</h5>
                </Card.Header>
              <Card.Body>
                <h1>{emails.length}</h1>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className=' bg-primary'>
              <Card.Header>
                <h5>TOTALES</h5>
              </Card.Header>
              <Card.Body >
                <h1>{emails.length}</h1>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card  className='bg-primary'>
              <Card.Header>
                <h5>ESTE DIA</h5>
              </Card.Header>
              <Card.Body >
                <h1>0</h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Card  className='bg-secondary'>
              <Card.Body >
                <Table>
                  <Row>
                    <Col>
                      <h4>DASHBOARD</h4>
                    </Col>
                    <Col>
                    <Button onClick={() => router.push(`/newMail/0`)} variant="primary">
                      Nuevo Correo
                    </Button>
                    </Col>
                  </Row>
                </Table>
                <Table striped bordered hover responsive className='border-dark'>
                  <thead>
                    <tr>
                      <th>De</th>
                      <th>Asunto</th>
                      <th>Fecha</th>
                      <th>Categoria</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Mails.map(email => (
                        <tr key={email.id}>
                          <td>
                            <Link href={`/Mail/${email.id}`} >  
                              {email.from}
                            </Link>
                          </td>
                          <td>{email.subject}</td>
                          <td>{email.date}</td>
                          <td>{email.category}</td>
                        </tr>
                      ))
                      }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </HomePage>
  );
  } 



/*{
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
    }, */


    /*<Form>
      <Form.Group controlId="formSelect"> 
        <Form.Label>Filtrar por categoria</Form.Label>
        <Form.Control as="select" value = {Category} onChange={(e) =>  setCategory(e.target.value)}>
          {categories.map((categorie) => (
            <option key={categorie} value={categorie}>{categorie}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>*/