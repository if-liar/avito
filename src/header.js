import {React, useState} from "react";
import CreateTask from "./createTaskBtn";

export default function Header({onAllTasks, onProjects, color}) {
    return (
        <header>
            <div id='headerItem1'>
                <div className='headerItems' onClick={onAllTasks} style={{color: color.task}}>Все задачи</div>
                <div className='headerItems' onClick={onProjects} style={{color: color.project}}>Проекты</div>
            </div>
            <div id='headerItem2'>
               <CreateTask />
            </div>
        </header>
    )
}
