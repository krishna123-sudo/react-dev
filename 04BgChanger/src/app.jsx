import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [color, setColor] = useState('olive')

  // function ChangeColor(color){
  //     setColor(color)
  // }

  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>setColor('red')}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor:"red"}}
            >Red</button>
             <button onClick={()=>setColor('green')}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
              style={{backgroundColor:"green"}}
            >green</button>
             <button onClick={()=>setColor('blue')}
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
              style={{backgroundColor:"blue"}}
            >blue</button>
          </div>
      </div>
   </div>
  )
}