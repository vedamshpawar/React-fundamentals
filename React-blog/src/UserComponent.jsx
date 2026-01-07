import { useEffect, useState } from "react"


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

// const Counter = () =>{
//     const [count, setCount] = useState(0)
//     return(
//         <div>
//             <h1>Counter: {count}</h1>
//             <button onClick={()=>setCount(count + 1)}>Count</button>
//         </div>
//     )
// }

// export default Counter

// function User(props){
//     return(
//         <div>
//             <h2>name: {props.name},Role: {props.Role}</h2>
//         </div>
//     );
// }
// function Res(props){
//     return(
//         <div>
//             <h2>name:{props.name}, Role:{props.Role}</h2>
//         </div>
//     );
// }
// export default Res

// const User = ({user})=>{
//     return(
//         <div style={{
//             border:"1px solid green",
//             padding:"10px",
//             margin:"10px",
//             width:"400px",
//             borderRadius:"10px",
//         }}>
//             <h2>name :{user.name}</h2>
//             <h2>age :{user.age}</h2>
//             <h2>email :{user.email}</h2>
//         </div>
//     );
// }

// export default User


// function CounterFunc({count, data}){

//     const [count, setCount] = useState(0)
//     const [data, setData] = useState(0)

//     function counter(){
//         console.log('counting the count')
//     };

//     function callOnce(){
//         console.log('call for one time')
//     };

// useEffect(()=>{
//     counter();
// },[]);

// useEffect(()=>{
//     callOnce();
// },[count]);
//     return(
//         <div>
//             <h2>this is useEffect</h2>
//             <button onClick={()=>setCount(count + 1)}>count {count}</button>
//             <button onClick={()=>setData(data + 1)}>data {data}</button>
//         </div>
//     );
// }

// export default CounterFunc;