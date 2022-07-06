const url = "http://localhost:3000/";

const reload = async()=>{
    const list = document.getElementById('productList'); list.innerHTML='';
    const totalKgDom = document.querySelector('#totalKg');
    const totalPriceDom = document.querySelector('#totalPrice');
    
    const fetchList = await fetch(url+'api/cakes').then(el=>el.json());Array(fetchList);
    console.log(fetchList);
    var totalKg = 0;
    var totalPrice = 0;
    await fetchList.cakes.forEach(el => {
        const item = document.createElement('tr');
        item.classList.add('productItem');
        item.innerHTML = `
            <td></td>
            <td>${el.date.completeDate}</td>
            <td>${el.kg}kg</td>
            <td>$${el.price}</td>
            <td><button class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
        `;
        totalKg+=el.kg;
        totalPrice+=el.price;
        list.appendChild(item);
    });
    totalKgDom.innerHTML=totalKg;
    totalPriceDom.innerHTML=totalPrice;

};

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

    console.log('sold')

    reload();
};

window.onload = ()=>{
    // const hi = async()=>{
    //     await fetch(url+'api/auth', {
    //         method:"POST",
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify({
    //             "mail": "p@gmail.com",
    //             "password": "123"
    //         })
    //     }).then(el=>el.json()).then(el=>console.log(el));
    // };

    reload()
}

