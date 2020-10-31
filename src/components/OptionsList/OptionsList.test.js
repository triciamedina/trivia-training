import React from 'react';
import ReactDOM from 'react-dom';
import OptionsList from './OptionsList';

describe('OptionsList component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<OptionsList />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})