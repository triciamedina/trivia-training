import React from 'react';
import ReactDOM from 'react-dom';
import AnswerScreen from './AnswerScreen';

describe('AnswerScreen component',() => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AnswerScreen />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})