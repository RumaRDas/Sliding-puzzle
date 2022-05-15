import React from 'react'
import { strs } from '../../data/blanko'
import './style.css'

const Blanko = () => {
  const word = [...strs]
  console.log(word)
  //getting Random word
  const singleWord = word[Math.floor(Math.random() * word.length)]
  console.log('Getting Single Word : ', singleWord)

  //  getting each character from ramdom word
  const eahCharacter = Array.from(singleWord)
  console.log('Character: ', eahCharacter)

  return (
    <form>
      <div className="row blanko-H-style">
        <h3>Blanko</h3>
      </div>
      <div className="row blanko-stye">
        <input type="text" className="box-style " maxLength={1}></input>
        <div className="btn-div">
          <button className="button-style">Reset</button>
        </div>
      </div>
    </form>
  )
}

export default Blanko