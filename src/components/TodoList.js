import Todo from "./Todo";

const TodoList = ({todoList, setTodoList}) => {
    return (
        <div>
            {todoList.map( (todoItem) => (
                <Todo 
                todoItem={todoItem} 
                key={todoItem.id} 
                todoList={todoList} 
                setTodoList={setTodoList}>                    
                </Todo>) )
            }           
        </div>
    );
};

export default TodoList;