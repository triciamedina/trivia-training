import React from 'react';

function AnswersList({answers= [], onAnswerChange=()=>{}, selectedAnswer='', hasSubmittedAnswer=false, result='', correctAnswer='' }) {
    return (
        <div>
            {answers.map((option, index) => (
                <div key={index}>
                    <label >
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
                    {(hasSubmittedAnswer && option === selectedAnswer && result === 'incorrect') && 'That\'s incorrect'}
                    {(hasSubmittedAnswer && option === selectedAnswer && result === 'correct') && 'That\'s right!'}
                    {(hasSubmittedAnswer && option !== selectedAnswer && result === 'incorrect' && option === correctAnswer) && 'This is the correct answer'}
                </div>
            ))}
        </div>
    )
}

export default AnswersList;