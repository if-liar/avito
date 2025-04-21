export default function ToDoTask({projectTasks, handleClickOnTask, projectName}) {
     
    if (projectTasks) {
    let filterTask = projectTasks.data.filter((task) => task.status=='Backlog');
    
    let tasks = filterTask.map((task)=>(
        <li key={task.id} className="tasksOfProject" onClick={()=>{

            handleClickOnTask({
                id: task.id,
                nameTask: task.title,
                description: task.description,
                nameProject: projectName,
                priority: task.priority,
                status: task.status,
                assignee: task.assignee.fullName
            })}
            }>
            {task.title}
        </li>
    )
    )

    return (
        <ul className='tasksOfProjectUL'>{tasks}</ul>
    )} else {
        <p>99</p>
    }
}
