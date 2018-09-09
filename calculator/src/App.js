import React, { Component } from 'react';
import './App.css';
import Button from'./Buttons/clickbuttons'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hi i am class component</h1>
        <div >
          <table>
            <tr>
              <td>
                <Button value="123"></Button>
               </td>
               <td> 
                <Button value="123"></Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
