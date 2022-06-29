const bcrypt = require("bcryptjs")
const { response } = require("express")
const jwt = require("jsonwebtoken")
const { createJwt } = require("../helpers/createJwt")
const User = require("../models/user")

const login = async (req, res = response) => {

    const { mail, password } = req.body

    try {
        //Verificar si el mail existe
        const user = await User.findOne({ mail })
        if (!user)return res.status(400).json({errors:[{msg:"El mail no existe"}]})

        //Si el usuario esta activo
        // if (!user.status) {
        //     return res.status(400).json({
        //         msg: "Usuario deshabilitado"
        //     })
        // }

        // check password
        if(password!=user.password)return res.status(400).json({errors:[{msg:"Mail o Contraseña no validos"}]})

        //Generar el JWT
        const token = await createJwt(user.id);
        res.json({
            user,
            token
        })

    } catch (err) {
        return res.status(500).json({msg: `Error: ${err}`})
    }
}

module.exports = {
    login
};