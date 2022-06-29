const {Router} = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const validarCampos = require('../middlewares/validar-campos');

const router = Router();

router.post('/',[
    check('mail','El Mail es requerido').isEmail(),
    check('password','El Password es requerido').not().isEmpty(),
    validarCampos
],login);

module.exports = router;

