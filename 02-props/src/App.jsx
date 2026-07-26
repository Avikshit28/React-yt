import React from 'react'
import Card from "./components/cards";

const App = () => {
  return (
    <div>
      <div className="card">
      <Card user="Avikshit" age={20}/>
      <Card user="Aman" age={21}/>
      </div>
    </div>
  )
}

export default App
