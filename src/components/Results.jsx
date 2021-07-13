import React, { useState } from 'react';

const complete = {
    textDecoration: "line-through"
}

const incomplete = {
    textDecoration: "none"
}

const Results = props => {


    return (
        <div> { props.myTask.map((item, i) => {

            return (
                <>
                    <h2 style={item.done ? complete : incomplete} > {item.task} </h2>

                    <input type="checkbox" checked={item.done} onChange={e => { props.completeTask({ task: item.task, done: e.target.checked }, i) }} >
                    </input>
                    <span>   </span>
                    <button className="btn btn-primary" onClick={() => props.deleteTask(i)} > Delete My Task. </button>

                </>
            )
        })}
        </div>
    )
}

export default Results;

