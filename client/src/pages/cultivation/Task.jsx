
const Task = ({cultivation})=>{
    return(
        <article className="task">
            <h3>{cultivation.name}</h3>
            <p>{cultivation.description}</p>
        </article>
    )
}

export default Task;