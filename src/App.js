import './App.css';
import { SayHello } from './Components/SayHelloFunctionProps';
import SecondComponent from './Components/SayHelloClassProps';
import StateComponent from './Components/SayHelloClassState';
import CounterComponent from './Components/CountValue';
import EventHandling from './Components/eventHandling';
import ParentComponent from './Components/ParentComponent';
import ConditionComponent from './Components/ConditionComponent';
import ListRendering from './ListRendering';
import SimpleForm from './Components/SimpleForm';
import RefsDemo from './Components/RefsDemo';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App">  
    <Timer />
    {/* <RefsDemo /> */}
    {/* <SimpleForm /> */}

    {/* <ListRendering />
    <ParentComponent />
    <ConditionComponent /> */}
      {/* <SayHello name='Michal' secondName='Sidor'>
        <p>Tutaj mamy childer paragraf</p>
      </SayHello>
      <SayHello name='Piotr' secondName='Kaczmarek'>
        <button type='submit' value='accept'></button>
      </SayHello>

      <EventHandling /> */}

      {/* <SecondComponent name='Michal' secondName='Sidor'>
        <p>Tutaj mamy childer paragraf</p>
      </SecondComponent>
      <SecondComponent name='Piotr' secondName='Kaczmarek'>
        <button type='submit' value='accept'></button>
      </SecondComponent>

      <h1>Ustawianie stanu</h1>
      <StateComponent />
      
      <CounterComponent /> */}
      
    </div>
  );
}

export default App;
