const url = "http://localhost:3000/";

const sell = async()=>{
    const form_kg = document.getElementById('form_kg');
    const form_price = document.getElementById('form_price');

    if(!form_kg.value || !form_price)return alert("KG y Costo son requeridos");
    if(form_kg.value<=0 || form_price.value<=0)return alert("KG y Costo no admitidos");

    await fetch(url+'api/cakes', {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "kg": form_kg.value,
            "price": form_price.value
        })
    }).then(el=>el.json());

    form_kg.value='';
    form_price.value='';

    //reload();
};

const reload = ()=>{
    const list = document.getElementById('productList');
    // <div class="productItem">
    //     <ul>
    //         <li>10/07/2006</li>
    //         <li>51kg</li>
    //         <li>$015</li>
    //     </ul>
    //     <hr>
    // </div>
};

window.onload = ()=>{
    const hi = async()=>{
        await fetch(url+'api/auth', {
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "mail": "p@gmail.com",
                "password": "123"
            })
        }).then(el=>el.json()).then(el=>console.log(el));
    };
    // hi();
    // sell();
}

