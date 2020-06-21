import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponents';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Real E State</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    </div>
  );
}

export default App;
