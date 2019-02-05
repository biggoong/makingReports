import React from "react";
import './errors.css';

class ErrorByTypes extends React.Component{
    render(){
        if(this.props.currData){
            //console.log(this.props.currData, "errors")
        return(
            <div>
                <table className="errorByTypes">
                    <tbody>
                        <tr>
                            <td>
                                <p className="errorType">Errors: {this.props.currData.others.errors && this.props.currData.others.errors.toFixed(2)}%</p>
                                <p className='average'>Average: {this.props.currData.others.errors && this.props.currData.others.errors.toFixed(2)}%</p>
                            </td>
                            <td>
                                <p className="errorType">Zeroes: {this.props.currData.others.zeroes && this.props.currData.others.zeroes.toFixed(2)}%</p>
                                <p className='average'>Average: {this.props.currData.others.zeroes && this.props.currData.others.zeroes.toFixed(2)}%</p>
                            </td>
                            <td>
                                <p className="errorType">Timeouts: {this.props.currData.others.timeout && this.props.currData.others.timeout.toFixed(2)}%</p>
                                <p className='average'>Average: {this.props.currData.others.timeout && this.props.currData.others.timeout.toFixed(2)}%</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )} else {
            return <div>Loading...</div>
        }
    }
}

export default ErrorByTypes;