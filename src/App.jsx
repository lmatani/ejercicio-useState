import './App.css'
import { useState } from 'react';

function App() {
 //Aquí tu código
 const [name, setName] = useState('Sofía');
 const [newName, setNewName] = useState('');

 const teachers = ['Data', 'Reyes', 'Yolanda'];

 const listItems = teachers.map(teacher => <li onClick={() => setName(teacher)}>{teacher}</li>);

 return (
    <div>
      <h2>Teacher Name: {name}</h2>
      <ul>{listItems}</ul>
    </div>
  );

}

export default App
