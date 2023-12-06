const productos = [
    {
        nombre: 'Producto 1',
        img: 'https://dummyimage.com/600x400/000/fff&text=Product',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '199.99',
        id: 1
    },
    {
        nombre: 'Producto 2',
        img: 'https://dummyimage.com/600x400/000/fff&text=Product',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '199.99',
        id: 2
    },
    {
        nombre: 'Producto 3',
        img: 'https://dummyimage.com/600x400/000/fff&text=Product',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '199.99',
        id: 3
    },
    {
        nombre: 'Producto 4',
        img: 'https://dummyimage.com/600x400/000/fff&text=Product',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '199.99',
        id: 4
    },
    {
        nombre: 'Producto 5',
        img: 'https://dummyimage.com/600x400/000/fff&text=Product',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '199.99',
        id: 5
    },
    {
        nombre: 'Producto 6',
        img: 'https://dummyimage.com/600x400/000/fff&text=Product',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '199.99',
        id: 6
    },
]

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const detailContainer = document.getElementById('detail-container');
const goProducts = document.getElementById('go-products');
const goProductsCart = document.getElementById('go-products-cart');
const btnDetail = document.getElementById('btn-detail');
let ttProd = 0;
const cart = document.getElementById('cart-viewer');
const counter = document.querySelector('#cart-viewer p');
let arrPrueba;
let prodTemporal;

const arrNumbers = [btn1,btn2,btn3,btn4,btn5,btn6];
// Eventos para los numeros
localStorage.setItem('miDetalle', [])
arrNumbers.forEach(item => item.addEventListener("click",(e)=>{
    e.preventDefault();
    arrPrueba = productos.find(product => product.id == parseInt(item.name))
    console.log(arrPrueba)
    localStorage.setItem('miDetalle', JSON.stringify(arrPrueba))
    let actualProdDetail = JSON.parse(localStorage.getItem('miDetalle'));
    setTimeout(() => {
        document.getElementById('detail-container').className = " "
        document.getElementById('product-container').className = 'row mb-4 g-3 d-none'
        document.getElementById('img-detail').src = actualProdDetail.img
        document.getElementById('title-detail').innerText = actualProdDetail.nombre
        document.getElementById('desc-detail').innerText = actualProdDetail.desc
        document.getElementById('price-detail').innerText = actualProdDetail.price
        btnDetail.setAttribute('name',actualProdDetail.id);
    },1000)
}))

goProducts.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('detail-container').className = "d-none"
        document.getElementById('product-container').className = 'row mb-4 g-3'
        btnDetail.innerText = "Add to cart"
    },1000)
})
goProductsCart.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('detail-container').className = "d-none"
        document.getElementById('product-container').className = 'row mb-4 g-3'
        document.getElementById('cart-container').className = "d-none"
        document.getElementById('purchase-container').className = "row justify-content-center mb-3 d-none"
        document.getElementById('products-cart-container').innerHTML = ""
    },1000)
})

let arrCart = [];
btnDetail.addEventListener('click', () => {
    btnDetail.innerText = "Its in your cart!"
    arrCart[btnDetail.name - 1] = productos.find(product => product.id == parseInt(btnDetail.name))
    console.log(arrCart)
    localStorage.setItem('miProducto', JSON.stringify(arrCart));
    let actualProds = JSON.parse(localStorage.getItem('miProducto'))
    console.log(actualProds)
    ttProd = 0;
    for (let i = 0; i < actualProds.length; i++) {
        console.log(actualProds[i])
        isNaN(actualProds[i]) ? ttProd++ : ''
    }
    counter.innerText = ttProd;
})
let cantProd = [1,1,1,1,1,1];
cart.addEventListener('click',() => {
    let actualProds = JSON.parse(localStorage.getItem('miProducto'))
    document.getElementById('detail-container').className = "d-none"
    document.getElementById('product-container').className = 'row mb-4 g-3 d-none'
    document.getElementById('cart-container').className = "d-block"
    if(parseInt(counter.innerText)>0) {
        document.getElementById('products-cart-container').className = "d-block"
        document.getElementById('text-cart').className = "d-none"
        document.getElementById('purchase-container').className = "row justify-content-center d-flex mb-3"
        let ttfinal = 0;
        for (let i = 0; i < actualProds.length; i++) {
            console.log(actualProds[i])
            if(isNaN(actualProds[i])) {
                document.getElementById('products-cart-container').innerHTML += `<div class="row">
                <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${actualProds[i].img}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${actualProds[i].nombre}</h5>
                          <p class="card-text">${actualProds[i].desc}</p>
                          <p>$${actualProds[i].price}</p>
                          <div class="adder d-flex align-items-center">
                            <button onClick="${cantProd[i]++}" class="btn btn-primary">+</button>
                            <p class="m-0 px-3">${cantProd[i]}</p>
                            <button onClick="${cantProd[i] > 1 ? cantProd-- : ''}" class="btn btn-primary">-</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>`
            if(parseInt(actualProds[i].price) > 0) {
                ttfinal = (parseInt(actualProds[i].price)*parseInt(cantProd[i]));
                document.getElementById('final-price').innerText = ttfinal;
            }
            }
        }
    }
    else {

    }
})