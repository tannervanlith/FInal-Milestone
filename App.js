import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SearchTask from './SearchTask';
import NavBar from './NavBar';
import EditTask from './EditTask';
import DisplayTask from './DisplayTask';
import './App.css';
import dataSource from './dataSource';

const App = (props) => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [currentlySelectedTaskId, setCurrentlySelectedTaskId] = useState(0);
  let refresh = false;

  const handleDelete = async (id) => {
    const response = await dataSource.delete('/tasks/' + id );
    loadTasks();
  };

  const loadTasks = async () => {
    const response = await dataSource.get('/tasks');
    setTaskList(response.data);
  };

  // Setup intialization callback
  useEffect(() => {
    // Update the task list
    loadTasks();
  }, [refresh]);

  const updateSearchResults = (phrase) => {
    console.log('phrase is ' + phrase);
    setSearchPhrase(phrase);
  };

  const updateSingleTask = (id, navigate, uri) => {
    console.log('Update Single Task = ', id);
    console.log('Update Single Task = ', navigate);
    var indexNumber = 0;
    // for (var i = 0; i < taskList.length; ++i) {
    //   if (taskList[i].id === id) indexNumber = i;
    // }
    setCurrentlySelectedTaskId(indexNumber);
    let path = uri + indexNumber;
    console.log('path', path);
    navigate(path);
  };

  console.log('taskList', taskList);
  const renderedList = taskList.filter((task) => {
    if (
      task.name === searchPhrase ||
      searchPhrase === ''
    ) {
      return true;
    }
    return false;
  });

  console.log('renderList', renderedList);
  

  const onEditTask = (navigate) => {
    loadTasks();
    navigate("/");
  };
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <SearchTask
                deleteFunction={handleDelete}
                updateSearchResults={updateSearchResults}
                taskList={renderedList}
                updateSingleTask={updateSingleTask}
              />
            }
          />
          <Route exact path='/new' element={<EditTask onEditTask={onEditTask} />} />
          <Route exact path='/edit/' element={<EditTask onEditTask={onEditTask} task={taskList[currentlySelectedTaskId]} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
