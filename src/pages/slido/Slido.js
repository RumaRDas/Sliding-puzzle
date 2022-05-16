import React from 'react'
import './style.css'

const Slido = () => {
  return (
    <>
      <div className="row slido-H-style">
        <h3>Slido</h3>
      </div>
      <div className="row slidoStyle">
        <table className="styleTable" align="center">
          <tr>
            <td id="cell1" className="tdStyle"></td>
            <td id="cell2" className="tdStyle"></td>
            <td id="cell3" className="tdStyle"></td>
          </tr>
          <tr>
            <td id="cell4" className="tdStyle"></td>
            <td id="cell5" className="tdStyle"></td>
            <td id="cell6" className="tdStyle"></td>
          </tr>
          <tr>
            <td id="cell6" className="tdStyle"></td>
            <td id="cell7" className="tdStyle"></td>
            <td id="cell8" className="tdStyle"></td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Slido