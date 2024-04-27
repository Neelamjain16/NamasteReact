import React from 'react'
import ReactDOM from 'react-dom/client'

const heading=React.createElement('h1',{id:'heading'},'this is heading from react 🐱‍🚀 nacho nacho ');
console.log(heading)//this is a react element (it will be an object)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)

