import React, { useState }  from 'react';
import dataSource from './dataSource';
import { useLocation, useNavigate } from 'react-router-dom';

const EditTask = (props) => {

    let task = {
        taskLoaderID: '',
        class: '',
        task: '',
        dueDate: '',
        userID: '',
    };

    let newTaskCreation = true;

    if (props.task) {
        task = props.task;
        newTaskCreation = false;
    }

    const [taskName,setTaskName] = useState('');
    const [taskClass,setTaskClass] = useState('');
    const [taskDueDate,setTaskDueDate] = useState('');
    const navigate = useNavigate('');
    const location= useLocation();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        console.log("submit");
        if (location.state != null){
            console.log(location.state.userId);
            const editedTask = {
                taskLoaderID: location.state.taskid,
                class: taskClass,
                task: taskName,
                dueDate: taskDueDate,
                userID: location.state.userId, 
            };
            console.log(editedTask);
            saveTask(editedTask);
        }
        else{
            const newTask = {
                class: taskClass,
                task: taskName,
                dueDate: taskDueDate,
                userID: 18, 
            };
            saveTask(newTask);
        }
    };

    const saveTask = async (task) => {
        let response;
        if (newTaskCreation)
            response = await dataSource.post('/tasks', task);
        else
            response = await dataSource.put('/tasks', task);  
        console.log(response);
        console.log(response.data);
        props.onEditTask(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    };
    const updateTaskName= (event) => {
        setTaskName(event.target.value);
    };
    const updateTaskClass= (event) => {
        setTaskClass(event.target.value);
    };
    const updateDueDate= (event) => {
        setTaskDueDate(event.target.value);
    };


    return (
        <div className='container'>
            <form>
                <h1>{newTaskCreation ? "Create New: " : "Edit"} Task</h1>
                <div className="form-group">
                    <label htmlFor="taskName">Task Name</label>
                    <input type="text" className="form-control" id="taskName" placeholder="Enter Name" value={taskName} onChange={updateTaskName} />
                    <label htmlFor="taskClass">Task Class</label>
                    <input type="text" className="form-control" id="taskClass" placeholder="Enter Class" value={taskClass} onChange={updateTaskClass} />
                    <label htmlFor="taskDueDate">Task DueDate</label>
                    <input type="text" className="form-control" id="taskDueDate" placeholder="Enter DueDate" value={taskDueDate} onChange={updateDueDate} />
                </div>
                <div align="center">
                    <button type="button" className="btn btn-light" onClick={handleCancel}>Cancel</button>
                    <button type="button" className="btn btn-light" onClick={handleFormSubmit}>Edit</button>
                </div>
            </form>
        </div>
    );
};

export default EditTask;
