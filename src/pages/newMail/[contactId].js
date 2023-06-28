import Sidebar from '../../components/sidebar';
import NavBar from '../../components/navbar';
import NewMail from '../../components/newMail'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useIsMounted from '../../hooks/useIsMounted';
import { useRouter } from 'next/router';

export default function HomePage() {

  const IsMounted = useIsMounted()
  const router = useRouter()
  
  if (!IsMounted) {
    return null
  }

  return (
    <Container fluid className="p-0 bg-dark" style={{ height: '100vw' }}>
        <Row >
         <NavBar />
        </Row>
        <Row>
            <Sidebar />
            <Col>
                <NewMail contactId = {router.query.contactId} />
            </Col>
        </Row>
    </Container>
  )
}