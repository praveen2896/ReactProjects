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
      rows:['*','-','+'],
      placeholder:"enter your number",
      number1:"",
      number2:"",
      number3:0,
      temp1:0,
      temp2:0
    }  

    this.handleChange=this.handleChange.bind(this)
    this.handle2Change=this.handle2Change.bind(this)
    
  } 

  handleChange(event) {
    this.setState(
      {number1: event.target.value
      
      }
      );
    }
  handle2Change(event)
  {
    this.setState(
      {
        number2: event.target.value
      }
    )
  }
 
  Add = () =>{
    if(this.state.number1 && this.state.number2)
    {
        this.setState({
           number3:Number(this.state.number1)+Number(this.state.number2)
        })
    }
    else{
      alert("please fill all the fields")
    }
  }

  clear = () =>
  {
    this.setState({
      number2:"",
      number1:"",
      number3:0
   })
  }

  subtract = () =>
  {
    if(this.state.number1 && this.state.number2)
    {
        this.setState({
           number3:Number(this.state.number1)-Number(this.state.number2)
        })
    }
    else{
      alert("please fill all the fields")
    } 
  }

  multiply = () =>
  {
    if(this.state.number1 && this.state.number2)
    {
        this.setState({
           number3:Number(this.state.number1)*Number(this.state.number2)
        })
    }
    else{
      alert("please fill all the fields")
    } 
  }

  divide = () =>
  {
    
    if(this.state.number1 && this.state.number2)
    {
        this.setState({
           number3:Number(this.state.number1)/Number(this.state.number2)
        })
    }
    else{
      alert("please fill all the fields")
    } 
  }

  square = () =>
  {
    if(this.state.number1 && !this.state.number2)
    { 
      this.setState({
          number3:Number(this.state.number1)*Number(this.state.number1)
      })
    }
    else if(this.state.number2 && !this.state.number1)
    {
      this.setState({
        number3:Number(this.state.number2)*Number(this.state.number2)
      })
    }
    else{
      this.setState({
        temp1:''+Number(this.state.number1)*Number(this.state.number1),
        temp2:''+Number(this.state.number2)*Number(this.state.number2),
        number3:this.state.temp1+'/'+this.state.temp2
      })
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>hi i am calculator component</h1>
        <br/>
    
        <table >
            <tr>
              <td> <InputBox className="input1" number="Number1" placeholder="Number1" value={this.state.number1}  change={this.handleChange}></InputBox></td>
              <td> <InputBox className="input1" number="Number2" placeholder="Number2" value={this.state.number2}  change={this.handle2Change}></InputBox></td>
            </tr>
            <br/>
            <tr>
              <td colSpan="2"> <InputBox number="Total  " value={this.state.number3} ></InputBox> </td>
            </tr>
         </table>
         
        <br/>
        <div  className="container" >
        <table>
          <tbody>
          <tr>
            <td>
            <NewButton value={this.state.row[0]} onclick={this.clear} ></NewButton>
            </td>
            <td>
            <NewButton value={this.state.row[2]}  onclick={this.square}></NewButton>
            </td>
            <td>
            <NewButton value={this.state.row[3]} onclick={this.divide} ></NewButton>
            </td>
            
              </tr>
            <tr> 
            <td>
            <NewButton value={this.state.rows[0]} onclick={this.multiply}></NewButton>
            </td> 
              <td>
            <NewButton value={this.state.rows[1]} onclick={this.subtract}></NewButton>
            </td>
            <td>
            <NewButton value={this.state.rows[2]} onclick={this.Add}></NewButton>
            </td>
            </tr>
          </tbody>

          </table>  
        </div>
      </div>
    );
  }
}

export default App;
