const {Router} = require('express');
const { check } = require('express-validator');
const { cakesGet, cakesPost, cakesDelete } = require('../controllers/cakes');
const validarCampos = require('../middlewares/validar-campos');
const { validarJwt } = require('../middlewares/validar-jwt');
const isAdmin = require('../middlewares/validarAdmin');


const router = Router();

router.get('/',[
    // validarJwt,
    // validarCampos
],cakesGet);
router.post('/',[
    // validarJwt,
    check('kg','El KG no es numerico').isNumeric(),
    check('price','El PRECIO no es numerico').isNumeric(),
    validarCampos
],cakesPost);
router.delete('/:id',[
    // validarJwt,
    check('id','No es un ID valido').isMongoId(),
    validarCampos
],cakesDelete)

module.exports = router;

