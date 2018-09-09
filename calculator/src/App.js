import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBoxes/InputBox'
import NewButton from './Buttons/Button'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      row:['C','√','x²','/'],
      row1:[7,8,9,'*'],
      row2:[4,5,6,'-'],
      row3:[1,2,3,'+'],
      row4:['±',0,'.','='],
      placeholder:"enter your number",
      number1:"",
      number2:"",
      number3:0
    }   
    
  } 
 
  
  render() {
    return (
      <div className="App">
        <h1>hi i am calculator component</h1>
        <br/>
        <table>
            <tr>
              <td> <InputBox class="input1" number="Number1" placeholder="Number1" value={this.state.number1}></InputBox></td>
              <td> <InputBox class="input1" number="Number2" placeholder="Number2" value={this.state.number2}></InputBox></td>
            </tr>
            <br/>
            <tr>
              <td colSpan="2"> <InputBox number="Total  " value={this.state.number3}></InputBox> </td>
              </tr>
         </table>
         
        <br/>
        <div  class="container">
            <NewButton value={this.state.row}  ></NewButton>
            <NewButton value={this.state.row1} ></NewButton>
            <NewButton value={this.state.row2} ></NewButton>
            <NewButton value={this.state.row3} ></NewButton>
            <NewButton value={this.state.row4} ></NewButton>
        </div>
      </div>
    );
  }
}

export default App;
