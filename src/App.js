import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let id = 0;

  const oldTask = [
    {id: id++ , name:'Wash clothes'},
    {id: id++, name:'Withdraw Money'},
    {id: id++ , name:'Buy Groceries'}
  ];
  const [task,setTask] = useState(oldTask);
  const [newtask, setnewTask] = useState('');
  
  return (
    <div className="App">
      <p>
        <ul>
          {
            task.map(({id, name}) => 
              <li key={id}>{name}
          <button 
              onClick = {() => 
              setTask(
                task.filter((task)=> task.id !== id))
          }
          >Delete
          </button>
              </li>
            )
          }
        </ul>
      </p>
      <p>
      <input type="text" placeholder='Enter a task' 
      onChange=
      {(e) =>
        setnewTask(e.target.value)
      } />
      <input type="button" value="Submit" onClick = {(e) =>
        setTask(
          task.concat({
            id: id++,
            name: newtask.trim()
          })
        )
      } />
      </p>
    </div>
  );
}

export default App;
