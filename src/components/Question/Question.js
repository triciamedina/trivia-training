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
    const [ result, setResult ] = useState();
    const [ error, setError ] = useState();

    const currentQuestion = questions[questionCount - 1];

    const answers = useMemo(
        () => TriviaQuestionsService.shuffle([...currentQuestion.incorrect, currentQuestion.correct]),
        [currentQuestion.incorrect, currentQuestion.correct]
    );

    function onAnswerChange(selected) {
        setSelectedAnswer(selected);
        setError('');
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (selectedAnswer && selectedAnswer.length) {
            setHasSubmittedAnswer(true);
            setResult(currentQuestion.correct === selectedAnswer ? 'correct' : 'incorrect');

            dispatch({
                type: 'handleSubmitAnswer',
                newScore: { answer: selectedAnswer, result: result }
            });
        } else {
            setError('Please select an option.');
        }
    }

    function handleNext(e) {
        e.preventDefault();

        setSelectedAnswer('');
        setHasSubmittedAnswer(false);
        setError('');
        setResult('');

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
                    onAnswerChange={(selected) => onAnswerChange(selected)}
                    hasSubmittedAnswer={hasSubmittedAnswer}
                    result={result}
                    correctAnswer={currentQuestion.correct}
                />
                <div>
                    {hasSubmittedAnswer
                        ? <Button onClick={(e) => handleNext(e)}>Next</Button> 
                        : <Button onClick={(e) => handleSubmit(e)}>Submit</Button> 
                    }
                    {error}
                </div>
            </form>
        </section>
    )
}

export default Question;