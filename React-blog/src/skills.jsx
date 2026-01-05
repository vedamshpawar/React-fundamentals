import { useState } from "react";

function Skills(){
    const [skills, setSkills] = useState([])

    const handlecheckbox = (event) =>{
        console.log(event.target.value, event.target.checked)
        if (event.target.checked){
            setSkills([...skills, event.target.value ])
        }else{
            setSkills([...skills.filter((item)=>item != event.target.value)])
        }
    }
    return(
        <div>
            <input type="checkbox" id="php" value="php" onChange={handlecheckbox} />
            <label htmlFor="php">php</label>
            <br />
            <br />
            <input onChange={handlecheckbox} type="checkbox" id="python" value="python"  />
            <label htmlFor="python">python</label>
            <br />
            <br />
            <input onChange={handlecheckbox} type="checkbox" id="java" value="java"  />
            <label htmlFor="java">java</label>
            <br />
            <br />
            <input onChange={handlecheckbox} type="checkbox" id="node" value="node"  />
            <label htmlFor="node">node</label>

        <h3>{skills.toString()}</h3>
        </div>
    );
}

export default Skills;