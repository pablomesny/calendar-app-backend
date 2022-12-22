/* 
    Event Routes
    /api/events
*/
const { Router } = require("express");
const { check } = require("express-validator");

const { isDate } = require("../helpers/isDate");
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require("../middlewares/validate-jwt");
const {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
} = require("../controllers/events");

const router = Router();

// Todas tienen que pasar la validacion del JWT
router.use(validateJWT);

// Obtener eventos
router.get("/", getEvents);

// Crear un nuevo evento
router.post(
    "/", 
    [
       check('title', 'Title is mandatory').not().isEmpty(),
       check('start', 'Start date mandatory').custom( isDate ),
       check('end', 'End date mandatory').custom( isDate ),
       validateFields
    ], 
    createEvent
);

// Actualizar evento
router.put("/:id", updateEvent);

// Borrar evento
router.delete("/:id", deleteEvent);

module.exports = router;
