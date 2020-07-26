import React , { Component} from 'react';
import {  Button, Modal, ModalHeader, ModalBody,  Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';  
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/BaseUrl';
import Weatherdetail from './forcastComponent';
import { MdNetworkWifi ,MdPets , MdPool, MdFreeBreakfast , MdLocalDrink , MdToys , MdFitnessCenter} from "react-icons/md";

    const required = (val) => val && val.length;
    
    
    //created Class component  Task-1
     class CommentForm extends Component {
        constructor(props) {
            super(props);
    
            this.state = {
                isModalOpen: false
            };
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }
    

        handleSubmit(values) {
            this.toggleModal();
            this.props.postComment(this.props.homeId, values.rating  , values.comment);
    
        }
    
        render() {
            return(
                <div>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span>Submit Comment</Button>
    
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row  className="form-group">
                                    <Label for="rating" md={12}>Rating</Label>
                                    <Col  md={12}>
                                        <Control.select defaultValue="5" model=".rating" id="rating" name="rating" className="form-control" >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
    
                                <Row className="form-group">
                                    <Label htmlFor="feedback"  md={12}>Your feedback</Label>
                                    <Col  md={12}>
                                        <Control.textarea model=".comment" id="comment" name="comment" resize="none" rows="6" className="form-control" validators={{ required }} />
                                        <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
                                    </Col>
                                </Row>
    
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
    
                </div>
            )
        }
    }

    function RenderComments({comments , postComment,homeId}) {
        if(comments == null) {
            return(
                <div>
                    <h4>Not Found</h4>
                </div>
            )
        }
        else
        {
            const comment = comments.map(comment =>{
                return(
                    <li key={comment.id}>
                        <p>{comment.rating} stars</p>
                        <p>{comment.comment}</p>
                        <p>--By {comment.author.firstname} {comment.author.lastname}</p>
                        <hr />
                    </li>
                    
                )
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h3> Comments </h3>
                    <hr />
                    <ul className="list-unstyled">{comment}</ul>
                    <CommentForm homeId={homeId} postComment={postComment}/>  
                        
                </div>
            )
        }
    }

    function RenderHome({home}){
        if(home!= null)
        {
            return(
                <>
                <div className="pic" style={{width:'100%'}}>
                    <img src={baseUrl + home.image} alt={home.hotel_title} style={{width:'100%'  , height:'500px'}}/>
                </div>
                     
                <br />
                <div className="title">
                    <h2>{home.hotel_title}</h2>
                    <p>{home.hotel_location}</p>
                </div>
                
                    
                
                <Weatherdetail home={home} />
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{home.description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>price : ${home.Price} per day</h6>
                        <h6>Available</h6>
                    </article>
                </div>
                <div className="room-extras">
                    <h6>Amenities & facilities</h6>
                    <div className="extras">
                        <li>{home.Breakfast ? <li>--Breakfast included  <MdFreeBreakfast /></li> : <li>--Breakfast not added</li> }</li>
                        <li>{home.Wifi ? <li>--Free Wifi  <MdNetworkWifi /></li> : <li>--no Wifi</li> }</li>
                        <li>{home.Pool ? <li>--Pool for all  <MdPool /></li> : null }</li>
                        <li>{home.Spa ? <li>--Spa included  </li> : <li>--Spa opening soon!</li> }</li>
                        <li>{home.Pets ? <li>--Pets are allowed  <MdPets /></li> : <li>--Pets are not allowed</li> }</li>
                        <li>{home.AC ? <li>--AC  <MdToys /></li> : <li>--Fan</li> }</li>
                        <li>{home.Hotel_bar ? <li>--Hotel_bar  <MdLocalDrink /></li> : null }</li>
                        <li>{home.Gym ? <li>--Gym included  <MdFitnessCenter /></li> : <li>--No Gym</li> }</li>
                    </div>
                </div>
                </>
            )
        }   
        else
        {
            return(
                <div>Not Found</div>
            );
        }
    }



    const hoteldetail = (props) => {
        const home = props.hotel
        if(props.isLoading) {
            return(
                <div className="conatiner">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if(props.errMess) {
            return(
                <div className="conatiner">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
        }
        else if(home == null) 
        {
            return(
                <div>
                    <h4>Home not found</h4>
                </div>
            )
        }
        return(
            <div className="container">
                <div className="row">
                    <RenderHome home={props.hotel} />
                    <RenderComments comments={props.comments} 
                    postComment={props.postComment}
                    homeId={props.hotel._id}/>
                </div>
            </div>
        )
    }

export default hoteldetail;