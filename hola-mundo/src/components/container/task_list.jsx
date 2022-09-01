import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Example','Default description1',true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example','Default description2',false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example','Default description3',true, LEVELS.BLOCKING);

      // Estado del componente
      const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
      const [loading, setLoading] = useState(true);
  
      // Control del ciclo de vida del componente
      useEffect(() => {
          console.log('Task State has been modified');
          setTimeout(() => {
              setLoading(false);
          }, 2000);
          return () => {
              console.log('TaskList component is going to unmount...')
          }
      }, [tasks])

   /* const  changeState = (id)=> {
        console.log('TODO: Cambiar estado de una tarea');
    }*/

    return (
        
                <div className='col-12'>
                        <div className='card' >
                                            {/* Card Header */}
                                        <div className='card-header'>
                                            <h5>Your Tasks:
                                            </h5>
                                        </div>
                                        {/* Card Body */}
                                        <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position:'relative',  height:'400px'}}>
                                                <table>
                                                        <thead>
                                                                <tr>
                                                                    <th scope='col'>Title</th>
                                                                    <th scope='col'>Description</th>
                                                                    <th scope='col'>Priority</th>
                                                                    <th scope='col'>Actions</th>
                                                                </tr>
                                                        </thead>

                                                        <tbody>
                                                            {/* Iterar sobre tareas */}

                                                            {
                                                                tasks.map((task, index)=> {
                                                                    return (
                                                                        <TaskComponent 
                                                                            key={index} 
                                                                            task={task}>
                                                                        </TaskComponent>
                                                                    )
                                                                })
                                                            }
                                                            
                                                        </tbody>
                                                    
                                                </table>
                                        </div>
                                        {/* fin cardBody */}
                                       <TaskForm></TaskForm>
                        </div>
                        {/* Fin card */}
                    
               
                {/* Aplicar For / Map para renderizar una lista*/}
               
        </div>
    );
};

export default TaskListComponent;
