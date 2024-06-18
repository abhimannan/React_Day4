/*s
// propS
//FILE NAME:App.js
import Student from './Student';
function App() {

  return (
    <div className="App">
   <Student name="abhi" age={10} ispresent="true"/>
    </div>
      
  );
}
export default App;
// Student.js file
import React from 'react'

const Student = (props) => {
  return (  
   <table>
    <tr> 
     <td>Name</td>
     <td>{props.name}</td>
    </tr>
    <tr>
     <td>Age</td>
     <td>{props.age}</td>
    </tr>
    <tr>
     <td>ispresent</td>
     <td>{props.ispresent}</td>
    </tr>
   </table>
  )
}

export default Student




*/

