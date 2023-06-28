import { Container, Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'

export default function LandingPage() {

  return (
    <Container fluid className="p-0">
      <div className="bg-secondary py-5">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={6}>
              <h1 className="text-white mb-4">
                Gestiona tus correos electrónicos de forma inteligente
              </h1>
              <p className="text-white mb-5">
                Inboxly te ayuda a ahorrar tiempo y aumentar tu productividad al
                analizar automáticamente tus correos electrónicos y clasificarlos
                por prioridad, importancia y categoría.
              </p>
              <Link href = "/login">
                <Button variant="outline-light" size="lg">
                  Inicia sesión
                </Button>
              </Link>
            </Col>
            <Col md={5}>
              <img
                src="/inboxlyLogo.jpg"
                alt="Ilustración de la aplicación Inboxly"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col md={5}>
            <img
              src="/dashboard.png"
              alt="Captura de pantalla del dashboard de Inboxly"
              className="img-fluid"
            />
          </Col>
          <Col md={7}>
            <h2 className="text-primary mb-4">
              Clsificacion de tus correos electrónicos
            </h2>
            <p className="lead mb-4">
              Con Inboxly, Puedes clasificar tus correos electronicos en las categorias que elijas
              para que puedas centrarte en lo que realmente importa
            </p>
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-check mr-2 text-primary"></i>
                Correos electrónicos clasificados por prioridad, importancia y categoría.
              </li>
              <li>
                <i className="fas fa-check mr-2 text-primary"></i>
                Vista previa rápida de cada correo electrónico sin tener que abrirlo.
              </li>
              <li>
                <i className="fas fa-check mr-2 text-primary"></i>
                Funcionalidades de búsqueda avanzada para encontrar correos electrónicos específicos.
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={7}>
            <h2 className="text-primary mb-4">
              Inboxly aprende de tus hábitos de correo electrónico
            </h2>
            <p className="lead mb-4">
              Inboxly usa inteligencia artificial para analizar tus hábitos de correo
              electrónico y personalizar la forma en que se muestran tus correos electrónicos.
            </p>
            <ul className="list-unstyled mb-0">
          <li>
            <i className="fas fa-check mr-2 text-primary"></i>
            Clasificación de correos electrónicos basada en tus patrones de lectura y respuesta.
          </li>
          <li>
            <i className="fas fa-check mr-2 text-primary"></i>
            Personalización de la vista del dashboard de acuerdo a tus preferencias.
          </li>
          <li>
            <i className="fas fa-check mr-2 text-primary"></i>
            Sugerencias de respuestas rápidas y acciones para ahorrar tiempo.
          </li>
        </ul>
      </Col>
      <Col md={5}>
        <img
          src="/download.jpg"
          alt="Ilustración de inteligencia artificial de Inboxly"
          className="img-fluid"
        />
      </Col>
    </Row>
  </Container>
  <div className="bg-secondary py-5">
    <Container>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2 className="text-white mb-4">
            Regístrate ahora y ahorra tiempo en tus correos electrónicos
          </h2>
          <Button variant="outline-light" size="lg">
            Regístrate
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
</Container>
)
}