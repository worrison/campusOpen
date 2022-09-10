import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Componente propio Greeting*/}
        {/* {<TaskListComponent></TaskListComponent>} */}
        {/**Gestion de eventos */}
        {/* {<Father></Father>} */}
        <OptionalRender></OptionalRender>
  
 
        {/* <ContactListComponent></ContactListComponent> */}
      </header>
    </div>
  );
}

export default App;
