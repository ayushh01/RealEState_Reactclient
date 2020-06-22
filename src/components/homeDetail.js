import React , { Component } from 'react';
import { Card , CardText ,CardTitle ,CardBody ,CardImg , CardImgOverlay } from 'reactstrap';

class homedetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if(comments == null) {
            return(
                <div>

                </div>
            )
        }
        else
        {
            const comment = comments.map(comment =>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author} </p>
                    </li>
                )
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    <ul className="list-unstyled">{comment}</ul>
                </div>
            )
        }
    }

    renderHome(home){
        if(home!= null)
        {
            return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={home.image} alt={home.name} />
                <CardBody>
                    <CardTitle>{home.name}</CardTitle>
                    <CardText>{home.house_location}</CardText>
                    <CardText>Price : - {home.Price}</CardText>
                    <CardText>Area in sqft : - {home.Area}</CardText>
                </CardBody>
            </Card>
            </div>
            )
        }   
        else
        {
            return(
                <div></div>
            );
        }
    }

    render() {
        const home = this.props.home
        if(home == null) {
            return(
                <div>

                </div>
            )
        }
        const homeItem  = this.renderHome(home)
        const commentItem = this.renderComments(home.comments)
        return(
            <div className="row">
                { homeItem }
                { commentItem }
            </div>
        )
    }
}

export default homedetail;