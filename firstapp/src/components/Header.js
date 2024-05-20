import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/contants"
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus"
const Header=()=>{
   const [btnName,setBtnName]=useState('Login')
   const onlineStatus=useOnlineStatus();
//    console.log(onlineStatus)
   console.log('header rendered');

   useEffect(()=>{
    console.log('use effect gets called')
   },[btnName])
    return (
        <div className="header">
           <div className="logo-container">
            <img src={LOGO_URL} className='logo'/>
           </div>
           <div className="nav-items">
                   <ul>
                    <li>Online status :{onlineStatus?"🟢":"🔴"}</li>
                   <li><Link to='/'>Home</Link></li>  
                    {/* <li>About Us</li> */}
                    <li><Link to='/about'>About</Link></li>  
                    <li><Link to='/contact'>Contact Us</Link></li>
                     <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{btnName==='Login'?setBtnName('Logout'):setBtnName('Login')}}>{ btnName}</button>
                   </ul>
           </div>
        </div>
    )
}

export default Header