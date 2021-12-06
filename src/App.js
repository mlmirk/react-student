import React from 'react';
import Students from './Students';
import studentArr from './studentData'
function App() {
  const students = studentArr.map((ele, index)=>{
    return(
    <Students
      name={ele.name}
      bio={ele.bio}
      scores={ele.scores}
      key={index}
      />
    )
  })
  console.log(students[0])
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
      {students}
      
    </div>
  );
}

export default App;
