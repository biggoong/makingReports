import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ButtonBar from "./components/buttonBar/buttonBar";
import DetailsContainer from "./components/detailsContainer/detailsContainer";
import ErrorByTypes from "./components/errorsBar/errorByTypes";
import ErrorBar from "./components/errorsBar/errorBar";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      last_hour: {},
      yesterday: {},
      last_3days: {},
      currData: null
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8080/')
    .then(json => {
      //console.log(json.data);
      this.setState({
        data: json.data,
        last_hour: {
          name: 'Last hour',
          current: {
            searches: json.data.data[0].searches_current_last_hour,
            clicks: json.data.data[0].clicks_current_last_hour,
            bookings: json.data.data[0].bookings_current_last_hour
          },
          previous: {
            searches: json.data.data[0].searches_previous_last_hour,
            clicks: json.data.data[0].clicks_previous_last_hour,
            bookings: json.data.data[0].bookings_previous_last_hour
          },
          others: {
            errors: json.data.data[0].errors_last_hour,
            zeroes: json.data.data[0].zeroes_last_hour,
            timeout: json.data.data[0].timeout_last_hour,
            ctr: json.data.data[0].ctr_last_hour,
            str: json.data.data[0].str_last_hour,
            avg_price: json.data.data[0].avg_price_last_hour,
            mobile: json.data.data[0].mobile_pessimizer,
            web: json.data.data[0].web_pessimizer
          },
          errors: json.data.errors_last_hour
        },
        yesterday: {
          name: 'Yesterday',
          current: {
            searches: json.data.data[0].searches_current_yesterday,
            clicks: json.data.data[0].clicks_current_yesterday,
            bookings: json.data.data[0].bookings_current_yesterday
          },
          previous: {
            searches: json.data.data[0].searches_previous_yesterday,
            clicks: json.data.data[0].clicks_previous_yesterday,
            bookings: json.data.data[0].bookings_previous_yesterday
          },
          others: {
            errors: json.data.data[0].errors_yesterday,
            zeroes: json.data.data[0].zeroes_yesterday,
            timeout: json.data.data[0].timeout_yesterday,
            ctr: json.data.data[0].ctr_yesterday,
            str: json.data.data[0].str_yesterday,
            avg_price: json.data.data[0].avg_price_yesterday,
            mobile: json.data.data[0].mobile_pessimizer,
            web: json.data.data[0].web_pessimizer
          },
          errors: json.data.errors_yesterday
        },
        last_3days: {
          name: 'Last 3 days',
          current: {
            searches: json.data.data[0].searches_current_last_3days,
            clicks: json.data.data[0].clicks_current_last_3days,
            bookings: json.data.data[0].bookings_current_last_3days
          },
          previous: {
            searches: json.data.data[0].searches_previous_last_3days,
            clicks: json.data.data[0].clicks_previous_last_3days,
            bookings: json.data.data[0].bookings_previous_last_3days
          },
          others: {
            errors: json.data.data[0].errors_last_3days,
            zeroes: json.data.data[0].zeroes_last_3days,
            timeout: json.data.data[0].timeout_last_3days,
            ctr: json.data.data[0].ctr_last_3days,
            str: json.data.data[0].str_last_3days,
            avg_price: json.data.data[0].avg_price_last_3days,
            mobile: json.data.data[0].mobile_pessimizer,
            web: json.data.data[0].web_pessimizer
          },
          errors: json.data.errors_last_3days
        }
      })
    })
  }

  handleClick = (e) => {
    let text = e.target.innerText;
    //console.log(text);
    if(text === 'Last hour' || text === 'Today'){
      this.setState({currData: this.state.last_hour});
    } else if(text === 'Yesterday'){
      this.setState({currData: this.state.yesterday});
    } else if(text === 'Last 3 days'){
      this.setState({currData: this.state.last_3days});
    }
  }

  render() {
    //console.log(this.state)
    return (
      <div className="App">
        <h1>Main metrics</h1>
        <ButtonBar onClick={this.handleClick}/>
        <ErrorByTypes currData={this.state.currData}/>
        <ErrorBar currData={this.state.currData}/>
        <DetailsContainer currData={this.state.currData}/>
      </div>
    );
  }
}

export default App;
