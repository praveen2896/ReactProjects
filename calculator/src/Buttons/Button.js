import React from 'react'



const NewButton = (props) =>{

    return(
         <div>
             <table>
                 <tr>
                 <td>
                <button onClick={props.onclick}>{props.value} </button>
               </td>
               </tr>
              </table>      
          </div>      

    )

}

export default NewButton;