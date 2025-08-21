import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos';

function App() {
  return (
    <div>
      <CreateTodo />
      <Todos todos={[
        {
          title:"ACC",
          description:"Need to write exam",
          completed:false
        },{
          title:"cn",
          description:"need to fix shedule",
          completed:true
        }
      ]}></Todos>
    </div>
  )
}

export default App
