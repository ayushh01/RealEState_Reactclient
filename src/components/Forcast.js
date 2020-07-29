import React from 'react';


class Forcast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    oneDay = (dayForcast, i) => {
      const now_temp = (i === 0 ? dayForcast.now_temp : undefined);
      const weather_state_abbr = dayForcast.weather_state_abbr;
      const imageURL = "https://www.metaweather.com/static/img/weather/" + weather_state_abbr + ".svg";
      return (
      <li key={this.props.time + i }>
        <h3>{dayForcast.date_of_forcast}</h3>
        <img src={imageURL} width={60} height={60} alt={"bla"}/>
        <h4>{dayForcast.weather_state_name}</h4>  
        <h4>Max: {dayForcast.max_temp}</h4>
        <h4>Min: {dayForcast.min_temp}</h4>
        {now_temp && (<h4>Now: {now_temp}</h4>)}
      </li>
      )
    }

    render() {        
        let forcastDays = this.props.forcastDays;
        return (
          <div>
          <h3>Plan your visit Smartly Weather Conditions of {this.props.city} for next 7 days:-</h3>
          <div className="location-style">
            <h4>{this.props.city} <br />
              <span>Time: {this.props.time}</span>
            </h4>
            <ul>
              {forcastDays.map( (day, index) => this.oneDay(day, index) ) } 
            </ul>
          </div>
          </div>
        );
    }
}

export default Forcast;