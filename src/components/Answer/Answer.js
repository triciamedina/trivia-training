import React from 'react';

import { Button } from '../Utils/Utils';
import { useStateValue } from '../../state';

function Answer() {
    const [, dispatch] = useStateValue();

    const handleNext = () => {
        dispatch({
            type: 'updateCurrentScreen',
            newScreen: 'results'
        });
    }

    return (
        <section>
            <h1>That's right!</h1>
            <p>What was Tandem previous name?</p>
            <p>The answer is: Devmynd</p>
            <Button onClick={handleNext}>Next</Button>
        </section>
    )
}

export default Answer;