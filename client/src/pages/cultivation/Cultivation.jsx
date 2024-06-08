import React, { useState } from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";
import { removeCultivation } from "../../utils/fetch";
import CreateCultivation from "../../components/cultivation/CreateCultivation";
import Modal from "../../components/modal/Modal";
// import "./Cultivations.css";

const Cultivation = () => {
    const [cultivation, setCultivation] = useState(useLoaderData());
    const [isUpdating, setIsUpdating] = useState(false);
    const navigate = useNavigate();

    const handleUpdate = (updatedCultivation) => {
        setCultivation(updatedCultivation);
        setIsUpdating(false);
        navigate("/cultivations");
    };

    const handleDelete = async () => {
        try {
            await removeCultivation(cultivation._id);
            navigate("/cultivations");
        } catch (error) {
            console.error('Error deleting cultivation:', error);
        }
    };

    return (
        <article className="cultivation-card">
            <h2>{cultivation.name}</h2>
            <img src={cultivation.image} alt={cultivation.name} />
            <p>Description: <br /> {cultivation.description}</p>
            <p>Seedtime: {cultivation.seedtime}</p>
            <button onClick={handleDelete}>Delete</button>
            {isUpdating && (
                <Modal onClose={() => setIsUpdating(false)}>
                    <CreateCultivation 
                        onUpdate={handleUpdate} 
                        initialData={cultivation} 
                    />
                </Modal>
            )}
            <button onClick={() => setIsUpdating(true)}>Edit</button>
        </article>
    );
};

export default Cultivation;
