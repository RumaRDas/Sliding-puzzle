import React, { useState } from 'react'
import { toast } from 'react-toastify'
import './style.css'
import 'react-toastify/dist/ReactToastify.css'

export const BlankoForm = ({
  values,
  setValues,
  inputIndex1,
  inputIndex2,
  inputIndex3,
  matchLetters,
}) => {
  //console.log("VALUES"+values)
  const handleChange = (e) => {
    const value = e.target.value
    const position = e.target.name
    // console.log('value is ' + value)
    // console.log('POSITION :' + position)
    matchLetters[position] = value
  }

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
        onChange={handleChange}
      ></input>
    )
  })

  const handleSubmit = (e) => {
    e.preventDefault()
 //console.log('matchLettersNew', matchLetters)
    if (JSON.stringify(matchLetters) === JSON.stringify(values)) {
      toast.success('Correct', { position: toast.POSITION.TOP_CENTER })
    } else {
      toast.error(`Try again`, { position: toast.POSITION.TOP_CENTER })
      return
    }
  }
  const resetGame = (e) => {
    // console.log('RESETVALUE:', values)
  }
  return (
    <div className="content-wrap">
      <form>
        <div className="row blanko-H-style">
          <h3>Blanko</h3>
        </div>
        <div className="row blanko-stye">
          {selectInput}
          <div className="row btn-div">
            <button
              className="button-style"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button className="button-style" type="submit" onClick={resetGame}>
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
