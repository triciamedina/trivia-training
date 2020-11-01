import React from 'react';

function OptionsList({ options= [], onOptionChange=()=>{}, selectedOption='' }) {
    return (
        <div>
            {options.map((option, index) => (
                <label key={index}>
                    <input 
                        type='radio'
                        id={`option${index}`}
                        name='trivia'
                        value={option}
                        onChange={e => onOptionChange(e.target.value)}
                        checked={option === selectedOption ? true : false}
                        required
                    />
                    {option}
                </label>
            ))}
        </div>
    )
}

export default OptionsList;