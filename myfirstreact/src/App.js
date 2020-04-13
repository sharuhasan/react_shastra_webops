import React,{Component} from 'react';
import VForm from './formvalidation';
import './App.css'

class App extends Component { 

    render() {
      return (
      <div className="App" >
            <h2 style={{marginLeft:1178,paddingTop:120,marginBottom:0}}>REGISTRATION</h2>
            <VForm /> 
      </div>
      );
   }
}


export default App;
