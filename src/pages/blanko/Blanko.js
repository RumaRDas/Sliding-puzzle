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
  const singleLetter = Array.from(singleWord)
  // console.log('Character: ', singleCharacter)

  //slicing the character
  const matchLetters = singleLetter.slice()
  //selecting the index of matchCharacters
  const inputIndex1 = 2
  const inputIndex2 = 5
  const inputIndex3 = 9

  matchLetters[inputIndex1] = ''
  matchLetters[inputIndex2] = ''
  matchLetters[inputIndex3] = ''

  //console.log('matchCharacter :', matchLetters)
  //declearing state
  const [values, setValues] = useState(singleLetter)

  //console.log('VALUES: ', values)

  return (
    <BlankoForm
      values={values}
      inputIndex1={inputIndex1}
      inputIndex2={inputIndex2}
      inputIndex3={inputIndex3}
      matchLetters={matchLetters}
    />
  )
}

export default Blanko
