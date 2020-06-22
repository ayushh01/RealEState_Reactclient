import React from 'react';
import { Card , CardText ,CardTitle ,CardBody ,CardImg , CardImgOverlay } from 'reactstrap';


    function RenderComments({comments}) {
       if(comments!=null)
       {
           return(
               <div className="col-12 col-md-5 m-1">
                   <h4>Comments</h4>
                    <ul className="list-unstyled">

                                <li key={comments.id}>
                                    <p>{comments.comment}</p>
                                    <p>--{comments.author}</p>
                                </li>
                    </ul>
               </div>
           )
       }
       else
       {
           return(
               <div></div>
           )
       }
    }

    function RenderHome({home}){
        if(home!= null)
        {
            return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" height="400px" src={home.image} alt={home.house_title} />
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
        if(home == null) {
            return(
                <div>

                </div>
            )
        }
        return(
            <div className="container">
                <div className="row">
                    <RenderHome home={props.home} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    }

export default homedetail;