import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import profile from './profile.webp';
import './App.css';

// Este es el componente al que redirigiremos
const Dashboard = ({ user }) => (
  <div className="App-header">
    <img src={profile} width="15%" style={{ borderRadius: '50%' }} />
    <h1>Bienvenida, {user.name}</h1>
    <p>Has iniciado sesión con éxito.</p>
    <button onClick={() => window.location.reload()}>Cerrar Sesión</button>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // Sustituye con tu Client ID real de Google Cloud Console
  const clientId = "941946385897-47nhbn0q4ji9f3jj3i4dkaqbblfk16t4.apps.googleusercontent.com";

  const onSuccess = (response) => {
    console.log("Login Success:", response);
    // Aquí normalmente decodificarías el JWT (token) para obtener los datos del usuario
    // Por ahora, simularemos que ya tenemos los datos:
    setUserData({ name: "Fernanda Sosa" }); 
    setIsLoggedIn(true);
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        {isLoggedIn ? (
          <Dashboard user={userData} />
        ) : (
          <header className="App-header">
            <div><img src={profile} width="30%" height="30%"/></div>        
            <h1>ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
            <h2>Alumno(a): Fernanda Sosa Pérez</h2>
            
            {/* BOTÓN DE LOGIN */}
           

            <a className="App-link" href="https://www.linkedin.com/..." target="_blank" rel="noopener noreferrer">
              LINKED IN DE MI PROFILE
            </a><br />
            <a className="App-link" href="https://www.medikt.com.mx/practicas/documentacion.html" target="_blank" rel="noopener noreferrer">
              DOCUMENTACION PARCIAL 1
            </a><br />        
            <a className="App-link" href="https://www.medikt.com.mx/practicas/parcial_2.html" target="_blank" rel="noopener noreferrer">
              DOCUMENTACION PARCIAL 2
            </a> 
             <div style={{ margin: '20px' }}>
              <GoogleLogin 
                onSuccess={onSuccess} 
                onError={onError}
                useOneTap
              />
            </div>
          </header>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;