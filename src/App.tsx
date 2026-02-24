import { useState } from 'react'
import './App.css'
import { Input } from './components/Input'
import { ShopCard } from './components/ShopCard'

function App() {
  const [myName, setMyName] = useState('Hjalti')
  const [email, setEmail] = useState('')

  return (
    <>
      // Búa til card og setja inn props(data)
      // búa til component button
      <h2>hello world</h2>
      <div>myName</div>
      <div>{myName}</div>
      <div>
       <Input value={myName} onChange={(e) => setMyName(e.target.value)} /> 
       <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        //færa þennan
        <button onClick={() => alert("submitted:" +email)}>Submit</button>
      </div>

     {/* Card */}
     <ShopCard />
     <ShopCard />
    </>
  )
}

export default App
