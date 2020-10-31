import React from 'react';

import { Button } from '../Utils/Utils';

function ResultScreen() {
    return(
        <section>
            <h1>Final score</h1>
            <p>You scored 5/10!</p>
            <Button>Try again</Button>
            <Button>Exit</Button>
        </section>
    )
}

export default ResultScreen;