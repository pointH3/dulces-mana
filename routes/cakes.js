const {Router} = require('express');
const { check } = require('express-validator');
const { cakesGet, cakesPost } = require('../controllers/cakes');
const validarCampos = require('../middlewares/validar-campos');
const isAdmin = require('../middlewares/validarAdmin');

const router = Router();

router.get('/',cakesGet);
router.post('/',[
    isAdmin,
    check('kg','El KG no es numerico').isNumeric(),
    check('price','El PRECIO no es numerico').isNumeric(),
    validarCampos
],cakesPost);

module.exports = router;

