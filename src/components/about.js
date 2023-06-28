import { Container, Row, Col, Image, Card } from 'react-bootstrap';

export default function About() {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <Image src="/about-image.jpg" fluid />
        </Col>
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <h4>Nuestra historia</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum quam a tellus malesuada, ut faucibus
                quam convallis. Nam pharetra arcu et turpis molestie, at convallis mi suscipit. Etiam eu semper justo. Duis
                non leo quis neque sagittis rutrum. Sed ultricies tortor at velit faucibus eleifend. Nulla facilisi. Donec
                eget diam sit amet est tincidunt laoreet.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4>Nuestra misión</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Nam pharetra arcu et turpis molestie, at convallis mi suscipit. Etiam eu semper justo. Duis non leo quis neque
                sagittis rutrum. Sed ultricies tortor at velit faucibus eleifend. Nulla facilisi. Donec eget diam sit amet est
                tincidunt laoreet. Fusce bibendum quam a tellus malesuada, ut faucibus quam convallis.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h4>Nuestro equipo</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Etiam eu semper justo. Duis non leo quis neque sagittis rutrum. Sed ultricies tortor at velit faucibus eleifend.
                Nulla facilisi. Donec eget diam sit amet est tincidunt laoreet. Fusce bibendum quam a tellus malesuada, ut
                faucibus quam convallis. Nam pharetra arcu et turpis molestie, at convallis mi suscipit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Card.Footer>
            <small className="text-muted">© 2023 Acme Inc. Todos los derechos reservados</small>
          </Card.Footer>
        </Col>
      </Row>
    </Container>
  );
}