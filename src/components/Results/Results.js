import React from 'react';

import { arrayShuffle } from '../../lib/shuffle';
import DATA from '../../Apprentice_TandemFor400_Data.json';
import { Button } from '../Utils/Utils';
import { useStateValue } from '../../state';

function Results() {
    const [{ scoreCard }, dispatch] = useStateValue();
    const correctAnswers = scoreCard.filter(answer => answer.result === 'correct').length;

    const handleRestart = () => {
        const questions = arrayShuffle(DATA);

        dispatch({
            type: 'handleRestart',
            newQuestions: questions
        });
    }

    const handleExit = () => {
        dispatch({
            type: 'handleExit'
        });
    }

    return(
        <section>
            <h1>Final score</h1>
            <p>You scored {correctAnswers}/10!</p>
            <Button onClick={handleRestart}>Try again</Button>
            <Button onClick={handleExit}>Exit</Button>
        </section>
    )
}

export default Results;