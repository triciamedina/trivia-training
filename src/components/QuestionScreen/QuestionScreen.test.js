import React from 'react';
import ReactDOM from 'react-dom';
import QuestionScreen from './QuestionScreen';

describe('QuestionScreen component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<QuestionScreen />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})