import React from 'react';

import TriviaQuestionsService from '../../services/trivia-questions-service';
import { Button } from '../Utils/Utils';
import { useStateValue } from '../../state';

function Start() {
    const [, dispatch] = useStateValue();

    const handleStart = () => {
        const questions = TriviaQuestionsService.getTriviaQuestions();
        dispatch({
            type: 'handleTriviaStart',
            newQuestions: questions
        });
    }

    return (
        <section>
            <h1>Tandem for 400!</h1>
            <p>Do you have what it takes to be crowned trivia champion? Train to improve your trivia knowledge.</p>
            <Button onClick={handleStart}>Let's go!</Button>
        </section>
    )
}

export default Start;