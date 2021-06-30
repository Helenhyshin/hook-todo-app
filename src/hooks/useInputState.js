import {useState} from "react";
// question: is below format acceptable? export default initialVal
export default initialVal => {
    const [value, setValue] = useState(initialVal);
    const handleChange = e => {
        setValue(e.target.value);
    };
    const reset = ()=> {
        setValue("");
    }
    return [value, handleChange, reset];
}

