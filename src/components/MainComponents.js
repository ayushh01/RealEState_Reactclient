import React, { Component } from 'react';
import Menu from './MenuComponents';
import HotelMenu from './HotelMenuComponent';
import Homedetail from './homeDetail';
import Hoteldetail from './hotelDetail';
import Header from './Header';
import Footer from './FooterComponents';
import Home from './HomeComponents';
import Contact from './contactComponent';
import { Switch , Route , Redirect , withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment ,  fetchHomes ,fetchHotels , fetchComments , loginUser , logoutUser , SignupUser , postmail } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    homes:state.homes,
    hotels:state.hotels,
    comments:state.comments,
    auth:state.auth
  }   
}

const mapDispatchToProps = (dispatch) => ({
  postmail:(email) => dispatch(postmail(email)),
  postComment:(homeId , rating ,author, comment) => dispatch(postComment(homeId , rating ,author, comment)),
  fetchHomes:() => {dispatch(fetchHomes())},
  fetchHotels:() => {dispatch(fetchHotels())},
  fetchComments:() => {dispatch(fetchComments())},
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  SignupUser:( firstname, lastname, username, password) =>dispatch(SignupUser(firstname ,lastname , username , password))
});

class Main extends Component {


  componentDidMount() {
    this.props.fetchHomes();
    this.props.fetchHotels();
    this.props.fetchComments();
  }

  render() {

    const HomePage = () =>{
      return(
        <Home home={this.props.homes.homes.filter((home)=>home.featured)[0]}
        homesLoading={this.props.homes.isLoading} homesErrMess = { this.props.homes.errMess}
        hotel={this.props.hotels.hotels.filter((hotel)=>hotel.featured)[0]}
        hotelsLoading={this.props.hotels.isLoading} hotelsErrMess = { this.props.hotels.errMess}/>
      )
    }

    const HomeWithId = ({match}) => {
      return(
        
        <Homedetail home={this.props.homes.homes.filter((home)=>home._id === match.params.homeId)[0]}
            isLoading={this.props.homes.isLoading} errMess = { this.props.homes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.home === match.params.homeId)}
            commentsErrMess = { this.props.comments.errMess}
            postComment={this.props.postComment} auth={this.props.auth} postmail={this.props.postmail}/>
      )
    }

    const HotelWithId = ({match}) => {
      return(
        
        <Hoteldetail hotel={this.props.hotels.hotels.filter((hotel)=>hotel._id === match.params.hotelId)[0]}
            isLoading={this.props.hotels.isLoading} errMess = { this.props.hotels.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.home === match.params.hotelId)}
            commentsErrMess = { this.props.comments.errMess}
            postComment={this.props.postComment} auth={this.props.auth} postmail={this.props.postmail}/>
      )
    }


  return (
    <div className="App">
      <div className="App">
      <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser}
          SignupUser={this.props.SignupUser} 
          />   
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/properties" component={()=><Menu homes={this.props.homes} />} />
          <Route exact path="/hotels" component={()=><HotelMenu hotels={this.props.hotels} />} />
          <Route path="/properties/:homeId" component={HomeWithId} />
          <Route path="/hotels/:hotelId" component={HotelWithId} />
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
