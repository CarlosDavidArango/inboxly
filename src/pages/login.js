import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import GoogleLogin from 'react-google-login'
import { gapi } from "gapi-script";
import { useRouter } from 'next/router';

function LoginPage() {

  const clientId = '188627454702-tb4lsgr081oljhpi208s9c3mfidf06nn.apps.googleusercontent.com'
  const [user, setUser] = useState({})

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientId,
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  useEffect(() => {
    if (Object.keys(user).length > 0) {

      redirect(user.name);
    }
  }, [user]);

  const onSuccess = (response) => {

    setUser(response.profileObj);

  }
  const onFailure = (response) => {
    console.log("Algo salio mal con el registro")
  }

  const router = useRouter()
  const redirect = (user) => {
    router.push(`/home/${user}`);
    
  };

  
  return (
    <Container fluid className="p-0">
      <div className="bg-primary py-5 d-flex align-items-center justify-content-center">
        <Col md={6} className="bg-white rounded p-5 align-items-center justify-content-center" >
          <h1 className="text-center mb-4">
            Iniciar sesión en Inboxly
          </h1>
          <GoogleLogin md={6} className="  d-flex align-items-center justify-content-center"
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy= {"single_host_policy"}
          
          />
        </Col>
      </div>
    </Container>
  );
}

export default LoginPage;


/* 
    */