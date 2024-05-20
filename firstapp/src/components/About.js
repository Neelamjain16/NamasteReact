import User from "./User"
import UserClass from "./UserClass"
import React from "react"
// class About extends React.Component{

// constructor(props){
//     super(props)
//     console.log('constructor')
// }
//     render(){
//         console.log('render')
//         return(
//         <div>
//         About class component
//         <User name={"Neelam Jain function component"}/>
//         <UserClass name={"Neelam jain class component"} location={'Chennai '}/>
//     </div>
//         )
//     }
// }

const About=()=>{
return (
    <div>
        About
        <User name={"Neelam Jain function component"}/>
        {/* <UserClass name={"Neelam jain class component"} location={'Chennai '}/> */}
    </div>
)
}

export default About