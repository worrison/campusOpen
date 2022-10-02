import React from 'react';
import { Navigate } from "react-router-dom";


const Tasklist = () => {
  let user  = false;
  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return (
        <div>
            <h1>tareas</h1>
            <p>tarea 1</p>
            <p>tarea 2</p>
            <p>tarea 3</p>
        </div>
  )
}

export default Tasklist;