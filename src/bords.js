import ProjectOnBoard from "./projectOnBoard"

    export default function Bords(/*{boardsData, handleGoToBoard, setProjectId, projectId, setProjectTasks}*/props) {
    return (

        <div className='bordsCont'>
            <ProjectOnBoard /*boardsData={boardsData} handleGoToBoard={handleGoToBoard} setProjectId={setProjectId} projectId={projectId} setProjectTasks={setProjectTasks}*/{...props} />
        </div>
    )
}