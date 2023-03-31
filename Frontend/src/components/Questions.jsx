import React from 'react'
import Question from './Question'
const Questions = ({questions,reset}) => {
  return (
    <div className='questions'>
        {questions.map((question,index) => 
            <Question question={question} key={index}/>
        )
        }
    </div>
  )
}

export default Questions