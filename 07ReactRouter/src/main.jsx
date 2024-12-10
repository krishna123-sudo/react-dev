import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../src/component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/contact.jsx'
// import User from './component/User/User.jsx'
import GitHub,{githubInfoLoader} from './component/GitHub/GitHub.jsx'
import Skill from './component/Skill/Skill.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
   <Route Path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      {/* <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />} />
      </Route> */}
      <Route loader={githubInfoLoader} path='GitHub' element={<GitHub />}/>
      <Route path='Skill' element={<Skill />}/>
      <Route path='*' element={<div>Not Found</div>} />
      
   </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)
