import './App.css'
import { useState } from 'react';


//http://localhost:5174/

//Bonus: se pide crear un formulario que cuando se envíe cambie el nombre:

function App() {
    //Aquí tu código
    const [name, setName] = useState('Sofía');
    const [newName, setNewName] = useState('');
   
    const changeName = (event) => {
      event.preventDefault();
        //console.log(event.target.newName.value);
  
       if (newName !== ''){
        setName(newName);
        setNewName(''); 
      }
    }
   
    return (
       <div>
        <form onSubmit={changeName}>
            <h2>Teacher Name: {name}</h2>
            <input type="text" name="newName" value={newName} onChange={(event) => setNewName(event.target.value)}  placeholder="Add a name"/>
            <button type="submit">Add</button>
        </form>
       </div>
     );

}


export default App;

/*
// Ejercicio: se pide crear lista de nombres de tus profesores 
//y que cada vez que cliques en uno de ellos cambie el nombre del profesor

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

*/

