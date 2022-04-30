import React from 'react';
import ReactDOM from 'react-dom';

const Card = (props) => {

    return (
        <div className='card' style={{ width: '18rem' }}>
            <div className='card-body'>
                <h5 className='card-title'>Task: {props.taskName}</h5>
                <p className='card-text'>Class: {props.taskClass}</p>
                <p className='card-text'>DueDate: {props.taskDueDate}</p>
                <button 
                    onClick={() => props.onClick(props.taskId)}
                    className='btn btn-primary'
                    style={{marginRight:'10px'}}
                >
                    Delete
                </button>
                <button 
                    onClick={() => props.handleEdit(props.taskId, props.userId)}
                    className='btn btn-primary'
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default Card;