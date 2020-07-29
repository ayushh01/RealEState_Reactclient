import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/BaseUrl';
import { FadeTransform } from 'react-animation-components';

    function RenderHomeItem({hotel ,onClick}) {
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <article className="room">
            <div className="img-container">
                <img src={baseUrl + hotel.image} alt={hotel.hotel_title} />
                <div className="price-top">
                    <h6>${hotel.Price}</h6>
                    <p>per day</p>
                </div>
                <Link to={`/hotels/${hotel._id}`}  className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{hotel.hotel_title}</p>
        </article>
        </FadeTransform>
    )
    }

    const HotelMenu = (props) => {
        const menu = props.hotels.hotels.map((hotel)=>{
            return(
                <div key={hotel.id} className="col-12 col-md-5 m-1">
                    <RenderHomeItem hotel={hotel}/>        
                </div>
            )
        })
        if(props.hotels.isLoading) {
            return(
                <div className="conatiner">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if(props.hotels.errMess) {
            return(
                <div className="conatiner">
                    <div className="row">
                        <h4>{props.hotels.errMess}</h4>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div>
                <div className="roomsHotel">
                    <div className="banner">
                        <h1>Hotels</h1>
                        <div></div>
                    </div>
                </div>
                <hr />
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                </div>
                </div>
            );
        }
    }

        

export default HotelMenu;