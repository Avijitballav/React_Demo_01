import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [displayname, setDisplayname] = useState('')

  return (
    <>
      

      <div>

        <p className="header_title">
          React Demo 01
        </p>
        <div className="card">
        <p>
        <input name="userName"
        value={name} 
        placeholder='Enter name'
        onChange={(e)=>{
          setName(e.target.value)
         
        }
        }/>
        </p>
      
        <button onClick={()=>{
            setDisplayname(name)
        }}>
         Get Name
        </button>
        </div>
        <p>
         Dispaly Name: {displayname}
        </p>
       
        
     


      </div>
    </>
  )
}

export default App
