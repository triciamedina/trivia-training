import React from 'react';

import { StateProvider } from '../state';
import Screen from '../components/Screen/Screen';

function App() {

  const initialState = {
    currentScreen: 'start',
    scoreCard: [],
    questionCount: 0,
    questions: [],
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'handleTriviaStart': 
        return {
          ...state,
          currentScreen: 'question',
          questionCount: 1,
          questions: action.newQuestions
        }
      case 'handleSubmitAnswer': 
        return {
          ...state,
          scoreCard: [...state.scoreCard, action.newScore]
        }
      case 'handleNextQuestion':
        return {
          ...state,
          questionCount: state.questionCount + 1
        }
      case 'showResults':
        return {
          ...state,
          currentScreen: 'results'
        }
      case 'updateCurrentScreen':
        return {
          ...state,
          currentScreen: action.newScreen
        }
      default:
        return state;
    };
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <main className='App'>
        <Screen />
      </main>
    </StateProvider>
  );
}

export default App;