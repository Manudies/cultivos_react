import React, { useState, useEffect } from 'react';
import { createCultivation, updateCultivation } from "../../utils/fetch";
import "./CreateCultivation.css";

const CreateCultivation = ({ onCreate, onUpdate, initialData }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [seedtime, setSeedtime] = useState('summer');

    useEffect(() => {
        if (initialData) {
            setName(initialData.name);
            setDescription(initialData.description);
            setSeedtime(initialData.seedtime);
        }
    }, [initialData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, description, seedtime };
        console.log("Cultivo", data);
        try {
            let result;
            if (initialData) {
                result = await updateCultivation(initialData._id, data);
                onUpdate(result);
            } else {
                result = await createCultivation(data);
                onCreate(result);
            }
            console.log("result", result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form className="create-cultivation" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

            <label htmlFor="seedtime">Seedtime</label>
            <select name="seedtime" id="seedtime" value={seedtime} onChange={(e) => setSeedtime(e.target.value)}>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
                <option value="winter">Winter</option>
            </select>

            <button type="submit">{initialData ? 'Update' : 'Create'}</button>
        </form>
    );
}

export default CreateCultivation;
