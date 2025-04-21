import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Projects from './projects.js'
import AllTasks from './AllTasks.js'
import CreateTask from "./createTaskBtn.js";
import CreateEditTask from "./createEditTask.js";



export default function App() {

  let [tasksProjects, setTasksProjects] = useState('projects');
  let [tasksProjectsColor, setTasksProjectsColor] = useState({task: 'red', project: 'black'});
  let [projectId, setProjectId] = useState();
  let [projectTasks, setProjectTasks] = useState();
  let [boardsData, setBoardsData] = useState();
  let [tasksData, setTasksData] = useState();
  let [taskDataFromBoard, setTaskDataFromBoard] = useState({});

  let boardsDataJSON, tasksDataJSON
  async function getBoards() {

    let boardsURL = `http://localhost:8080/api/v1/boards`;
    const responseBoardsURL = await fetch(boardsURL);
    boardsDataJSON = await responseBoardsURL.json();
     
    if (boardsDataJSON) setBoardsData(()=>boardsDataJSON)

  }
  
async function getAllTasks() {
  let tasksURL = `http://localhost:8080/api/v1/tasks`;
  const responseTasksURL = await fetch(tasksURL);
  tasksDataJSON = await responseTasksURL.json();

  if (tasksDataJSON) setTasksData(()=>tasksDataJSON)
}

   function handleClickTasks() {
    setTasksProjects('tasks')
    setTasksProjectsColor({task: 'red', project: 'black'})
    getAllTasks()
 }

   function handleClickProjects() {
    setTasksProjects('projects')
    setTasksProjectsColor({task: 'black', project: 'red'})
    getBoards()
   }


   function handleClickOnTask(taskData) {
    setTaskDataFromBoard(taskData) 
  }

  function handleClickOnTaskFromTaskList(taskData) { }


   getAllTasks()

 return (
  <>
 <div className='cont'>
          <header>
             <div id='headerItem1'>
                <Link to='/issues' onClick={handleClickTasks}  style={{color: tasksProjectsColor.task, textDecoration: 'none', marginLeft: '10px'}}>Все задачи</Link>
                <Link to='/boards' onClick={handleClickProjects} style={{color: tasksProjectsColor.project, textDecoration: 'none', marginLeft: '10px'}}>Проекты</Link>
             </div>
             <div id='headerItem2'>
                <CreateTask />
             </div>
             <CreateEditTask taskDataFromBoard={taskDataFromBoard} setProjectTasks={setProjectTasks} projectTasks={projectTasks} />
         </header>
  <Routes>
    <Route path='/issues' element={<AllTasks tasksData={tasksData} setTasksData={setTasksData} projectId={projectId} projectTasks={projectTasks} handleClickOnTaskFromTaskList={handleClickOnTaskFromTaskList}/>} />
    <Route path='/boards' element={<Projects boardsData={boardsData} setProjectId={setProjectId} projectId={projectId} setProjectTasks={setProjectTasks} projectTasks={projectTasks} handleClickOnTask={handleClickOnTask}/>} /> 
  </Routes>
 </div >
 </>
 )
}