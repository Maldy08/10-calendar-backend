
   //* Rutas de Usuarios / Auth
   //*host + /api/auth

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToker } = require('../controllers/auth');

//*Crear router
const router = Router();

//*endpoints
router.post(
    '/new', 
    [ //midleware
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({ min:6 }),
        validarCampos
    ],
    crearUsuario
);

router.post(
    '/',
     [
        check('email','El email es obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({ min:6 }),
        validarCampos
     ],
     loginUsuario
     );

router.get(
    '/',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
    ],
    revalidarToker );

module.exports = router;
