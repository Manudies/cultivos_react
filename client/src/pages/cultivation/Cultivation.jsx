import Task from "./Task";
import "./Cultivations.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeCultivation, updateCultivation } from "../../utils/fetch";
import CreateCultivation from "../../components/cultivation/CreateCultivation";
import Modal from "../../components/modal/Modal";

const Cultivation = ()=>{
    const [cultivation,setCultivation] = useState(useLoaderData());
    const [isUpdating, setIsUpdating] = useState(false);

    const navigate = useNavigate();

    const handleUpdate = async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const seedtime = e.target.seedtime.value;
        const data = {name,description,seedtime };
        console.log("Cultivo",data)
        const result = await updateCultivation(cultivation._id,data);
        console.log("result",result)
        navigate("/cultivations");
    }
    const handleDelete = async ()=>{
        const result = await removeCultivation(cultivation._id);
        console.log("result",result)
        navigate("/cultivations");
    }

    return(
        <article>
            <h2>Aqui estan tus cultivos</h2>
            <h2>{cultivation.name}</h2>
            <img src={cultivation.image} alt="" />
            <p>Descripcion: <br></br> {cultivation.description}</p>
            <p>Epoca de siembra: {cultivation.seedtime}</p>
            <button onClick={handleDelete}>Borrar</button>
            {isUpdating &&
                <Modal onClose={() => setIsUpdating(false)}>
                    <CreateCultivation onUpdate={handleUpdate} />
                </Modal>}
            <button onClick={() => setIsUpdating(true)}>Editar</button>
        </article>
    )
}
//     const getTasksByStatus = (tasks) =>{
//         const todo = tasks.filter(task => task.status ==="ToDo");
//         const doing = tasks.filter(task => task.status ==="Doing");
//         const done = tasks.filter(task => task.status ==="Done");
//         return {todo,doing,done};
//     }
//     const tasksByStatus = getTasksByStatus(cultivation.tasks);
//     return (
//         <article className="cultivation-card">
//             <h2>{cultivation.name}</h2>
//             <p>{cultivation.description}</p>
//             <p>Owner: {getOwnerName(cultivation.users,cultivation.owner)}</p>
//             <p>Users:</p>
//             <ul>
//                 {cultivation.users.map(user => (
//                     <li key={user._id}>{user.username}</li>
//                 ))}
//             </ul>
//             <section className="tasks">
//                 <section className="todo">
//                     <p>todo</p>
//                     {tasksByStatus.todo.map(task=>(
//                         <Task task={task} />
//                     ))}
//                 </section>
//                 <section className="doing">
//                     <p>doing</p>
//                     {tasksByStatus.doing.map(task=>(
//                         <Task task={task} />
//                     ))}
//                 </section>
//                 <section className="done">
//                     <p>done</p>
//                     {tasksByStatus.done.map(task=>(
//                         <Task task={task} />
//                     ))}
//                 </section>
//             </section>

//         </article>
//     )
// }

export default Cultivation;