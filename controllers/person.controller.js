const { Person } = require("../models/person.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createPerson = async (request, response) => {
    try {
        const { nombre, apellido, edad } = request.body;
        persona = await Person.create({
            nombre,
            apellido,
            edad
        });
        response.json(persona);
    } catch (error) {
        // response.status(400);
        response.json(error);
    }
}