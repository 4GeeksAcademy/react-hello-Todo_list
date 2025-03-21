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
        <div className='box'>
            <h1>Todo App</h1>
           <form onSubmit={(e)=> addTodo(e)}>
           <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Agregar una tarea...'
            />
           </form>
           
            <ul className='lista'>
                {todos.map((todo, index) => (
                    <li className='item-list' key={index}>
                        {todo}
                        <button className='btn-eliminar' onClick={() => deleteTodo(index)}> <i class="fas fa-trash-alt" /></button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp