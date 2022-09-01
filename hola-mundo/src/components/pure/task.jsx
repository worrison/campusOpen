import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({task}) => {

    function taskLevelBadge(){
            switch (task.level) {
                case LEVELS.NORMAL:
                    return(
                        <h6 className='mb-0'>
                            <span className='badge bg-primary'>{task.level}</span>
                        </h6>
                    )
                
                    case LEVELS.URGENT:
                        return(
                            <h6 className='mb-0'>
                                <span className='badge bg-warning'>{task.level}</span>
                            </h6>
                        )
                    
                        case LEVELS.BLOCKING:
                        return(
                            <h6 className='mb-0'>
                                <span className='badge bg-danger'>{task.level}</span>
                            </h6>
                        )
                default:
                    break;
            }
    }
   /**
    * funcion que devuelve icono y color del icono segun el estado de la tarea
    */
    function taskIconCompleted(){
        if(task.completed){
            return <i className='bi-toggle-on' style={ {color:'green'}}></i>
        }else{
            return <i className='bi-toggle-off'  style={ {color:'grey'}}></i>
        }
    }
    return (
        <tr className='fw-normal'>
            <th>
                    <span className='ms-2'>{task.name}</span>
            </th>

            <td>
                <span className='align-middle'>{task.description}</span>
            </td>

            <td>
                {/* Sustituir por un badge */}
                {/* <span className='align-middle'>{}</span> */}
                {/* Ejecutamos funcion */}
                {taskLevelBadge()}
            </td>

            <td>
                 {/* Sustituir por iconos */}
                 {/* {  task.completed ?
                    (<i className='bi-toggle-on' style={ {color:'green'}}></i>) :
                    (<i className='bi-toggle-off'  style={ {color:'grey'}}></i>) 
                 } */}
                 {taskIconCompleted()}
                
                <i className='bi-trash' style={ {color: 'tomato'}}></i>
            </td>
        </tr>

    );
};


TaskComponent.propTypes = {
        task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
