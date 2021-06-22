import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Addition from './Addition/Addition'
import ParentComponent from './ParentComponent/ParentComponent';
import State from './bandIt/State';
import Block from './block/Block'
import A from './lifting-state/A'
import Mains from './Show-Game/Mains';
// import Calculate from './calculator/Calculate';
import 'bootstrap/dist/css/bootstrap.min.css';
import Action from './newCalc/Action';
import NewCalC from './calculator/NewCalC'

class App extends React.Component {

  render() {

    return (

      <>
        <Navbar />
        <NewCalC/>
        <Addition />
        <State />
        <Block />
        <A />
        <Mains />
        <Action/>
        
      </>

    );
  }
}


export default App;


