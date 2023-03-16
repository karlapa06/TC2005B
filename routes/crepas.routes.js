const express = require('express');
const path = require('path');
const hasCreate = require('../util/has-create');


const router = express.Router();

const crepasController = require('../controllers/crepas.controller');

router.get('/lista/:id', crepasController.get_lista);

router.get('/lista', crepasController.get_lista);

router.get('/nuevo', hasCreate, crepasController.get_nuevo);

router.post('/nuevo', hasCreate, crepasController.post_nuevo);

router.get('/pedir', crepasController.get_pedir);

router.post('/pedir', crepasController.post_pedir);

router.get('/pedido', crepasController.get_pedido);

module.exports = router;