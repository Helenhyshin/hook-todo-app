import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo"

function TodoList({todos, removeTodo, toggleTodos}){
    return(
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                        <Todo id={todo.id} task={todo.task} key={todo.id} completed={todo.completed} removeTodo={removeTodo} toggleTodos={toggleTodos}/>
                        <Divider />
                    </>
                ))}
            </List>
        </Paper>
    )

}

export default TodoList;