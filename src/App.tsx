import { useState } from 'react'
import AppLayout from './components/layout/AppLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AppLayout />
    </div>
  )
}

export default App
