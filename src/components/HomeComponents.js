import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/BaseUrl';
import { FadeTransform } from 'react-animation-components';
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
            <div>
                <h1>Buy Houses</h1>
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>    
            <article className="room">
                    <div className="img-container">
                        <img src={baseUrl + item.image} alt={item.house_title} />
                        <div className="price-top">
                            <h6>${item.Price}</h6>
                            <p>lakhs</p>
                        </div>
                        <Link to={`/properties/${item._id}`}  className="btn-primary room-link">
                            Features
                        </Link>
                    </div>
                    <p className="room-info">{item.house_title}</p>
            </article>
            </FadeTransform>
            <br />
            <Link to={'/properties'} >
            <button className="btn-primary">View More Houses</button>
            </Link>
            </div>
        )
    }
}

function RenderHotel({item ,isLoading , errMess}) {
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
            <div>
                <h1>Book Hotels</h1>
                <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>    
                <article className="room">
                    <div className="img-container">
                        <img src={baseUrl + item.image} alt={item.hotel_title} />
                        <div className="price-top">
                            <h6>${item.Price}</h6>
                            <p>per day</p>
                        </div>
                        <Link to={`/hotels/${item._id}`}  className="btn-primary room-link">
                            Features
                        </Link>
                    </div>
                    <p className="room-info">{item.hotel_title}</p>
            </article>
            </FadeTransform>
            <br />
            <Link to={'/hotels'} >
            <button className="btn-primary">View More Hotels</button>
            </Link>
            </div>
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
                <div className="col-12 col-md-5 m-1">
                    <div className="featured-rooms">
                    <RenderCard item={props.home} isLoading={props.homesLoading} errMess={props.homesErrMess}/>
                    </div>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <div className="featured-rooms">
                    <RenderHotel item={props.hotel} isLoading={props.hotelsLoading} errMess={props.hotelsErrMess}/>
                    </div>
                </div>
            </div>
            </div>
            
            </div>
    )
}

export default Home;