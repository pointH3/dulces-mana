const url = "http://localhost:3000/";

window.onload = ()=>{
    const hi = async()=>{
        await fetch(url+'api/auth',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "mail": "p@gmail.com",
                "password": "123"
            })
        }).then(el=>el.json()).then(el=>console.log(el))
    };
    hi();
}