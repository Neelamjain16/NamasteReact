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



import React, { lazy ,Suspense} from 'react'
import ReactDOM from 'react-dom/client'

import Header from '../src/components/Header.js'
import Body from '../src/components/Body.js'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Error from './components/Error.js'
import RestaurantMenu from './components/RestaurantMenu.js'
// import Grocery from './components/Grocery.js'



const Grocery=lazy(()=>import('./components/Grocery.js'))
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
             <Outlet/>


            {/* is path=/ we should have body   */}
            {/* <Body /> */}
           {/* is path=/about we should have about   */}
             {/* <About/> */}
           {/* is path=/contact we should have body   */}
            {/* <Contact/> */}
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[{
            path:'/',
            element:<Body/>
        },
            {
                path: "/about",
                element: <About />
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path: "/grocery",
                element:(<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense> )
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            },
        ],
        errorElement:<Error/>
    },
   
    
   
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)