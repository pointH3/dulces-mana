const {request, response} = require('express');
const Cake = require('../models/cake')

const cakesGet = async (req = request, res = response)=>{
    //const filters = req.body;
    const cakes = await Cake.find();

    res.json({
        cakes
    })
    
};
const cakesPost = async(req=request, res=response)=>{
    const {kg,price} = req.body;
    let today = new Date();
    let completeDate = String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + today.getFullYear()
    const date = {
        "day":String(today.getDay()).padStart(2, '0'),
        "month":String(today.getMonth()+1).padStart(2, '0'),
        "year":String(today.getFullYear()),
        completeDate
    }
    // date = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    

    const cake = new Cake({
        date,
        kg,
        price
    })
    await cake.save();
    res.json({cake});
};
const cakesDelete = async(req=request, res=response)=>{
    const {id} = req.params;
    const cake = await Cake.findByIdAndDelete(id);
    res.json({
        cake
    })
};


module.exports = {
    cakesGet,
    cakesPost,
    cakesDelete
}