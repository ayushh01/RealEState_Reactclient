import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponents';
import { PROPERTIES } from './shared/Properties';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      homes:PROPERTIES
    };
  }

  render() {
  return (
    <div className="App">
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Real E State</NavbarBrand>
          </div>
        </Navbar>
        <Menu homes={this.state.homes}/>
      </div>
    </div>
  );
  }
}

export default App;
