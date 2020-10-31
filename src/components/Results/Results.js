import React from 'react';

import { Button } from '../Utils/Utils';
import { useStateValue } from '../../state';

function Results() {
    const [, dispatch] = useStateValue();

    const handleRestart = () => {
        dispatch({
            type: 'updateCurrentScreen',
            newScreen: 'question'
        });
    }

    const handleExit = () => {
        dispatch({
            type: 'updateCurrentScreen',
            newScreen: 'start'
        });
    }

    return(
        <section>
            <h1>Final score</h1>
            <p>You scored 5/10!</p>
            <Button onClick={handleRestart}>Try again</Button>
            <Button onClick={handleExit}>Exit</Button>
        </section>
    )
}

export default Results;