import React from 'react';

import { arrayShuffle } from '../../lib/shuffle';
import DATA from '../../Apprentice_TandemFor400_Data.json';
import { Button } from '../Utils/Utils';
import { useStateValue } from '../../state';

function Start() {
    const [, dispatch] = useStateValue();

    const handleStart = () => {
        const questions = arrayShuffle(DATA);
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