import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Example } from './components/Example/Example'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Example title='viva el agua'/>
      <Example/>

      <h1>Hello bitch</h1>
      <p>sergio es diosgi</p>
    </>
  )
}

export default App
