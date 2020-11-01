import React, { useState, useMemo } from 'react';

import AnswersList from '../AnswersList/AnswersList';
import { Button } from '../Utils/Utils';
import { useStateValue } from '../../state';
import TriviaQuestionsService from '../../services/trivia-questions-service';
import { config } from '../../config';

function Question() {
    const [{ questions, questionCount }, dispatch] = useStateValue();
    const [ selectedAnswer, setSelectedAnswer ] = useState();
    const [ hasSubmittedAnswer, setHasSubmittedAnswer ] = useState(false);
    const [ error, setError ] = useState();

    const currentQuestion = questions[questionCount - 1];

    const answers = useMemo(
        () => TriviaQuestionsService.shuffle([...currentQuestion.incorrect, currentQuestion.correct]),
        [currentQuestion.incorrect, currentQuestion.correct]
    );

    const onAnswerChange = (selected) => {
        setSelectedAnswer(selected);
        setError('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedAnswer && selectedAnswer.length) {
            const result = currentQuestion.correct === selectedAnswer ? 'correct' : 'incorrect';

            setHasSubmittedAnswer(true);

            dispatch({
                type: 'handleSubmitAnswer',
                newScore: { answer: selectedAnswer, result: result }
            });
        } else {
            setError('Please select an option.');
        }
    }

    const handleNext = (e) => {
        e.preventDefault();

        setSelectedAnswer('');
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
                <AnswersList 
                    answers={answers}
                    selectedAnswer={selectedAnswer}
                    onAnswerChange={onAnswerChange}
                    hasSubmittedAnswer={hasSubmittedAnswer}
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