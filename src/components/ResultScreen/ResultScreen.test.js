import React from 'react';
import ReactDOM from 'react-dom';
import ResultScreen from './ResultScreen';

describe('ResultScreen component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ResultScreen />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})