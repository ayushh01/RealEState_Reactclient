import React, { Component } from 'react';
import Menu from './MenuComponents';

import Homedetail from './homeDetail';
import Header from './Header';
import Footer from './FooterComponents';
import Home from './HomeComponents';
import Contact from './contactComponent';
import { Switch , Route , Redirect , withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment ,  fetchHomes } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    homes:state.homes,
    comments:state.comments
  }   
}

const mapDispatchToProps = (dispatch) => ({
  addComment:(homeId , rating ,author, comment) => dispatch(addComment(homeId , rating ,author, comment)),
  fetchHomes:() => {dispatch(fetchHomes())}
});

class Main extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchHomes();
  }

  render() {

    const HomePage = () =>{
      return(
        <Home home={this.props.homes.homes.filter((home)=>home.featured)[0]}
        homesLoading={this.props.homes.isLoading} homesErrMess = { this.props.homes.errMess}/>
      )
    }

    const HomeWithId = ({match}) => {
      return(
        <Homedetail home={this.props.homes.homes.filter((home)=>home.id===parseInt(match.params.homeId,10))[0]}
            isLoading={this.props.homes.isLoading} errMess = { this.props.homes.errMess}
            comments={this.props.comments.filter((comment) => comment.homeId === parseInt(match.params.homeId,10))}
          addComment={this.props.addComment} />
      )
    }


  return (
    <div className="App">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/properties" component={()=><Menu homes={this.props.homes} />} />
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

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Main));
