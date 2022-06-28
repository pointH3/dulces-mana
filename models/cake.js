const {Schema, model} = require('mongoose')

const CakeSchema = Schema({
    date:{
        type: JSON,
        required:[true,'La fecha es obligatoria']
    },
    kg:{
        type: Number,
        required:[true,'La cantidad de KG es obligatoria']
    },
    price:{
        type: Number,
        required:[true,'El precio es obligatorio']
    }
})

module.exports = model('Cake',CakeSchema);