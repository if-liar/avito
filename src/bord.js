import ToDoTask from "./toDoTask";
import InProgressTask from "./inProgressTask";
import DoneTask from "./doneTask";

export default function Bord({projectTasks, projectId, handleClickOnTask}) {

if (projectId) {
    return(
        <div className='bordCont'>
            <p>{projectId[0].name}</p>
                <div className='bordTable'>
                    <div className='bordColumns'>
                        <div className='bordTableHeaders'>To do</div>
                        <div className='bordTableBodys'>
                        <ToDoTask projectTasks={projectTasks} handleClickOnTask={handleClickOnTask} projectName={projectId[0].name}/>
                            </div>
                    </div>
                    <div className='bordColumns'>
                        <div className='bordTableHeaders'>In progress</div>
                        <div className='bordTableBodys'>
                      <InProgressTask projectTasks={projectTasks} handleClickOnTask={handleClickOnTask} projectName={projectId[0].name}/>
                        </div>
                    </div>
                    <div className='bordColumns'>
                        <div className='bordTableHeaders'>Done</div>
                        <div className='bordTableBodys'>
                        <DoneTask projectTasks={projectTasks} handleClickOnTask={handleClickOnTask} projectName={projectId[0].name}/>
                        </div>
                    </div>
                </div>
        </div>
    )
} else {
    return (
        <p>По проекту нет задач</p>
    )
}
}