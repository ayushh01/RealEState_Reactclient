import React, { Component } from 'react';
import Menu from './MenuComponents';
import { PROPERTIES } from '../shared/Properties';
import Homedetail from './homeDetail';
import Header from './Header';
import Footer from './FooterComponents';
import Home from './HomeComponents';
import { Switch , Route , Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      homes:PROPERTIES,
      selectedhome:null
    };
  }



  render() {

    const HomePage = () =>{
      return(
        <Home />
      )
    }


  return (
    <div className="App">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/properties" component={()=><Menu homes={this.state.homes} />} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
  }
}

export default Main;
