import React from 'react';

import Start from '../Start/Start';
import Question from '../Question/Question';
import Results from '../Results/Results';

import { useStateValue } from '../../state';

function Screen() {
    const [{ currentScreen }] = useStateValue(); 
    
    return (
        <section>
            {currentScreen === 'start' && <Start />}
            {currentScreen === 'question' && <Question />}
            {currentScreen === 'results' && <Results />}
        </section>
    )
};

export default Screen;