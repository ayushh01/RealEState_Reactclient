import React , { Component } from 'react';
import { Card ,CardImg , CardImgOverlay , CardText , CardBody , CardTitle } from 'reactstrap';
import Homedetail from './homeDetail';

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedhome : null
        }
    }
 
    onHomeSelect(home) {
        this.setState({selectedhome:home})
    }

    

    render() {
        const menu = this.props.homes.map((home)=>{
            return(
                <div key={home.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onHomeSelect(home)}>
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
        })

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <Homedetail home={this.state.selectedhome} />
                </div>
            </div>
        );
    }
}

export default Menu;