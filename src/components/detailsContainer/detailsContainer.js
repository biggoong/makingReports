import React from 'react';
import "./detailsContainer.css";
import Searches from "../searches/searches";
import Clicks from "../clicks/clicks";
import Bookings from "../bookings/bookings";

class DetailsContainer extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <Searches data={this.props.currData}/>
                        <Clicks data={this.props.currData}/>
                        <Bookings data={this.props.currData}/>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DetailsContainer;