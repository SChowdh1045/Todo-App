import styles from '../styles.module.css';
import shortid from 'shortid';

const Form = ({todo, setTodo, todoList, setTodoList}) => {
    const handleChange = (event) => {
        setTodo(event.target.value);        
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(todo === ""){
            alert("Please enter a Todo item.");
        }
        else{
            // The 3 dots before todoList (...) just means to take all the current values within todoList
            // Then I'm adding the newly added todo item after clicking submit
            // I have to put all that in a list as todoList is, well, a list
            setTodoList( [...todoList, {name:todo, id:shortid.generate()}] ); 
            setTodo("");
        }        
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Add a Todo item"
                value={todo} 
                onChange={handleChange} 
                className={styles.todoFormInput} 
                type="text" 
                 /> 

                <br />

                <button type='submit' className={styles.todoFormBtn}>Add</button>
            </form>
        </div>
    );
};

export default Form;