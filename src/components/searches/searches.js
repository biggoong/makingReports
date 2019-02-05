import React from 'react';

class Searches extends React.Component{

    handlePer = () => {
        if(this.props.data){
            const curVal = this.props.data.current.searches;
            const prevVal = this.props.data.previous.searches;
            const value = (curVal / prevVal) * 100;
            let changedVal = 0;
            if (value > 100) {
                changedVal = value - 100;
                return <h3 className='positive'>Searches <span>+ {changedVal.toFixed(0)}%</span></h3>
            } else {
                changedVal= 100 - value;
                return <h3 className='negative'>Searches <span>- {changedVal.toFixed(0)}%</span></h3>
            }
            
        } else {
            return <h3 className='positive'>Searches</h3>
        }
    }

    render(){
        //console.log(this.props, "searches");
        if(this.props.data){
        return(
            <tr className="searches">
                <td className="icon">
                    <img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-magnifier-10.png&r=0&g=0&b=0"/>
                </td>
                <td>
                    {this.handlePer()}
                    <p className="currentValue">{this.props.data.current.searches}<span>{this.props.data.name}</span></p>
					<p className="previousValue">{this.props.data.previous.searches}<span>Last Friday</span></p>
                </td>
                <td>
                    <p>Mobile Traffic: {this.props.data.others.mobile.toFixed(0)}%</p>
					<p>Web traffic: {this.props.data.others.web.toFixed(0)}%</p>
					<p className="comments">
						You get {this.props.data.others.mobile.toFixed(0)}% traffic on mobile and {this.props.data.others.web.toFixed(0)}% traffic on desktop devices.
							<span>
								Help: <a href="#">Searches</a>, <a href="#">Pessimination</a>
							</span>
					</p>
                </td>
            </tr>
        )
    } else {
        return <tr><td>Loading...</td></tr>
    }
} 


}

export default Searches;