import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div className="container" style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#1a1a2e',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem', 
        color: '#ff79c6'
      }}>
        Retro Arcade
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Welcome to the ultimate retro gaming platform!
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '800px'
      }}>
        {['Adventure', 'Racing', 'Puzzle', 'RPG'].map(category => (
          <div key={category} style={{
            backgroundColor: '#16213e',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            <h3>{category}</h3>
            <p>Explore games</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
