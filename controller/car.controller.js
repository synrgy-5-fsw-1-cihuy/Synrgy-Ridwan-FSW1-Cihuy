const { response } = require('express');
const formidableMiddleware = require('formidable');
const cloudinaryConfig = require('../config/cloudinary.js');
const models = require('../models');
const { updateCar } = require('../repository/car.repository.js');
const Car = models.Car;
const carService = require('../service/car.service.js');

// All Car Handler
const getAllCarHandler = async (request, response) => {
    const cars = await carService.doGetAllCars();

    response.status(200).json({data: cars});
};

// Car By ID Handler
const getCarByIdHandler = async (request, response) => {
    const carById = await carService.doGetCarById(request.params.id, response);

    if (carById == null) {
        response.status(404).json({message: `Car not found with ids ${request.params.id}`});
        return;
    };

    response.status(200).json({data: carById});
};


const createCarHandler = (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, (err, fields, files) => {
        if (err) {
            next(err);
            
            return;
        };

        cloudinaryConfig.uploader.upload(files.foto.filepath, function(err, result) {
            if (err) {
                next(err);
                return;
            }

            Car.create({
                name: fields.name,
                price: fields.price,
                size: fields.size,
                foto: result.secure_url
            }).then(result => {
                response.status(201).json({message: "Car successfully created", body: fields});
            });
        });

    });
};

const updateCarHandler = async (request, response) => {
    const { id } = request.params;
    const form = formidableMiddleware({ });

    await form.parse(request, async(err, fields, files)=>{
        if(err){
            next(err);
            return;
        };

        try {
            const updated = await carService.updateCar(fields, id);
            return response.status(200).json({message: "Success Updated!", data: id});
        } catch (error) {
            return response.status(500).json({message:"Internal Server Error"});
        }
    })
};

const destroyCarHandler = async (request, response) => {
    const { id } = request.params;
    try {

        const deleted = await carService.deleteCar(id);
        return response.status(200).json({message: "Success Deleted", data: id});
        
    } catch (error) {
        return response.status(500).json({message:"Internal Server Error"});
    }
}




module.exports = {getAllCarHandler, getCarByIdHandler, createCarHandler, updateCarHandler, destroyCarHandler};