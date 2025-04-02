import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const insituteName="complete java classes , by kunal sir"
  const stu={
    studentid:101,
    studentName:"Rinku A Salunke",
    studentAge:22,
    studentQualification:"bcs"
  };
function handleEvent(arg){
    alert("welcome to react" +arg);
}
  return (
<>
<h1>Welcome To CJC</h1>
<button>Click Me</button>
<h1>{insituteName.toLowerCase()}</h1>
<h1>Addition:{10+20}</h1>
<h4>Student Id:{stu.studentid}</h4>
<h4>Student name:{stu.studentName}</h4>
<h4>Student age:{stu.studentAge}</h4>
<h4>Student qualification:{stu.studentQualification}</h4>
<button onClick={()=>handleEvent("helllo")}>Click me</button>
</>)
  }
  

export default App
