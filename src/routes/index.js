const { Router, response } = require('express');
const models = require('../db/models');
const router = Router();
const Car = models.Car;

const formidableMiddleware = require('formidable');

router.post('/', async (request, response) => {
  try {
      const{name, permission} = request.body;
      if(!name){
        response.status(400).json({message: "Bad Request"});
        return;
      }
      const result = await Role.create(request.body);
      response.status(200).json({message:"Created Succes", data:result}); 
  } catch (error) {
      response.status(500).json({message: "Internal Server Error"});
  }
});

router.get('/', async (request, response) => {
  try {
    const result = await Car.findAll();
    response.status(200).json({ message: 'OK', data: result });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: 'internal server error' });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const resultById = await Car.findByPk(request.params.id);
    if(!resultById){
      response.status(404).json({message: "Car not found"});
    }
    response.status(200).json({message: "Success", data:resultById});
  } catch (error) {
  response.status(500).json({message: "Internal Server Error"});
  }
});

router.put('/:id', async (request, response) => {
    try {
      const{ id } = request.params;
      const { name, permission } = request.body;
      if(!id){
        response.status(404).json({message: "Bad Request"});
        return;
      }

      const role = await Role.findByPk(request.params.id);
      if(!role){
        response.status(404).json({message: "Role not found"});
        return;
      }

      await Role.update(request.body, {
          where: { id }
      });
      response.status(200).json({message: `Success, Updated role id: ${id}`})
    } catch (error) {
      response.status(500).json({message: "Internal Server Error"});
    }

});

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    if(!id){
      response.status(400).json({message: "Bad Request"});
    }
    const result = await Role.destroy({where : { id }});
    if(!result){
      response.status(404).json({message: "Role not found"});
    }
    response.status(200).json({message: `id:${id} has been deleted`});
  } catch (error) {
    response.status(500).json({message: "Internal Server Error"});
  }
});

module.exports = router;
