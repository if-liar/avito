export default function TaskList({tasksData, filterList, projectTasks, handleClickOnTaskFromTaskList, projectName}) {

    if (filterList) {
        if(filterList.data) {
    let list = filterList.data.map((task)=>(
        <li key={task.id}  className="taskListItem" onClick={()=>{
            handleClickOnTaskFromTaskList({
                id: task.id,
                nameTask: task.title,
                description: task.description,
                nameProject: projectName,
                priority: task.priority,
                status: task.status,
                assignee: task.assignee.fullName
            })}
            }>{task.title}</li>
    ))
    
    return (
        <ul className="taskListUL">{list}</ul>
    )} else { let list = filterList.map((task)=>(
        <li key={task.id}  className="taskListItem" onClick={()=>{
            handleClickOnTaskFromTaskList({
                id: task.id,
                nameTask: task.title,
                description: task.description,
                nameProject: projectName,
                priority: task.priority,
                status: task.status,
                assignee: task.assignee.fullName
            })}
            }>{task.title}</li>
    ))
    
    return (
        <ul className="taskListUL" >{list}</ul>
    )}
} else {

    let list = tasksData.data.map((task)=>(
        <li  key={task.id}   className="taskListItem" onClick={()=>{
            handleClickOnTaskFromTaskList({
                id: task.id,
                nameTask: task.title,
                description: task.description,
                nameProject: projectName,
                priority: task.priority,
                status: task.status,
                assignee: task.assignee.fullName
            })}
            }>{task.title}</li>
    ))
    
    return (
        <ul className="taskListUL">{list}</ul>
    )
}
}