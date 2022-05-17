import React from 'react'
import './style.css'
const SlidoTable = () => {
  return (
    <>
      <table id="board" className="styleTable" align="center">
        <tr id="row_1">
          <td id="cell1" className="tdStyle pic1"></td>
          <td id="cell2" className="tdStyle pic2"></td>
          <td id="cell3" className="tdStyle pic3"></td>
        </tr>
        <tr id="row_2">
          <td id="cell4" className="tdStyle pic4"></td>
          <td id="cell5" className="tdStyle pic5"></td>
          <td id="cell6" className="tdStyle pic6"></td>
        </tr>
        <tr id="row_3">
          <td id="cell7" className="tdStyle pic7"></td>
          <td id="cell8" className="tdStyle pic8"></td>
          <td id="cell9" className="tdStyle pic9"></td>
        </tr>
      </table>
    </>
  )
}

export default SlidoTable