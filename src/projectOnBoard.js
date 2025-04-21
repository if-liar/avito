import React from "react";
import { Routes } from "react-router";

export default function ProjectOnBoard({boardsData, handleGoToBoard, setProjectId, projectId, setProjectTasks}) {
    

    if (boardsData) {
   let projects = boardsData.data.map((project)=>(

    <li  key={project.id} className='liOnBoard'>
        <div className='projectOnBoard'>
        <p>{project.name}</p>
        <div className='goToBoard' onClick={(e)=> {
           let projId = boardsData.data.filter((n)=> n.id==project.id);
    
            handleGoToBoard()

            getBoardsTasks(projId)

            async function getBoardsTasks(id) {
                let boardsIdURL = `http://localhost:8080/api/v1/boards/${id[0].id}`;
              const responseBoardsIdURL = await fetch(boardsIdURL);
              let boardsIdData = await responseBoardsIdURL.json();
              
              if (boardsIdData) {
                setProjectTasks(boardsIdData)
                setProjectId(projId)
              } else {
                console.log('boardIdData не получен')
              }

              }
              
        }}>Перейти к доске</div>

        </div>
    </li>
    )
    )

    return (
        <div className='bordsCont'>
            <ul className='ulOnBoard'>{projects}</ul>
            </div>         
    )
} else {
    return (
        <div className='bordsCont'>
            <ul className='ulOnBoard'>Проектов нет</ul>
            </div>         
    )
}
} 

