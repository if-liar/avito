import { useState } from "react"
export default function CreateEditTask({taskDataFromBoard, setProjectTasks,projectTasks, taskDataFromTaskList}) {
     

    let [taskForPut, setTaskForPut] = useState({assigneeId: taskDataFromBoard.id,
        description: taskDataFromBoard.description,
        priority: taskDataFromBoard.priority,
        status: taskDataFromBoard.status,
        title: taskDataFromBoard.nameTask});
    

    let [goTo, setGoTo] = useState('pink')


   async function putTask() {

    fetch(`http://localhost:8080/api/v1/tasks/update/${taskDataFromBoard.id}`, {
        method: 'PUT',
        body: JSON.stringify(taskForPut)
    }).then(response => {
        return response.json();
    }).then(data => console.log(data));
          } 


    return (
        <div className="createEditTask" style={{animation: goTo}}>
        <div className='asForm'>
            <div onClick={()=> setGoTo('ease 0.5s goToUp forwards')}>Создание/редактирование задачи</div>
            <div className='character'>
                <input placeholder="Название" className='createEditTaskItem' value={taskDataFromBoard.nameTask}></input>
                <textarea  placeholder="Описание" style={{height: '100px', resize: 'none'}} className='createEditTaskItem' value={taskDataFromBoard.description} ></textarea>
                <select className='createEditTaskItem'>
                    <option disabled selected>{taskDataFromBoard.nameProject}</option>
                </select>
                
                <select className='createEditTaskItem' onChange={(e)=>{
                        
                        setTaskForPut(
                          {
                              assigneeId: taskDataFromBoard.id,
                              description: taskDataFromBoard.description,
                              priority: e.target.value,
                              status: taskDataFromBoard.status,
                              title: taskDataFromBoard.nameTask
                          });

                          }
                          }>
                    <option disabled >{taskDataFromBoard.priority}</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>

                <select className='createEditTaskItem' onChange={(e)=>{
                                  setTaskForPut(
                                    {
                                        assigneeId: taskDataFromBoard.id,
                                        description: taskDataFromBoard.description,
                                        priority: taskDataFromBoard.priority,
                                        status: e.target.value,
                                        title: taskDataFromBoard.nameTask
                                    });

                                    }
                                    }>
                    <option disabled selected>{taskDataFromBoard.status}</option>
                    <option>Backlog</option>
                    <option>InProgress</option>
                    <option>Done</option>
                </select>

                <select className='createEditTaskItem'>
                    <option disabled selected>{taskDataFromBoard.assignee}</option>
                </select>
            </div>
           
            <footer>
                <div className='toBoard'>Перейти на доску</div>
                <button className='submitBtn' onClick={putTask}>Обновить</button>
            </footer>
        </div>
        </div>
        )
        
}