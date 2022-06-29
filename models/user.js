const {Schema, model} = require('mongoose')

const UserSchema = Schema({
    mail:{
        type: String,
        required:[true,'El Mail es obligatorio']
    },
    password:{
        type: String,
        required:[true,'El Password es obligatorio']
    },
    name:{
        type: String,
        required:[true,'El Name es obligatorio']
    }

})

module.exports = model('User',UserSchema);