const models = require('../models');
const Car = models.Car;


const findAllCar = async () => {
    return await Car.findAll();
};

const findCarById = async (id) => {
    return await Car.findByPk(id);
};

const createCar = async (car) => {
    return await Car.create(car);
};

const updateCar = async (car, idCar) => {
    return await Car.update(
        car ,{ where: {id: carId}}   
        );
};

const deleteCar = async (idCar) => {
    return await Car.destroy({
        where : {id: idCar}
    });
}


module.exports = {findAllCar, findCarById, createCar, updateCar, deleteCar};