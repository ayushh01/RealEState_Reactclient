import React , { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            homes: [
                {
                    id: "5eee2cc6a1c41514b0be423c",
                    house_title: "Garden Bay",
                    house_location: "  IIM Road, Lucknow",
                    image: "assets/images/house3.jpg",
                    Price: 39.1,
                    Area: 2914,
                    Spacing: "4BHK",
                    Bedrooms: 4,
                    Balconies: 2,
                },
                {
                    id: "5eee2d1ea1c41514b0be423d",
                    house_title: "Trustus Town",
                    house_location: "Raibarelly Road, Lucknow",
                    image: "assets/images/house4.jpg",
                    Price: 5.11,
                    Area: 642,
                    Spacing: "800sq",
                    Bedrooms: 0,
                    Balconies: 0,
                },
                {
                    id: "5eee2d78a1c41514b0be423e",
                    house_title: "Omaxshiva Phase II",
                    house_location: "Naini, Prayagraj",
                    image: "assets/images/house5.jpg",
                    Price: 53.7,
                    Area: 1895,
                    Spacing: "3BHK",
                    Bedrooms: 3,
                    Balconies: 2,
                },
                {
                    id: "5eee2db4a1c41514b0be423f",
                    house_title: "Omaxe Residency 2",
                    house_location: "Gomtinagar Extension, Amar Shaeed Path, Lucknow",
                    image: "assets/images/house6.jpg",
                    Price: 54.3,
                    Area: 1890,
                    Spacing: "3BHK",
                    Bedrooms: 3,
                    Balconies: 2,
                }
            ]
        }
    }

    render() {
        const menu = this.state.homes.map((home)=>{
            return(
                <div key={home.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={home.image} alt={home.house_title} />
                        </Media>
                        <Media  body className="ml-5">
                            <Media  heading>{home.house_title}</Media>
                            <p>{home.house_location}</p>
                            <p>Price : - {home.Price}</p>
                            <p>Area in sqft : - {home.Area}</p>
                        </Media>
                    </Media>
                </div>
            )
        })

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;