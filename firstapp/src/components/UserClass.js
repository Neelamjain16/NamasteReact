import React from 'react'

class UserClass extends React.Component{

  constructor(props){
    super(props)
    // console.log(props)
    this.state={
        count:0,
        count2:1,
    };
  }
    render(){
    const {name,location}=this.props
    const {count,count2}=this.state
        return  <div className="user-card">
            <h1>count {count}</h1>
            <h1>count2 {count2}</h1>
            <button onClick={()=>{
              this.setState({
                count:this.state.count+1,
                count2:this.state.count2+1
              })
            }}>Count Increase</button>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h2>Contact:neelamrghjain@gmail.com</h2>
     </div>
    }
}

export default UserClass;