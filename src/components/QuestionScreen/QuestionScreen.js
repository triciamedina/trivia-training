import React from 'react';

import OptionsList from '../OptionsList/OptionsList';
import { Button } from '../Utils/Utils';

function QuestionScreen() {
    const options = ['Tandem', 'Burger Shack', 'Extraordinary Humans', 'Devmynd']
    return (
        <section>
            <h1>Question 1</h1>
            <form>
                <p>What was Tandem's previous name?</p>
                <OptionsList options={options}/>
                <div>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </section>
    )
}

export default QuestionScreen;