import React from 'react'
import './App.css';
import Board from './TicTacToe/Board';
import BasicFunction from './TutorialFromSide/RespondingToEvents';
import Quiz from './TutorialFromSide/Quiz';
import Form from './TutorialFromSide/SharingStateBetweenComponents/Form';
import Main from './TutorialFromSide/ExtractingStateLoginIntoReducer/ReducerOne';
import ReducerTwo from './TutorialFromSide/ExtractingStateLoginIntoReducer/ReducerWay';
import NormalWay from './TutorialFromSide/ExtractingStateLoginIntoReducer/NormalWay';
import ReducerWay from './TutorialFromSide/ExtractingStateLoginIntoReducer/ReducerWay';
import ComponentOne from './TutorialFromSide/PassingDataDeeplyWithContext/Strona';
import UseRefTest from './EscapeHatcges/ReferencingValuesWithRefs/UseRefTest';
import ManipulatinRefTest from './EscapeHatcges/ManipulatingTheDomWithRefs/ManipulatinRefTest';
import EffectTutorial from './EscapeHatcges/SynchronizingWithEffects/EffectTutorial';

function ReactTutorial() {
  return (
    <div className="App">
      <EffectTutorial/>
    </div>
  )
}

export default ReactTutorial
