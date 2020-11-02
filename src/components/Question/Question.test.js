import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Question from './Question';
import { StateProvider } from '../../state';

const testQuestion = [
    {
         "question": "Test question 1",
         "incorrect": ["Incorrect answer 1", "Incorrect answer 2", "Incorrect answer 3"],
         "correct": "Correct answer"
     },
]

const mockState = {
    currentScreen: 'start',
    scoreCard: [],
    questionCount: 1,
    questions: testQuestion,
};
  
describe('Question component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StateProvider initialState={mockState}><Question /></StateProvider>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders question content', () => {
        const tree = renderer
            .create(<StateProvider initialState={mockState}><Question /></StateProvider>)
            .root;

        const question = tree.findByType('p');
        expect(question.props.children).toEqual('Test question 1')
    });

    it('renders a list of answers with the correct number of choices', () => {
        const testAnswerList = [...testQuestion[0].incorrect, testQuestion[0].correct]

        const tree = renderer
            .create(<StateProvider initialState={mockState}><Question /></StateProvider>)
            .root;
        
        const answersList = tree.findAllByType('input');

        expect(answersList.length).toEqual(testAnswerList.length);
    })

    it('renders a submit button by default', () => {
        const tree = renderer
            .create(<StateProvider initialState={mockState}><Question /></StateProvider>)
            .root;

        const button = tree.findByType('button');
        expect(button.props.children).toEqual('Submit')
    });
});