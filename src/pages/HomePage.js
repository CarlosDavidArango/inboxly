import Sidebar from '../components/sidebar';
import NavBar from '../components/navbar';
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePage({children, userName}) {
  const [hijos, setHijos] = useState()
  useEffect(() => setHijos(children), [])

  return (
    <>
      <Container fluid className="px-0 bg-dark" style={{ minHeight: '100vw' }}>
          <Row >
          <NavBar userName={userName}/>
          </Row>
          <Row>
          <Sidebar />
              <Col>
                  {hijos}
              </Col>
          </Row>
      </Container>
    </>
  )
}