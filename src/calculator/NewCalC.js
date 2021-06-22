import React, {Component} from 'react';
import BtnClick from './BtnClick';
import ResultComponent from './ResultComponent';



class NewCalC extends Component {
    constructor(){
        super();

        this.state = {result: ''}
    }

   onClick = button => {

        if(button === "=") {
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        
     this.setState({ result: (eval(this.state.result) || "" ) })
        
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="container">
                    <h1>Calculator</h1>
                    <ResultComponent result={this.state.result}/>
                    <BtnClick onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default NewCalC;
