import React from 'react';

class Clicks extends React.Component{

    handlePer = () => {
        if(this.props.data){
            const curVal = this.props.data.current.clicks;
            const prevVal = this.props.data.previous.clicks;
            const value = (curVal / prevVal) * 100;
            let changedVal = 0;
            if (value > 100) {
                changedVal = value - 100;
                return <h3 className='positive'>Clicks <span>+ {changedVal.toFixed(0)}%</span></h3>
            } else {
                changedVal= 100 - value;
                return <h3 className='negative'>Clicks <span>- {changedVal.toFixed(0)}%</span></h3>
            }
            
        } else {
            return <h3 className='positive'>Clicks</h3>
        }
    }

    render(){
        if(this.props.data){
        return(
            <tr className="clicks">
                <td className="icon">
                    <img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-cursor-31.png&r=0&g=0&b=0"/>
                </td>
                <td>
                    {this.handlePer()}
                    <p className="currentValue">{this.props.data.current.clicks}<span>{this.props.data.name}</span></p>
					<p className="previousValue">{this.props.data.previous.clicks}<span>Last Friday</span></p>
                </td>
                <td>
                    <p className="negative">CTR: {this.props.data.others.ctr.toFixed(2)}%</p>
					<p className="comments">
                    Conversation from searches to clicks on all devices.
							<span>
								Help: <a href="#">CTR</a>, <a href="#">Clicks</a>
							</span>
					</p>
                </td>
            </tr>
        )} else {
            return <tr><td>Loading...</td></tr>
        }
    }
}

export default Clicks;