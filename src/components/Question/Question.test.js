import ReactDOM from 'react-dom';

// Resetting modules before each test
beforeEach(() => {
    jest.resetModules();
});
  
// Takes the context data to test, or uses defaults
const getQuestionWithContext = (context = {}) => {
    
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
    return require('./Question').Question;
};
  
describe('Question component', () => {
    it('renders without crashing', () => {
        const Screen = getQuestionWithContext();
        const div = document.createElement('div');
        ReactDOM.render(Screen, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});