import { useState } from "react"


// function Login(){
//     return(
//         <div>
//             <h2>user login successfull!!!...</h2>
//         </div>
//     )
// }


// export default Login

// export function Profile(){
//     const name = "saikrishna"
//     let x = 10;
//     let y = 100;

//     return(
//         <div>
//             <h2>User Profile added...</h2>
//             <h2>{name}</h2>
//             <h2>{x + y}</h2>
//         </div>
//     )
// }

// export function Logout(){
//     return(
//         <div>
//             <h2>logout successfully done...</h2>
//         </div>
//     )
// };

// function User(){
//     function callFun(){
//         alert("funtion called")
//     }
//     return(
//         <div>
//         <h2>this is Event handling</h2>
//         <button onClick={callFun}>submit</button>
//         </div>
//     )
// };

// export const UserKey = "$*^**$&##";

// export default User

const Counter = () =>{
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>setCount(count + 1)}>Count</button>
        </div>
    )
}

export default Counter