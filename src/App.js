import {useState} from 'react';
import styles from './styles.module.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    return (
        <div className="App">
            <Header></Header>            
            <div className={styles.todoAppWrapper}>                
                
                {/* The LHS is just an arbritrary variable name (could be anything)
                    The RHS values are the actual use of states  */}
                <Form 
                todo={todo} 
                setTodo={setTodo} 
                todoList={todoList} 
                setTodoList={setTodoList}>
                </Form>

                <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
            </div>
        </div>
    );
}

export default App;
