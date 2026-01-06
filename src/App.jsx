import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './Portfolio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <Portfolio />
      {/* Add other components/routes here if needed */}
    </div>
    </>
  )
}

export default App
