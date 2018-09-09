import React from 'react'
import './InputBox.css'

const InputBox = (props) =>{
    return(
        <div>
            <label for={props.number}>{props.number}</label>
            <input  class="number" type="text" placeholderText={props.placeholder} value={props.value}></input>
        </div>    
    )
}

export default InputBox;