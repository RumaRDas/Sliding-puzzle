import React, { useState } from 'react'
import { strs } from '../../data/blanko'
import './style.css'

const Blanko = () => {
  const word = [...strs]
  console.log(word)
  //getting Random word
  const singleWord = word[Math.floor(Math.random() * word.length)]
  // console.log('Getting Single Word : ', singleWord)

  //  getting each character from ramdom word
  const singleCharacter = Array.from(singleWord)
  // console.log('Character: ', eahCharacter)
  //slicing the character
  const matchCharacters = singleCharacter.slice(3)
  // console.log('matchCharacter :', matchCharacters)
  //declearing state
  const [values, setValues] = useState(singleCharacter)

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

export default Blanko
