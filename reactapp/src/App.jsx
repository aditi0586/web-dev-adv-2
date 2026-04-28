import React, { useState } from 'react'
import './App.css'
import Menu from './component/Menu'
import Article from './component/Article'
import Homepage from './component/Homepage'
import Profile from './component/Profile'

function App() {
  const[data,setData]=useState("Sample data")
  return (
    <>
      <User/>
      <Menu/>
      <Article data={data}/>
    </>
  )
}

export default App