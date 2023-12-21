// components/Login.js
import React, { useState, useEffect } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';



const Login = ({ onLogin, isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        onLogin(data.token); // Assuming that your onLogin function takes a token as an argument
        setRedirecting(true);
        // Introduce a delay before redirecting to the home page
        setTimeout(() => {
          navigate('/');
        }, 5000); // 5000 milliseconds (5 seconds)
      } else {
        // Login failed
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred during login.');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      // Introduce a delay before redirecting to the home page
      const delay = setTimeout(() => {
        navigate('/');
      }, 5000); // 5000 milliseconds (5 seconds)

      // Clear the timeout if the component is unmounted
      return () => clearTimeout(delay);
    }
  }, [isAuthenticated, navigate]);

  return (
    <MDBContainer className="mt-5" fluid>
      <MDBRow className="justify-content-center">
        <MDBCol lg="8">
          <MDBCard>
            <MDBRow className="m-0">
              <MDBCol md="6">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  alt="image"
                  fluid
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody>
                  <MDBRow className="mb-4">
                    <MDBCol className="text-center">
                      <h2>Login</h2>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol>
                      <label className="font-label">Username</label>
                      <MDBInput
                        id="formControlLg"
                        type="text"
                        size="sm"  // Change size to "sm" for smaller input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol>
                      <label className="font-label">Password</label>
                      <MDBInput
                        id="formControlLg"
                        type="password"
                        size="sm"  // Change size to "sm" for smaller input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4 justify-content-center">
                    <MDBCol>
                      <button
                        className="btn btn-primary btn-lg"
                        onClick={handleLogin}
                        style={{ width: '100%' }}
                      >
                        Sign in
                      </button>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol>
                      <div className="divider d-flex align-items-center">
                        <p className="text-center fw-bold text-black mb-0">OR</p>
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="mb-4">
                    <MDBCol className="text-center">
                      <p className="mb-0 text-black">Don't have an account?</p>
                      <Link to="/register" className="fw-bold">Register here</Link>
                    </MDBCol>
                  </MDBRow>

                  {message && (
                    <MDBRow>
                      <MDBCol>
                        <p className="text-center text-danger">{message}</p>
                      </MDBCol>
                    </MDBRow>
                  )}

                  {redirecting && (
                    <MDBRow>
                      <MDBCol>
                        <p className="text-center text-success">Logging in. Redirecting to the home page...</p>
                      </MDBCol>
                    </MDBRow>
                  )}
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;