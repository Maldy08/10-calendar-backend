/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToker } = require('../controllers/auth');

router.post('/new', crearUsuario );

router.post('/', loginUsuario);

router.get('/', revalidarToker );



module.exports = router;
