import React, { useState, useEffect } from 'react';

import OptionsList from '../OptionsList/OptionsList';
import { Button } from '../Utils/Utils';
import { useStateValue } from '../../state';
import { arrayShuffle } from '../../lib/shuffle';
import { config } from '../../config';

function Question() {
    const [{ questions, questionCount }, dispatch] = useStateValue();
    const [ selectedOption, setSelectedOption ] = useState();
    const [ hasSubmittedAnswer, setHasSubmittedAnswer ] = useState(false);
    const [ error, setError ] = useState();

    const currentQuestion = questions[questionCount - 1];

    let options = [...currentQuestion.incorrect, currentQuestion.correct];

    useEffect(() => {
        arrayShuffle(options);
    });

    const onOptionChange = (selected) => {
        setSelectedOption(selected);
        setError('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedOption) {
            const result = currentQuestion.correct === selectedOption ? 'correct' : 'incorrect';

            setHasSubmittedAnswer(true);

            dispatch({
                type: 'handleSubmitAnswer',
                newScore: { answer: selectedOption, result: result }
            });
        } else {
            setError('Please select an option.');
        }
    }

    const handleNext = (e) => {
        e.preventDefault();

        setSelectedOption('');
        setHasSubmittedAnswer(false);
        setError('');

        if (questionCount >= config.MAX_QUESTIONS) {
            dispatch({
                type: 'showResults'
            });
        } else {
            dispatch({
                type: 'handleNextQuestion'
            });
        }
    }

    const renderSubmitButton = () => {
        return (
            <Button onClick={e => handleSubmit(e)}>Submit</Button>
        )
    }

    const renderNextButton = () => {
        return (
            <Button onClick={e => handleNext(e)}>Next</Button>
        )
    }

    return (
        <section>
            <h1>
                Question {questionCount}
            </h1>
            <form>
                <p>{currentQuestion.question}</p>
                <OptionsList 
                    options={options}
                    selectedOption={selectedOption}
                    onOptionChange={onOptionChange}
                />
                <div>
                    {hasSubmittedAnswer ? renderNextButton() : renderSubmitButton() }
                    {error}
                </div>
            </form>
        </section>
    )
}

export default Question;