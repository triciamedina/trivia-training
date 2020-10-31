import React from 'react';

function OptionsList({ options = [] }) {
    return (
        <div>
            {options.map((option, index) => (
                <label key={index}>
                    <input 
                        type='radio'
                        id={`option${index}`}
                        name='trivia'
                        value={option}
                        required
                    />
                    {option}
                </label>
            ))}
        </div>
    )
}

export default OptionsList;