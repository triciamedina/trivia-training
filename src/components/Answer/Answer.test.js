import ReactDOM from 'react-dom';

// Resetting modules before each test
beforeEach(() => {
    jest.resetModules();
});
  
// Takes the context data to test, or uses defaults
const getAnswerWithContext = (context = {}) => {
    
    // Mock the module being used in component
    jest.doMock('../../state.js', () => {
        return {
                UseStateValue: {
                Consumer: (props) => props.children(context)
            }
        }
    });
    
    // Re-require after calling jest.doMock.
    // return the updated module that now includes the mocked context
    return require('./Answer').Answer;
};
  
describe('Answer component', () => {
    it('renders without crashing', () => {
        const Screen = getAnswerWithContext();
        const div = document.createElement('div');
        ReactDOM.render(Screen, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});