import React from 'react';

import OptionsList from '../OptionsList/OptionsList';
import { Button } from '../Utils/Utils';
import { useStateValue } from '../../state';

function Question() {
    const [, dispatch] = useStateValue();

    const options = ['Tandem', 'Burger Shack', 'Extraordinary Humans', 'Devmynd'];

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({
            type: 'updateCurrentScreen',
            newScreen: 'answer'
        });
    }

    return (
        <section>
            <h1>Question 1</h1>
            <form>
                <p>What was Tandem's previous name?</p>
                <OptionsList options={options}/>
                <div>
                    <Button 
                        type='submit'
                        onClick={e => handleSubmit(e)}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default Question;