import React, { useState } from 'react';

const Form = props => {

    const [myTask, setMyTask] = useState("");

    const onSubmitHandler = e => {
        // Prevents the page from refreshing
        e.preventDefault();
        props.newTask(myTask);
        setMyTask("");

        return null
    }

    return(
        <div className="col-6">
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="myTask"> Create New Task: </label>
                    <input type="text" name="mytask" className="form-control" value={ myTask } onChange={e => setMyTask( e.target.value )}/>
                </div>
                <br/>
                <input type="submit" value=" Add " className="btn btn-secondary" />
            </form>
            <br/>
        </div>
    );
}

export default Form;