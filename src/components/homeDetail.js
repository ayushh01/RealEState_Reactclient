import React , { Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Button, Modal, ModalHeader, ModalBody,  Label, Row, Col } from 'reactstrap';
import { addComment } from '../redux/ActionCreators';
import { Control, LocalForm, Errors } from 'react-redux-form';  
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/BaseUrl';

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    
    
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
            this.props.addComment(this.props.homeId, values.rating , values.author , values.comment);
    
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
                                    <Label htmlFor="author"  md={12}>Your Name</Label>
                                    <Col  md={12}>
                                        <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                        <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less' }} />
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

    function RenderComments({comments , addComment,homeId}) {
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
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}</p>
                    </li>
                    
                )
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    <ul className="list-unstyled">{comment}</ul>
                    <CommentForm homeId={homeId} addComment={addComment}/>  
                        
                </div>
            )
        }
    }

    function RenderHome({home}){
        if(home!= null)
        {
            return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" height="400px" src={baseUrl + home.image} alt={home.house_title} />
                <CardImgOverlay>
                    <CardTitle>{home.house_title}</CardTitle>
                    <p>{home.house_location}</p>
                    <p>Price : - {home.Price}</p>
                    <p>Area in sqft : - {home.Area}</p>
                </CardImgOverlay>
            </Card>
            </div>
            )
        }   
        else
        {
            return(
                <div>Not Found</div>
            );
        }
    }

    const homedetail = (props) => {
        const home = props.home
        console.log(props);
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
                    <RenderHome home={props.home} />
                    <RenderComments comments={props.comments} 
                    addComment={props.addComment}
                    homeId={props.home.id}/>
                </div>
            </div>
        )
    }

export default homedetail;