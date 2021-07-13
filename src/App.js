import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import Results from './components/Results';
import { useState } from 'react';

const App = () => {
    const [myTask, setMyTask] = useState([]);

    const addTask = task => {
        const newTask = { task: task, done: false }
        setMyTask([...myTask, newTask])

        return null
    }

    const completeTask = ( task, i ) => {
      const newTasks = [ ...myTask ]
      newTasks[ i ] = task
      setMyTask( newTasks )
  
      return null
    }

    const deleteTask = (i) => {
      const newArray = myTask.filter(task => task !== myTask[i])
      setMyTask( newArray )
    }

    return (
        <div className="container">
            <h1 className="jumbotron"> My Task Manager </h1>
            <div>
                <Form newTask={ addTask } />
                <Results myTask= { myTask } completeTask = { completeTask } deleteTask = { deleteTask } />
            </div>
        </div>
    );
}

export default App;