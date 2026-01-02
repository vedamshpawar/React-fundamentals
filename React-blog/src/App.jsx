import { useState } from "react";
import Counter from "./UserComponent";

function App(){
  const [fruit, setFruit] = useState("Apple");
  
  const handleFruit =()=>{
    setFruit("Banana")
  }

  return(
    <div>
      <h2>state management using hooks</h2>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>change the Fruit</button>
      <Counter />
    </div>
  )
}

export default App