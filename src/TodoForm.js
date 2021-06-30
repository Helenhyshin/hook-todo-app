import React, {useState} from "react";
import Textfield from "@material-ui/core/Textfield";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState"


function TodoForm({ addTodo }){
    const [value, handleChange,reset] = useInputState("")
    


    return(
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form onSubmit={(evt)=>{
                evt.preventDefault();
                addTodo(value);
                reset();
            }}>
                <Textfield 
                    onChange={handleChange} 
                    value={value} 
                    margin ="normal" 
                    label="Add New Todo"
                    fullWidth
                ></Textfield>
            </form>
        </Paper>
    )
}

export default TodoForm;