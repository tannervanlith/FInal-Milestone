import React from 'react';

import ListTask from './ListTask'

const SearchTask = (props) => {
    console.log('props with update single task ', props);
    return (
        <div className='container'>

            <ListTask taskList={props.taskList} onClick={props.updateSingleTask} deleteFunction={props.deleteFunction}/>
        </div>
    );
};

export default SearchTask;