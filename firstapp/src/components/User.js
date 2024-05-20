import { useState } from "react";

const User=({name})=>{
  const [count,setCount]=useState(0);
  const [count2,setCount2]=useState(2);
  return  <div className="user-card">
    <h2>count {count}</h2>
    <h2>count {count2}</h2>
       <h2>Name:{name}</h2>
       <h3>Location:Dehradun</h3>
       <h2>Contact:neelamrghjain@gmail.com</h2>
    </div>
}

export default User;