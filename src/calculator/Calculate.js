import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/navbar.css'

function Calculate() {

    const [number1, setNumber1] = useState();

    function onHandleChange(e) {

        var check = e.target.value;
        if (check === "number1") {
            setNumber1(1)
        } else if (check === "number2") {
            setNumber1(2)
        } else if (check === "number7") {
            setNumber1(7)
        } else if (check === "number8") {
            setNumber1(8)
        } else if (check === "number9") {
            setNumber1(9)
        } else if (check === "number6") {
            setNumber1(6)
        } else if (check === "number5") {
            setNumber1(5)
        } else if (check === "number4") {
            setNumber1(4)
        } else if (check === "number3") {
            setNumber1(3)
        } else if (check === "divid") {
            setNumber1('/')
        } else if (check === "mult") {
            setNumber1('*')
        } else if (check === "sub") {
            setNumber1('-')
        } else if (check === "b1") {
            setNumber1('(')
        } else if (check === "b2") {
            setNumber1(')')
        } else if (check === "percent") {
            setNumber1('%')
        } else if (check === "clear") {
            setNumber1(0)
        } else if (check === "number0") {
            setNumber1(0)
        } else if (check === "dot") {
            setNumber1('.')
        } else if (check === "add") {
            setNumber1()
        }
        try {
            this.setNumber1({
                // eslint-disable-next-line
                result: (eval(this.equal) || "") + ""
            })
        } catch (e) {
            this.setNumber1({
                equal: "error"
            })
    
        }
        
    }

    return (
        <div className="container">

            
            <h2> CALCULATOR </h2>
            <input value={number1} className="input1" onChange={onHandleChange} readOnly />
            <div className="container-box" >
                <div className="rows">
                    <Button className="dark1" variant="secondary" value={"b1"} onClick={onHandleChange} >(</Button>
                    <Button className="dark1" variant="secondary" value={"b2"} onClick={onHandleChange}> )</Button>
                    <Button className="dark1" variant="secondary" value={"percent"} onClick={onHandleChange}> % </Button>
                    <Button className="dark1" variant="warning" value={"clear"} onClick={onHandleChange}> AC </Button>
                </div>
                <br />
                <div className="rows">
                    <Button className="dark" variant="light" value={"number7"} onClick={onHandleChange} >7</Button>
                    <Button className="dark" variant="light" value={"number8"} onClick={onHandleChange} >8</Button>
                    <Button className="dark" variant="light" value={"number9"} onClick={onHandleChange} >9</Button>
                    <Button className="dark" variant="warning" value={"divid"} onClick={onHandleChange}> / </Button>
                </div>
                <br />
                <div className="rows">
                    <Button className="dark" variant="light" value={"number4"} onClick={onHandleChange} >4</Button>
                    <Button className="dark" variant="light" value={"number5"} onClick={onHandleChange} >5</Button>
                    <Button className="dark" variant="light" value={"number6"} onClick={onHandleChange} >6</Button>
                    <Button className="dark" variant="warning" value={"mult"} onClick={onHandleChange}> * </Button>
                </div>
                <br />
                <div className="rows">
                    <Button className="dark" variant="light" value={"number1"} onClick={onHandleChange}>1</Button>
                    <Button className="dark" variant="light" value={"number2"} onClick={onHandleChange}>2</Button>
                    <Button className="dark" variant="light" value={"number3"} onClick={onHandleChange}>3</Button>
                    <Button className="dark" variant="warning" value={"sub"} onClick={onHandleChange}> - </Button>
                </div>
                <br />
                <div className="rows">
                    <Button className="dark" variant="light" value={"number0"} onClick={onHandleChange} >0</Button>
                    <Button className="dark" variant="light" value={"dot"} onClick={onHandleChange} >.</Button>
                    <Button className="dark" variant="light" value={"equal"} onClick={onHandleChange} >=</Button>
                    <Button className="dark" variant="warning" value={"add"} onClick={onHandleChange}>+</Button>
                </div>
            </div>

        </div>

    );
}
export default Calculate;
