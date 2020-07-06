import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Navigation from './components/layouts/Navigation';
import Header from './components/layouts/Header';

function App() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Navigation />
        </Row>
      </Container>
    </div>
  );
}

export default App;
