import React from 'react';

const Todo = (props) => {
    return (
        <div
            onClick={() => props.toggleItem(props.item.id)}
            className={`item${props.item.completed ? ' completed' : ''}`}
        >
            <ul><li className='todoItem'><strong>{props.item.task}</strong></li></ul>
        </div>
    );
};

export default Todo;