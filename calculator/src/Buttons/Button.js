import React from 'react'



const NewButton = (props) =>{

    return(
         <div>
             <table>
                 <tr>
                 <td>
                <button >{props.value[0]}</button>
               </td>
               <td> 
                <button >{props.value[1]}</button>
              </td>
              <td> 
                <button >{props.value[2]}</button>
              </td>
              <td> 
                <button >{props.value[3]}</button>
              </td>
                 </tr>    
              </table>      
          </div>      

    )

}

export default NewButton;