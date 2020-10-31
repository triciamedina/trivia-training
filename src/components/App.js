import React from 'react';

import { StateProvider } from '../state';
import Screen from '../components/Screen/Screen';

function App() {

  const initialState = {
    currentScreen: 'start',
    scoreCard: [],
    questionCount: 0,
    questions: []
  }

  const reducer = (state, action) => {
    switch (action.type) {
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