import React from 'react';

class Bookings extends React.Component{

    handlePer = () => {
        if(this.props.data){
            const curVal = this.props.data.current.bookings;
            const prevVal = this.props.data.previous.bookings;
            const value = (curVal / prevVal) * 100;
            let changedVal = 0;
            if (value > 100) {
                changedVal = value - 100;
                return <h3 className='positive'>Bookings <span>+ {changedVal.toFixed(0)}%</span></h3>
            } else {
                changedVal= 100 - value;
                return <h3 className='negative'>Bookings <span>- {changedVal.toFixed(0)}%</span></h3>
            }
            
        } else {
            return <h3 className='positive'>Bookings</h3>
        }
    }

    render(){
        if(this.props.data){
        return(
            <tr className="clicks">
                <td className="icon">
                    <img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-basket-4.png&r=0&g=0&b=0"/>
                </td>
                <td>
                    {this.handlePer()}
                    <p className="currentValue">{this.props.data.current.bookings}<span>{this.props.data.name}</span></p>
					<p className="previousValue">{this.props.data.previous.bookings}<span>Last Friday</span></p>
                </td>
                <td>
                    <p>CTR: {this.props.data.others.str && this.props.data.others.str.toFixed(2)}%</p>
                    <p>Avg. Check: {this.props.data.others.avg_price}</p>
					<p className="comments">
                    Conversation from clicks to bookings on all devices.
							<span>
								Help: <a href="#">CTR</a>, <a href="#">Bookings</a>, <a href="#">Avg.Check</a>
							</span>
					</p>
                </td>
            </tr>
        )} else {
            return <tr><td>Loading...</td></tr>
        }
    }
}

export default Bookings;