import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Componente propio Greeting*/}
        {/* {<TaskListComponent></TaskListComponent>} */}
        {/**Gestion de eventos */}
        {/* {<Father></Father>} */}
        {/* <OptionalRender></OptionalRender> */}
       {/* <LoginFormik></LoginFormik> */}
       
       <RegisterFormik></RegisterFormik>
  
 
        {/* <ContactListComponent></ContactListComponent> */}
      </header>
    </div>
  );
}

export default App;
