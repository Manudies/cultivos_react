import connectDB from "../../src/config/mongo.js";
import mongoose from 'mongoose';
import cultivationController from "../../src/controllers/cultivations/cultivationController.js";

const cultivationData = {
    name: "Tomate",
    description: "El tomate es una planta anual, pero a veces puede perdurar más de un año en el terreno. Los tallos son ligeramente angulosos, semileñosos, de grosor mediano (cercano a 4 cm en la base) y con tricomas simples y glandulares. Hojas de tamaño medio a grande (10 a 50 cm), alternas, pecioladas, bipinatisectas (con folíolos a su vez divididos) y con numerosos tricomas simples y glandulares.",
    image:"https://fichas.infojardin.com/foto-hortalizas-verduras/lycopersicum-esculentum-tom.jpg",
    seedtime: "spring"
}

describe("Test de cultivation Controller",()=>{
    beforeAll(async ()=>{
        await connectDB();
        await mongoose.connection.collections["cultivations"].drop();
    })
    afterAll(async()=>{
        await mongoose.connection.close();
    })

    test("añadir cultivo",async()=>{
        const cultivation = await cultivationController.create(cultivationData);
        expect(cultivation.name).toEqual(cultivationData.name);
        expect(cultivation.description).toEqual(cultivationData.description);
        expect(cultivation.seedtime).toEqual(cultivationData.seedtime);
    })
    test("buscar cultivos por propiedad",async()=>{
        const cultivations= await cultivationController.getByProperty("seedtime","spring");
        expect(cultivations.length).toBeGreaterThanOrEqual(1);
        const cultivation = cultivations[0];
        console.log("cultivation",cultivation);
        expect(cultivation.name).toEqual(cultivationData.name);
        expect(cultivation.description).toEqual(cultivationData.description);
        expect(cultivation.seedtime).toEqual(cultivationData.seedtime);

    })
    test("buscar cultivos por id",async()=>{
        const cultivations= await cultivationController.getByProperty("seedtime","spring");
        const newcultivation = await cultivationController.getById(cultivations[0]._id);
        expect(newcultivation).not.toBeNull();
        expect(newcultivation.email).toEqual(cultivationData.email);
        expect(newcultivation.cultivationname).toEqual(cultivationData.cultivationname);
        expect(newcultivation.role).toEqual(cultivationData.role);
    })
})