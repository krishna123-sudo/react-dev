import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'; 


// const reactElement={
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children: 'click me to visit google'
// }

// function MyApp(){
//     return(
//         <div>
//             <h1>custom React App</h1>
//         </div>
//     )
// }

// const AnotherElement=(
//     <a href='https://google.com' target='_blank'>visit my page</a>
// )

const AreactElement=React.createElement(
    'a',
    {href:"https://google.com",target:"_blank"},
    'click to visit my page'
)

createRoot(document.getElementById('root')).render(
 
    <App />
  
)
