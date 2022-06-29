const {Router} = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const validarCampos = require('../middlewares/validar-campos');

const router = Router();

router.post('/',[
    check('mail','El Password es requerido').isEmail(),
    check('password','El PRECIO es requerido').not().isEmpty(),
    validarCampos
],login);

module.exports = router;

