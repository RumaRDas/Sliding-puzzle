import React, { useState } from 'react'
import { toast } from 'react-toastify'
import './style.css'
import 'react-toastify/dist/ReactToastify.css'

export const BlankoForm = ({
  values,
  inputIndex1,
  inputIndex2,
  inputIndex3,
  matchLetters,
}) => {


  const selectInput = values.map((value, index) => {
    return (
      <input
        key={index}
        type="text"
        className="box-style "
        maxLength={1}
        name={index}
        value={values.index}
        placeholder={
          index === inputIndex1 ||
          index === inputIndex2 ||
          index === inputIndex3
            ? ''
            : value
        }
        disabled={
          index === inputIndex1 ||
          index === inputIndex2 ||
          index === inputIndex3
            ? false
            : true
        }
      ></input>
    )
  })

  const handleSubmit = (e) => {
    e.preventDefault(e)
    if (matchLetters === values) {
      toast.success('Correct', { position: toast.POSITION.TOP_CENTER })
    } else {
      toast.error(`Try again`, { position: toast.POSITION.TOP_CENTER })
      return
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="row blanko-H-style">
        <h3>Blanko</h3>
      </div>
      <div className="row blanko-stye">
        {selectInput}
        <div className="row btn-div">
          <button className="button-style" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
