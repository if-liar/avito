import CreateTaskBtn from "./createTaskBtn";
import TaskList from "./taskList";
import { useState } from "react";

export default function AllTasks({handleClickOnTaskFromTaskList, tasksData, setTasksData, projectId, projectTasks, handleClickOnTask}) {

    let [filterList, setFilterList] = useState(tasksData)

    function handleChangeFilter(e) {
        let obj = tasksData.data
   
        if (e.target.value) {
          
          let filtered = obj.filter((item)=>(
          item.title.toLowerCase().includes(e.target.value.toLowerCase())
          ))
          setFilterList(filtered)
        } else {
          setFilterList(tasksData.data)
        }    
    }

    if (tasksData) {

    return (
        <div className='allTasks'>
            <div>
                <input type="text" placeholder="Поиск" onChange={handleChangeFilter}/>
                <div id='filtres'>Фильтры</div>
            </div>
            <div>
                <div id='tasksList'>
                  <TaskList filterList={filterList} projectId={projectId} tasksData={tasksData} projectTasks={projectTasks} handleClickOnTaskFromTaskList={handleClickOnTaskFromTaskList} projectName={projectId}/>
                    <div>
                    <CreateTaskBtn />
                    </div>
                </div>

            </div>
        </div>
    )
} 
}
