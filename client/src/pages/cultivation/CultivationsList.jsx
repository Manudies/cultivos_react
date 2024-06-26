import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import CreateCultivation from "../../components/cultivation/CreateCultivation";
const CultivationsList = () => {
    const [cultivations,setCultivations] = useState(useLoaderData());
    const [creatingCultivation,setCreatingCultivation] = useState(false);
    const cultivationsHtml = cultivations.map(cultivation => {
        return (
            <article className="cultivation-list-element" key={cultivation._id}>
                <h2>{cultivation.name}</h2>
                <Link className="link_view" to={`/cultivations/${cultivation._id}`}>Ver cultivo</Link>
            </article>
        )
    })
    return (
        <>
        {creatingCultivation ?
            <Modal onClose={()=>setCreatingCultivation(false)}>
                <CreateCultivation onCreate={()=>setCreatingCultivation(false)}/>
            </Modal>
            :
            <button onClick={()=>setCreatingCultivation(true)}>Crear cultivo</button>
        }
            <section className="cultivation-list">
                {cultivationsHtml}
            </section>
        </>
    )
}

export default CultivationsList