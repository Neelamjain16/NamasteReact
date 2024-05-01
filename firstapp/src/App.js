// import React from 'react'
// import ReactDOM from 'react-dom/client'

// const heading=React.createElement('h1',{id:'heading'},'this is heading from react 🐱‍🚀 nacho nacho ');
// console.log(heading)//this is a react element (it will be an object)
// root.render(heading)

// const  jsxheading= (<h1 id='heading'>
//     this is heading using jsx
//     </h1>);

// console.log(jsxheading)
// root.render(jsxheading)
// const root=ReactDOM.createRoot(document.getElementById('root'));

// const TitleComponent=()=>(
//     <div id='headingcomponent'>
//         <h1> TitleComponent</h1>
//     </div>
// )

// const number=1000;
// const span=<span>this is an span tag </span>
// const element=
// (
// <h1> {span} this is an element</h1>
// )

// const HeadingComponent=()=>(
//     <div id='headingcomponent'>
//         <TitleComponent/>
//         {TitleComponent()}
//         <TitleComponent></TitleComponent>
//         {/* all these three ways we can put component  */}
//         {element}
//         {number}
//         {console.log('fghjj')}
//         <h1>hey theree</h1>
//     </div>
// )
// root.render(<HeadingComponent/>)


//food order websiteeee

//header
//-logo
//-nav items

//body
//-search
//-restaurantcontainer
//-restaurantcard
//-img -name of res -star rating ,cuisines,delivery time

//footer
//-copyright
//-links
//-address
//-contact



import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from '../src/components/Header.js'
import Body from '../src/components/Body.js'


const AppLayout=()=>{
    return (
   <div className="app">
       <Header/>
       <Body/>
   </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)