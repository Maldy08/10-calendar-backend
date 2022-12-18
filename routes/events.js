
const { Router } = require('express')
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validarJWT } = require('../middlewares/validar-jwt')
const { validarCampos } = require('../middlewares/validar-campos');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

router.use( validarJWT );
//Todo: Obtener eventos, todas tienen que pasar por la validacion del token.

//Listado de los eventos
router.get('/', getEventos );

//Crear evento
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
     crearEvento 
    );
// Actualizar Evento
router.put(
    '/:id', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ],
    actualizarEvento 
);

//Eliminar evento
router.delete('/:id', eliminarEvento );


module.exports = router;