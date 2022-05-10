import React from 'react'
import './style.css'
const Dashboard = () => {
  return (
    <div className="home_style">
      <div className="text1_style">Please choose an option from the navbar</div>
      <div className="text2_style">
        Games Won: {`x`} <button className="button1">Reset</button>
      </div>
    </div>
  )
}

export default Dashboard
