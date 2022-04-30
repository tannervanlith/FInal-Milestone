import React from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import DisplayTask from './DisplayTask';
import dataSource from './dataSource';

const ListTask = (props) => {
    const navigate = useNavigate();
    const handleEdit = (id, userId) => {
        navigate('/edit/', {state:{taskid:id, userId:userId}});

    };

    console.log('props taskList', props);
    const tasks = props.taskList.map((task) => {
        console.log(task);
        return (
            <Card
                key={task.taskLoaderID}
                taskId={task.taskLoaderID}
                taskClass={task.class}
                taskName={task.task}
                taskDueDate={task.dueDate}
                userId={task.userID}
                buttonDelete='Delete'
                onClick={props.deleteFunction}
                buttonEdit='Edit'
                handleEdit={handleEdit}
            />
        );
    });
    return <div className='container' >{tasks}</div>
};

export default ListTask;