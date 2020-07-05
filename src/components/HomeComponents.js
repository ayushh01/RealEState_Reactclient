import React, { Component } from 'react';
import { Card, CardImg,CardText,CardBody,CardTitle,CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/BaseUrl';
function RenderCard({item ,isLoading , errMess}) {
    if(isLoading) {
        return(
            <Loading />
        )
    }
    else if(errMess) {
        return(
            <h4>{errMess}</h4>
        )
    }
    else 
    {
        return(
            <Link to={`/properties/${item._id}`} >
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.house_title} />
                <CardBody>
                    <CardTitle>{item.house_title}</CardTitle>
                    <CardSubtitle>{item.price}</CardSubtitle>
                </CardBody>
            </Card>
            </Link>
        )
    }
}

function Home(props) {
    return(
        <div>
        <div className="defaultHero">
            <div className="banner">
                <h1>WELCOME</h1>
                <div></div>
                <p>Buy Best Houses</p>
            </div>
        </div>
        <div className="services">
            <div className="section-title">
            <h4>Services</h4>
            <div></div>
            </div>
            </div>
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <div className="featured-rooms">
                    <RenderCard item={props.home} isLoading={props.homesLoading} errMess={props.homesErrMess}/>
                    </div>
                </div>
            </div>
            </div>
            
            </div>
    )
}

export default Home;