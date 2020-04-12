import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faFrown } from '@fortawesome/free-solid-svg-icons';

const Form = (props) => {

    const [ error, setError ] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const inputValue = e.target.elements.todo.value.trim();

                if ( inputValue === "" ) {
                    setError("Please Write Valid Todo to add ...!!!");
                } else if ( props.not_done_todos.includes(inputValue.toLowerCase()) ) {
                    setError("Already Added before, Please Write New one to add ...!!!");
                } else {
                    props.hanldeOnSubmit(inputValue);
                    setError("");
                }
                e.target.elements.todo.value = "";

            }}
        >
            <input 
                type="text" 
                name="todo" 
                placeholder="Write Todo Here... " 
                autoComplete="off"
            />
            <button>
                <FontAwesomeIcon icon={faPlusCircle} />
            </button>
            {error &&   <p className="err_msg">
                            {error} &nbsp;
                            <FontAwesomeIcon icon={faFrown} fixedWidth />
                        </p>}
        </form>
    );
};

export default Form;