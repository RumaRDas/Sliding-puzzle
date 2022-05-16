import React, { useState } from 'react'
import { strs } from '../../data/blanko'
import { BlankoForm } from '../../component/form/blankForm/BlankoForm'
import './style.css'

const Blanko = () => {
  const word = [...strs]
  console.log(word)
  //getting Random word
  const singleWord = word[Math.floor(Math.random() * word.length)]
  // console.log('Getting Single Word : ', singleWord)

  //  getting each character from ramdom word
  const singleCharacter = Array.from(singleWord)
  // console.log('Character: ', singleCharacter)
  //slicing the character
  const matchCharacters = singleCharacter.slice(3)
  // console.log('matchCharacter :', matchCharacters)
  //declearing state
  const [values, setValues] = useState(singleCharacter)

 

  return (
<BlankoForm values={values}/>
  )
}

export default Blanko
