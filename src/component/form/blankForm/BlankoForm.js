import React, { useState } from 'react'
import './style.css'

export const BlankoForm = ({ values }) => {
  const selectInput = values.map((value, index) => {
    return (
      <input
        type="text"
        className="box-style "
        maxLength={1}
        name={index}
        value={value.index}
        placeholder={value}
      ></input>
    )
  })
  return (
    <form className="blanko_form">
      <div className="row blanko-H-style">
        <h3>Blanko</h3>
      </div>
      <div className="row blanko-stye">
        {selectInput}
        <div className="row btn-div">
          <button className="button-style">Submit</button>

          <button className="button1-style">Reset</button>
        </div>
      </div>
    </form>
  )
}
