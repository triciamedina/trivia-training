import React from 'react';

import { Button } from '../Utils/Utils';
import { useStateValue } from '../../state';

function Start() {
    const [, dispatch] = useStateValue();

    const handleStart = () => {
        dispatch({
            type: 'updateCurrentScreen',
            newScreen: 'question'
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