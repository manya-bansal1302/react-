//functional component
import { useState } from "react"

const User = (props) => {

  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(1);

  userEffect(() => {
    //API Calls
  },[]);

  // async function userData () {
  //   const data = await
  // }

  return <div className="user-card">
       <h1>Count = {count}</h1>
       <h1>Count2 = {count2}</h1>
       <h2>Name: {props.name}</h2>
       <h3>City: Rampura Phul</h3>
       <h3>Contact: 7843452786</h3>
  </div>
}

export default User