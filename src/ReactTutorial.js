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

function ReactTutorial() {
  return (
    <div className="App">
        {/* <NormalWay/> */}
        <ReducerWay />
    </div>
  )
}

export default ReactTutorial
