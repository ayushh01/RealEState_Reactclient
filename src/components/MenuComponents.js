import React from 'react';
import { Card ,CardImg , CardImgOverlay , CardText , CardBody , CardTitle } from 'reactstrap';

    function RenderHomeItem({home ,onClick}) {
        return(
        <Card onClick={() => onClick(home.id)}>
            <CardImg width="100%" height="400px" src={home.image} alt={home.house_title} />
            <CardImgOverlay>
                <CardTitle>{home.house_title}</CardTitle>
                <p>{home.house_location}</p>
                <p>Price : - {home.Price}</p>
                <p>Area in sqft : - {home.Area}</p>
            </CardImgOverlay>
        </Card>
    )
    }

    const Menu = (props) => {
        const menu = props.homes.map((home)=>{
            return(
                <div key={home.id} className="col-12 col-md-5 m-1">
                    <RenderHomeItem home={home} onClick={props.onClick} />        
                </div>
            )
        })

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

        

export default Menu;