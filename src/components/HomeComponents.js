import React, { Component } from 'react';
import { Card, CardImg,CardText,CardBody,CardTitle,CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/BaseUrl';
import { BsFillBarChartFill , BsFillBagFill , BsFillBrightnessHighFill ,BsFillPeopleFill} from "react-icons/bs";
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
            <div className="services-center">
                <article className="service">
                    <span><BsFillBarChartFill /></span>
                    <h6>Full Network Areas</h6>
                    <p>You will get good coverage for every Mobile Network Connection</p>
                </article>
            
                <article className="service">
                    <span><BsFillBagFill /></span>
                    <h6>Near by All Essentials</h6>
                    <p>All marts and metro and other essential stores are nearby.</p>
                </article>
            
                <article className="service">
                    <span><BsFillBrightnessHighFill /></span>
                    <h6>Excellent Sunlight</h6>
                    <p>All baclonies are sunlight facing or good sunlight exposure</p>
                </article>
                <article className="service">
                    <span><BsFillPeopleFill /></span>
                    <h6>Friendly Neighbours</h6>
                    <p>Surrounded by Positive and Friendly Neighbours</p>
                </article>
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