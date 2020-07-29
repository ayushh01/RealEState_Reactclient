import React from 'react';
import Forcast from './Forcast.js';
import { Loading } from './LoadingComponent'; 

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.forcasts = [];
    this.state = { allForcasts: [] , modified: false };
    this.weforcast = this.weforcast.bind(this);
    this.renderForcast = this.renderForcast.bind(this);
  } 
    
  createForcast = (forcast) => {
    const city = forcast.city;     
    const time_now = forcast.time_now;
    let forcastDays = [];  
    for (let i = 0; i < forcast.consolidated_weather.length; i++) {
      const date_of_forcast = forcast.consolidated_weather[i].applicable_date;
      const max_temp = Math.round(forcast.consolidated_weather[i].max_temp);
      const min_temp = Math.round(forcast.consolidated_weather[i].min_temp);
      const now_temp = i === 0 ? Math.round(forcast.consolidated_weather[i].the_temp) : '';
      const weather_state_name = forcast.consolidated_weather[i].weather_state_name;
      const weather_state_abbr = forcast.consolidated_weather[i].weather_state_abbr;
     
      forcastDays.push({date_of_forcast, max_temp, min_temp, now_temp, weather_state_name, weather_state_abbr});
    }

    return {city, time_now, forcastDays};
  }
 
  createForcastComponent = (data) => {
    return (<Forcast key={Math.floor(Math.random() * 100)} city={data.city} time={data.time_now} forcastDays={data.forcastDays}/>) 
  } 
  
  renderForcast() {
    
    let components = [];
    for(let i = 0; i < this.state.allForcasts.length; i++) {
      let forcastProps = this.createForcast(this.state.allForcasts[i]); 
        
      components.push(this.createForcastComponent(forcastProps));      
    }

    return components;     
  }
  

  weforcast = (home) => {
    let locName = home.house_location;    
    if(locName == null)
    {
      locName = home.hotel_location;
    }
    
    const url = `https://realstatee.herokuapp.com/forcast/${locName}/`;    
    fetch(url)
      .then(response => { return response.json(); })
        .then(data => { 
         // console.log("Data from server: ", data);           
          
          const date = new Date();
          const time_now = date.getHours() + ':' + date.getMinutes();
          
          this.forcasts.push({ city: locName, time_now , consolidated_weather: data.consolidated_weather});
          
          if(this.forcasts.length > 1) {
            this.forcasts.shift();            
          }

          this.setState({allForcasts: this.forcasts});          
          // console.log("this.state: ", this.state.allForcasts)
        })
          .catch(err => {
            console.log(err);
          });                         
  }    

  render() {
    this.weforcast(this.props.home);
    const allComponents = this.renderForcast();
    return(      
      <div>
        <div className="all-forcasts">          
          { (this.state.allForcasts === undefined || this.state.allForcasts.length < 1) && (<div className="conatiner">
                    <div className="row">
                        <Loading />
                    </div>
                </div>)}
          {(this.state.allForcasts && this.state.allForcasts.length >= 1) && (allComponents.map(item => {return item;} ))}          
        </div>                     
      </div>
    );
  }
}   

const Weatherdetail = (props) => {
    const home = props.home
    if(home == null) 
    {
        return(
            <div>
                <h4>Home not found</h4>
            </div>
        )
    }
    else{
        return(
            <div className="container">
                <div className="row">
                    <MainContent home={home} />
                </div>
            </div>
        )
    }
}

export default Weatherdetail;