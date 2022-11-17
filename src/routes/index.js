const { Router } = require('express');
const models = require('../db/models');
const router = Router();
const Role = models.Role;

router.post('/', async (request, response) => {
  try {
    // sukses
  } catch (error) {
    // gagal
  }
});

router.get('/', async (request, response) => {
  try {
    const result = await Role.findAll();
    response.status(200).json({ message: 'OK', data: result });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: 'internal server error' });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const resultById = await Role.findByPk(request.params.id);
    if(!resultById){
      response.status(404).json({message: "Role not found"});
    }
    response.status(200).json({message: "Success", data:resultById});
  } catch (error) {
  response.status(500).json({message: "Internal Server Error"});
  }
});

router.put('/:id', async (request, response) => {
  try {
    // sukses
  } catch (error) {
    // gagal
  }
});

router.delete('/:id', async (request, response) => {
  try {
    // sukses
  } catch (error) {
    // gagal
  }
});

module.exports = router;
