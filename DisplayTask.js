import React from 'react';
import Card from './Card';

const DisplayTask = (props) => {
    console.log('new log ' + props.taskName);
    return (
        <Card>
        <div className='container'>
            <h2>Task Details for {props.taskName}</h2>
            <div className='row'>
                <div className='col col-sm-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>{props.taskName}</h5>
                            <p className='card-text'>{props.taskClass}</p>
                            <div className='list-group'>
                                <li>Task Details</li>
                            </div>
                            <a href='/#' className='btn btn-primary'>
                                Edit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Card>
    );
};

export default DisplayTask;