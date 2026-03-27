import React, { useState } from 'react';
import './App.css';

const estilos = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro semitransparente
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    minWidth: '300px',
    textAlign: 'center'
  },
  botonAbrir: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  },
  botonCerrar: {
    marginTop: '20px',
    padding: '8px 15px',
    cursor: 'pointer',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  }
};

function Ventana({ alCerrar, children }) {
  return (
    <div style={estilos.overlay}>
      <div style={estilos.modal}>
        <h3>Soy una ventana flotante</h3>
        <div>{children}</div>
        <button onClick={alCerrar} style={estilos.botonCerrar}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

function VentanaFlotante() {
  const [estaAbierto, setEstaAbierto] = useState(false);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Mi Aplicación</h1>
      <button onClick={() => setEstaAbierto(true)} style={estilos.botonAbrir}>
        Abrir Ventana
      </button>

      {/* Si estaAbierto es true, mostramos el modal */}
      {estaAbierto && (
        <VentanaFlotante alCerrar={() => setEstaAbierto(false)}>
          <p>Este es el contenido que va dentro de la ventana.</p>
        </VentanaFlotante>
      )}
    </div>
  );
}
export default VentanaFlotante;