




                    //which element  //attributes   //what content yoou want inside element
const heading=React.createElement('h1',{id:'heading'},'this is heading from react');
console.log(heading)//this is a react element (it will be an object)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)


//how to create nested structure using react
{/* <div>
    <div>
        <h1>this is a heaidng inside div inside div </h1>
        </div>
</div> */}


const parent =React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},React.createElement('h1',{id:'heading'},'this is a heaidng inside div inside div')))
console.log(parent)
root.render(parent)


//how to create sibling structure using react
{/*      <div>
         <div>
        <h1>this is a heaidng inside div inside div </h1>
        <h1>this is second heaidng inside div inside div </h1>
        </div>
        </div> 
*/}
//as third aruguent is where we put children ,if we have to give more than one element there,we can pass it as an array

const parent2=React.createElement('div',{id:'parent2'},React.createElement('div',{id:'chiild'},
[React.createElement('h1',{},'i am first h1 tag'),React.createElement('h1',{},'i am second h1 tag')]
))

root.render(parent2)


//create this
{/*      <div>
         <div>
        <h1>this is a heaidng inside div inside div </h1>
        <h1>this is second heaidng inside div inside div </h1>
        </div>
         <div>
        <h1>this is a heaidng inside div inside div </h1>
        <h1>this is second heaidng inside div inside div </h1>
        </div>
        </div> 
*/}

const parent3=React.createElement('div',{id:'parent2'},
[React.createElement('div',{id:'chiild'},
[React.createElement('h1',{},'i am first h1 tag'),React.createElement('h1',{},'i am second h1 tag')]
),React.createElement('div',{id:'chiild2'},
[React.createElement('h1',{},'i am first h1 tag'),React.createElement('h1',{},'i am second h1 tag')]
)])

root.render(parent3)