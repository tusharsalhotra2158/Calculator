import React, { Component } from 'react';

class ResultComponent extends Component {


    render() {
        let { result } = this.props;
        return (
            <div className="result">
                <input className="input1"  value={result} style={{ textAlign: 'right' }} />
            </div>
        )
            ;
    }
}


export default ResultComponent;