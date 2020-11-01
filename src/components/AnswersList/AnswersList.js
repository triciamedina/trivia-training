import React from 'react';

function AnswersList({answers= [], onAnswerChange=()=>{}, selectedAnswer='', hasSubmittedAnswer=false }) {
    return (
        <div>
            {answers.map((option, index) => (
                <label key={index}>
                    <input 
                        type='radio'
                        id={`option${index}`}
                        name='trivia'
                        value={option}
                        onChange={e => onAnswerChange(e.target.value)}
                        checked={option === selectedAnswer ? true : false}
                        disabled={hasSubmittedAnswer ? true : false}
                        required
                    />
                    {option}
                </label>
            ))}
        </div>
    )
}

export default AnswersList;