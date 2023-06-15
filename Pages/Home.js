import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
 const navigation =  useNavigate()
 function NavigationHandler(){
  navigation('/About')

 }
  return (
    <div>
      <h3>Home Page</h3>
      <p>
        <button onClick={NavigationHandler}>About</button>
      </p>
    </div>
  )
}

export default Home