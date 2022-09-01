import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Componente propio Greeting*/}
        {<TaskListComponent></TaskListComponent>}
  
 
        {/* <ContactListComponent></ContactListComponent> */}
      </header>
    </div>
  );
}

export default App;
