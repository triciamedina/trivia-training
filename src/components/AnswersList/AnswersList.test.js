import React from 'react';
import ReactDOM from 'react-dom';
import AnswersList from './AnswersList';

describe('AnswersList component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AnswersList />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})