import { createCultivation } from "../../utils/fetch";
import "./CreateCultivation.css"
const CreateCultivation = ({onCreate})=>{

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const seedtime = e.target.seedtime.value;
        const data = {name,description,seedtime };
        console.log("Cultivo",data)
        const result = await createCultivation(data);
       

        console.log("result",result)
        onCreate(result);
    }
    return (
        <form action="" className="create-cultivation" onSubmit={handleSubmit}>
            <label htmlFor="name" >Name</label>
            <input type="text" name="name"/>
            <label htmlFor="description" >Description</label>
            <textarea name="description"></textarea>
            <label htmlFor="seedtime" >Seedtime</label>
            <select name="seedtime" >
                <option value="spring">spring</option>
                <option value="summer" selected>summer</option>
                <option value="fall">fall</option>
                <option value="winter">winter</option>
            </select>
            <button type="submit">Create</button>
        </form>
    )
}
export default CreateCultivation;