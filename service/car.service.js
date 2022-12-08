const carRepository = require('../repository/car.repository.js');


const doGetAllCars = async () => {
    return await carRepository.findAllCar();
};

const doGetCarById = async (id) => {
    const carById = await carRepository.findCarById(id);

    return carById;
};

const createCar = async (car, emailCreator) => {
    const dataCar = {
        ...car,
        createdBy: emailCreator.email
    };
    return await carRepository.createCar(dataCar);
};

const updateCar = async (car, idCar) => {
    const getId = await carRepository.findCarById(idCar);

    if(!getId){
        return {
            status: 404,
            message : "Car Not Found",
        };
    }
    else{
        await carRepository.updateCar(idCar);
        return {
            status: 200,
            message :"Car Updated!",
            data:getId
        }
    }
};

const deleteCar = async (idCar) => {
    const getId = await carRepository.findCarById(idCar);
    
    if(!getId){
        return {
            status: 404,
            message : "Car Not Found",
        };
    } else{
        await carRepository.deleteCar(idCar);
        return {
            status: 200,
            message :"Car Deleted!",
            data:getId
        }
    }
}

module.exports = {doGetAllCars, doGetCarById, createCar, updateCar, deleteCar};