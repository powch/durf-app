const router = require('express').Router();
const characterController = require('../../controller/characterController');

router
  .route('/')
  .get(characterController.findAll);


router
  .route('/:id')
  .post(characterController.create);
module.exports = router;
