import React from 'react';
import { Card ,CardImg , CardImgOverlay , CardText , CardBody , CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/BaseUrl';

    function RenderHomeItem({home ,onClick}) {
        return(
        <Card>
            <Link to={`/properties/${home._id}`} >
                <CardImg width="100%" height="400px" src={baseUrl + home.image} alt={home.house_title} />
                <CardImgOverlay>
                    <CardTitle>{home.house_title}</CardTitle>
                    <p>{home.house_location}</p>
                    <p>Price : - {home.Price}</p>
                    <p>Area in sqft : - {home.Area}</p>
                </CardImgOverlay>
                </Link>
        </Card>
    )
    }

    const Menu = (props) => {
        const menu = props.homes.homes.map((home)=>{
            return(
                <div key={home.id} className="col-12 col-md-5 m-1">
                    <RenderHomeItem home={home}/>        
                </div>
            )
        })
        if(props.homes.isLoading) {
            return(
                <div className="conatiner">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if(props.homes.errMess) {
            return(
                <div className="conatiner">
                    <div className="row">
                        <h4>{props.homes.errMess}</h4>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
        }
    }

        

export default Menu;