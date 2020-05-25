// import React and ReactDOM libraries
import React from 'react';          //React can be anything 
import ReactDOM from 'react-dom';
import { getDefaultNormalizer } from '@testing-library/react';

function getButtonText(){
    return 'Click on me!';
}


//create a react component
const App = ()=> {               //instead of function u can type () =>
    const buttonText = {text: 'Back'};
    const style = {backgroundColor:'blue',color:'white'};
    //if u leave just return then div wont be executed safeside use brackets();
    //used " " for jsx   amd '' for npn-jsx       -----------myway
    return <div>                      
    <label className="label" htmlFor="name"> Enter name: </label>
    <input id="name" type="text"/>
    <button style={{backgroundColor:'green',color:'white'}}>
       {getButtonText()}                                         
    </button>
    <button style={style}>{buttonText.text} </button>
  </div>;        //jsx but looks like html
};



//Take react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);