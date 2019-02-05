import React from 'react';
import './buttonBar.css';


class ButtonBar extends React.Component{
	
    render(){
		//console.log(this.props.currdata, 'button')
        
			return (
				<div className="buttonBar">
					<ul>
						<li onClick={this.props.onClick}>Last hour</li>
						<li onClick={this.props.onClick}>Today</li>
						<li onClick={this.props.onClick}>Yesterday</li>
						<li onClick={this.props.onClick}>Last 3 days</li>
					</ul>
				</div>
			)
		
        
    }
}

export default ButtonBar;