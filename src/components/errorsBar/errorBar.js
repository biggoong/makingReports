import React from 'react';
import './errors.css';

class ErrorBar extends React.Component{

    handleErrorStick = () => {
        const data = this.props.currData.errors;
        if (data.length !==0){
            const sumCount = data.map(error => error.count);
            const sum = sumCount.reduce((acc, curVal) => acc + curVal);
            const errorsStick = data.map((error, i) => {
                //console.log(error, i, 'error');
                const width = error.count / sum;
                return (
                    <div key={i} className={'errorValue' + i} style={{width: `calc(${width} * 100%)`}}>
                    </div>
                )
            });
            return errorsStick;
        } else {
            return <div className= 'errorValue0' style={{width: '100%'}}></div>
        }
    }

    handleErrorName = () => {
        const data = this.props.currData.errors;
        if (data.length !==0){
            const sumCount = data.map(error => error.count);
            const sum = sumCount.reduce((acc, curVal) => acc + curVal);
            //console.log(sum);
            const errorsList = data.map((error, i) => {
                //console.log(error, i, 'error');
                const width = error.count / sum;
                return (
                    <div key={i} className={'errorName' + i} style={{width: `calc(${width} * 100%)`}}>
                        {error.code ? `Error ${error.code}: ${error.count}` : `Other: ${error.count}`}
                    </div>
                )
            });
            return errorsList;
        } else {
        return <div className= 'errorName0' style={{width: '100%'}}>Other</div>
        }
    }

    render(){
        if(this.props.currData){
            //console.log(this.props.currData.errors)
            return(
                <div className='errorBar'>
                    <div className='errorStick'>
                        {this.handleErrorStick()}
                    </div>
                    <div className='errorName'>
                        {this.handleErrorName()}
                    </div>
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

export default ErrorBar;