import React, { Component } from 'react';
import Menu from './MenuComponents';

import Homedetail from './homeDetail';
import Header from './Header';
import Footer from './FooterComponents';
import Home from './HomeComponents';
import Contact from './contactComponent';
import { Switch , Route , Redirect , withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment ,  fetchHomes , fetchComments } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    homes:state.homes,
    comments:state.comments
  }   
}

const mapDispatchToProps = (dispatch) => ({
  addComment:(homeId , rating ,author, comment) => dispatch(addComment(homeId , rating ,author, comment)),
  fetchHomes:() => {dispatch(fetchHomes())},
  fetchComments:() => {dispatch(fetchComments())}
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHomes();
    this.props.fetchComments();
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
        
        <Homedetail home={this.props.homes.homes.filter((home)=>home._id === match.params.homeId)[0]}
            isLoading={this.props.homes.isLoading} errMess = { this.props.homes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.home === match.params.homeId)}
            commentsErrMess = { this.props.comments.errMess}
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
