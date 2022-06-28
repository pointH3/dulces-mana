const { request, response } = require("express");

const isAdmin = async (req=request,res=response, next)=>{
    const {password, name} = req.body;
    if(password!=process.env.PASS || name!=process.env.NAME){
        return res.json({ msg: "No permitido" });
    }else{
        next();
    }
    
}

module.exports = isAdmin;