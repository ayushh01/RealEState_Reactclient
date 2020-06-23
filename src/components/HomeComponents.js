import React, { Component } from 'react';
import { Card, CardImg,CardText,CardBody,CardTitle,CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderCard({item}) {
    return(
        <Link to={`/properties/${item.id}`} >
        <Card>
            <CardImg src={item.image} alt={item.house_title} />
            <CardBody>
                <CardTitle>{item.house_title}</CardTitle>
                <CardSubtitle>{item.price}</CardSubtitle>
            </CardBody>
        </Card>
        </Link>
    )
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.home}/>
                </div>
            </div>
        </div>
    )
}

export default Home;