import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/BaseUrl';
import { FadeTransform } from 'react-animation-components';

    function RenderHomeItem({home ,onClick}) {
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
        <article className="room">
            <div className="img-container">
                <img src={baseUrl + home.image} alt={home.house_title} />
                <div className="price-top">
                    <h6>${home.Price}</h6>
                    <p>lakhs</p>
                </div>
                <Link to={`/properties/${home._id}`}  className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{home.house_title}</p>
        </article>
        </FadeTransform>
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
                <div>
                <div className="roomsHero">
                    <div className="banner">
                        <h1>Properties</h1>
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

        

export default Menu;