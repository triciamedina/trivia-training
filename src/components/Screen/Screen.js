import React from 'react';

import Start from '../Start/Start';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import Results from '../Results/Results';

import { useStateValue } from '../../state';

function Screen() {
    const [{ currentScreen }] = useStateValue(); 
    
    return (
        <section>
            {currentScreen === 'start' && <Start />}
            {currentScreen === 'question' && <Question />}
            {currentScreen === 'answer' && <Answer />}
            {currentScreen === 'results' && <Results />}
        </section>
    )
};

export default Screen;