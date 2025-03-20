import React, { useState } from 'react';

// Funcion para almacenar tareas
function TodoApp() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    //Funcion para agregar una tarea
    const addTodo = (e) => {
       e.preventDefault()
       if(inputValue.trim()==''){
        return
       } 
        setTodos(todos.concat([inputValue]));
        console.log('tareas',todos)
        setInputValue('');


    };
    // Funcion para eliminar una tarea
    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i)=>i !== index));
    };

    return (
        <div>
            <h1>Todo App</h1>
           <form onSubmit={(e)=> addTodo(e)}>
           <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Agregar una tarea'
            />
           </form>
           
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <i class="fas fa-trash-alt"
                        />
                        <button onClick={() => deleteTodo(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp