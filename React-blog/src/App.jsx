import { useState } from "react";
import Res from "./UserComponent";
import Skills from "./skills";
// import Counter from "./UserComponent";

// function App(){
//   const [fruit, setFruit] = useState("Apple");
  
//   const handleFruit =()=>{
//     setFruit("Banana")
//   }

//   return(
//     <div>
//       <h2>state management using hooks</h2>
//       <h2>{fruit}</h2>
//       <button onClick={handleFruit}>change the Fruit</button>
//       <Counter />
//     </div>
//   )
// }
// function App(){
//   const[display, setDisplay] = useState(true)
//   const show =()=>{
//     setDisplay("Hello")
//   }
//   return(
//     <div>
//       <h2>Toggle hide and display</h2>
//       <h2>{display}</h2>
//       <button onClick={show}>Toggle</button>
//     </div>
//   )
// }

// function App(){
//   const [val, setVal] = useState("")
//   return(
//     <div>
//       <h2>Using input fields to give name</h2>
//       <input type="text" value={val} placeholder="Enter ur name" onChange={(event)=>setVal(event.target.value)}/>
//       <h2>{val}</h2>
//       <button onChange={()=>setVal("")}>clear</button>
//     </div>
//   )
// }
// export default App

function App(){
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  return(
    <div>
      <h2>Controller component</h2>
      <form action="" method="get">
        <input type="text" value={name} placeholder="Enter a name" onChange={(event)=>setName(event.target.value)}/>
        <br /><br />
        <input type="password" value={password} placeholder="Enter a password" onChange={(event)=>setPassword(event.target.value)}/>
        <br /><br />
        <input type="email" value={email} placeholder="Enter a Email" onChange={(event)=>setEmail(event.target.value)}/>
        <br /><br />
        <button>submit</button>
        <button onClick={()=>{setName("");setPassword("");setEmail("")}}>clear</button>

        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>
      <Skills />
    </div>
  );
}

export default App