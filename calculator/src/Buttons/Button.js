import React from 'react'



const NewButton = (props) =>{

    return(
         <div>
             <table>
               <tbody>
                 <tr>
                 <td>
                <button onClick={props.onclick}>{props.value} </button>
               </td>
               </tr>
               </tbody>
              </table>      
          </div>      

    )

}

export default NewButton;