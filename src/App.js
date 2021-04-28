 //import logo, { ReactComponent } from './logo.svg';
import './App.css';
import React from 'react';
import Logement from './Logement';
import LogementTotal from './LogementTotal';


//import Form from 'antd/lib/form/Form';
/*function App() {
  return (
    <div className="App">
      <p> mon navigateur est impecable</p>
      
    </div>
  );
}*/
class App extends React.Component {

 render () {
  
 return(
<div id="container">
    
 <LogementTotal/>
 
 </div>

 )
        }
      
  
}

export default App;
