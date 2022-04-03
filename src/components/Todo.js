import styles from '../styles.module.css';

const Todo = ({todoItem, todoList, setTodoList}) => {
    const deleteTodoItem = () => {
        setTodoList( todoList.filter( (item) => (item.id !== todoItem.id) ) );
    };

    return (
        <div className={styles.todoItemWrapper}>
            <h3 className={styles.todoItem}>{todoItem.name}</h3>
            <button onClick={deleteTodoItem} className={styles.todoDeleteItem}>Done</button>
        </div>
    );
};

export default Todo;