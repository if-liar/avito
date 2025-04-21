
import Bords from "./bords"
import Bord from "./bord"
import { useState } from "react"

export default function Projects({handleClickOnTask, boardsData, setProjectId, projectId, setProjectTasks, projectTasks }) {
    let [projectsOrBord, setProjectsOrBord] = useState('projects');
   

    function handleGoToBoard() {
        setProjectsOrBord('bord');

    }

    return (
           (projectsOrBord =='projects') ? <Bords boardsData={boardsData} handleGoToBoard={handleGoToBoard} setProjectId={setProjectId} projectId={projectId} setProjectTasks={setProjectTasks}/> : <Bord projectTasks={projectTasks} projectId={projectId} handleClickOnTask={handleClickOnTask}/>
       )
}