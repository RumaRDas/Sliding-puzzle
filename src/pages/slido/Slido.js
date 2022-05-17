import React from 'react'
import SlidoTable from '../../component/slido/SlidoTable'
import './style.css'

const Slido = () => {
  return (
    <>
      <div className="row slido-H-style">
        <h3>Slido</h3>
      </div>
      <div className="row slidoStyle">
        <SlidoTable />
      </div>
    </>
  )
}

export default Slido