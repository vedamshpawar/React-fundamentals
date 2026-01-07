
// import Counter from "./UserComponent";

import { useRef } from "react";

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

// function App(){
//   const [name, setName] = useState("")
//   const [password, setPassword] = useState("")
//   const [email, setEmail] = useState("")
//   return(
//     <div>
//       <h2>Controller component</h2>
//       <form action="" method="get">
//         <input type="text" value={name} placeholder="Enter a name" onChange={(event)=>setName(event.target.value)}/>
//         <br /><br />
//         <input type="password" value={password} placeholder="Enter a password" onChange={(event)=>setPassword(event.target.value)}/>
//         <br /><br />
//         <input type="email" value={email} placeholder="Enter a Email" onChange={(event)=>setEmail(event.target.value)}/>
//         <br /><br />
//         <button>submit</button>
//         <button onClick={()=>{setName("");setPassword("");setEmail("")}}>clear</button>

//         <h3>{name}</h3>
//         <h3>{password}</h3>
//         <h3>{email}</h3>
//       </form>
//       <Skills />
//     </div>
//   );
// }

// export default App


// function App(){
  // const userData = [
  //   {
  //     "id":1,
  //     "name":"srinath",
  //     "age": 23,
  //     "email":"srinath@test.com"
  //   },
  //   {
  //     "id":2,
  //     "name":"ravi",
  //     "age": 25,
  //     "email":"ravi@test.com"
  //   },
  //   {
  //     "id":3,
  //     "name":"srikanth",
  //     "age": 23,
  //     "email":"srikanth@test.com"
  //   }
  // ]
  // return(
  //   <div>
  //     <h2>jsx using map function </h2>
  //     <table border="1">
  //       <thead>
  //         <tr>
  //           <td>id</td>
  //           <td>name</td>
  //           <td>age</td>
  //           <td>email</td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //             {
  //               userData.map((user)=>{
  //                 return(
  //                   <tr key={user.id}>
  //                   <td>{user.id}</td>
  //                   <td>{user.name}</td>
  //                   <td>{user.age}</td>
  //                   <td>{user.email}</td>
  //                 </tr>
  //                 );
  //               })
  //             }
  //       </tbody>
  //     </table>
  //   </div>
  // );

  // return(
  //   <div>
     {/* <h2>Reuse Component in loop</h2>

     {
      userData.map((user)=>{
        return(
          <div key={user.id}>
            <User user={user}/>
          </div>
        );
        
      })
     } */}
//      <CounterFunc count={count} data={data} />
//     </div>
//   );
// }

// function App(){
//   const Heading = styled.h1`
//     color:orange;
//     border: 1px solid green;
    
//   `
//   return( 
//     <div>
//       <h1>this is styled component use</h1>
//       <Heading>Hello World</Heading>
//     </div>
//   );
// };


// function App(){
//   const inputRef = useRef(null)
//   const inputHandler=()=>{
//     console.log(inputRef);
//     inputRef.current.focus();
//     inputRef.current.style.color='red';
//     inputRef.current.placeholder="Enter password"

//   };

//   return(
//     <>

//       <h1>useRef hook</h1>
//       <input ref={inputRef} type="text" placeholder="Enter user name" />
//       <button onClick={inputHandler}>submit</button>


//     </>
//   );
// };


// export default App; 


function App(){
  const handleSubmit = async() =>{
    await new Promise(res =>setTimeout(res, 2000))
    console.log("submit")
  };

function CustomerForm(){
  const { pending } = useFormStatus();
  console.log(pending);
  return(
    <>
    <form action={handleSubmit}>
      <input type="text" placeholder="Enter user name"/>
      <br /><br />
      <input type="text" placeholder="Enter Password" />
      <br /><br />
      <button disabled={pending}>{pending ? 'Submitting': 'submit'}</button>
    </form>
    </>
  );
}

  return(
    <>
    <h2>useFormState using form subimission</h2>
    <form action={handleSubmit}>
      <input type="text" placeholder="Enter user name"/>
      <br /><br />
      <input type="text" placeholder="Enter Password" />
      <br /><br />
      <button>Submit</button>
    </form>
    </>
  );
}

export default App;