import React, { Component } from 'react';
import Menu from './MenuComponents';
import { PROPERTIES } from '../shared/Properties';
import { COMMENTS } from '../shared/comments';
import Homedetail from './homeDetail';
import Header from './Header';
import Footer from './FooterComponents';
import Home from './HomeComponents';
import Contact from './contactComponent';
import { Switch , Route , Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      homes:PROPERTIES,
      comments:COMMENTS
    };
  }



  render() {

    const HomePage = () =>{
      return(
        <Home home={this.state.homes.filter((home)=>home.featured)[0]}/>
      )
    }

    const HomeWithId = ({match}) => {
      return(
        <Homedetail home={this.state.homes.filter((home)=>home.id===parseInt(match.params.homeId,10))[0]} 
          comments={this.state.comments.filter((comment)=>comment.homeId===parseInt(match.params.homeId,10))[0]} />
      )
    }


  return (
    <div className="App">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/properties" component={()=><Menu homes={this.state.homes} />} />
          <Route path="/properties/:homeId" component={HomeWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
  }
}

export default Main;
