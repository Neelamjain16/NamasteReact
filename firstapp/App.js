const heading=React.createElement('h1',{id:'heading'},'this is heading from react');
console.log(heading)//this is a react element (it will be an object)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)