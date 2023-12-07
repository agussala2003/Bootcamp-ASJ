const productos = [
    {
        nombre: 'Auriculares Apple In-Ear',
        img: './img/Product1.jpg',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '199.99',
        id: 1
    },
    {
        nombre: 'MacBook Pro Apple',
        img: './img/Product2.jpg',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '799.99',
        id: 2
    },
    {
        nombre: 'Auriculares JBL 710 BT',
        img: './img/Product3.jpg',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '99.99',
        id: 3
    },
    {
        nombre: 'AppleWatch Deluxe Edition',
        img: './img/Product4.jpg',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '399.99',
        id: 4
    },
    {
        nombre: 'Ipad Pro Gold',
        img: './img/Product5.jpg',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '699.99',
        id: 5
    },
    {
        nombre: 'PlayStation 5 White',
        img: './img/Product6.jpg',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates vel soluta possimus voluptatum nihil, fugit minima eius quae laudantium facilis similique laborum dolorem vitae voluptas! Quisquam obcaecati voluptate dolore suscipit.',
        price: '999.99',
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
        document.getElementById('price-detail').innerText = '$' + actualProdDetail.price
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
    let arrValid = actualProds.filter(el => el != null)
    ttProd = arrValid.length;
    counter.innerText = ttProd;
})
let ttFinal = 0;
cart.addEventListener('click',(e) => {
    e.preventDefault()
    let actualProds = JSON.parse(localStorage.getItem('miProducto'))
    document.getElementById('detail-container').className = "d-none"
    document.getElementById('product-container').className = 'row mb-4 g-3 d-none'
    document.getElementById('cart-container').className = "d-block"
    let arrValid = actualProds.filter(el => el != null)
    if(parseInt(counter.innerText)>0) {
        document.getElementById('products-cart-container').className = "d-block"
        document.getElementById('text-cart').className = "d-none"
        document.getElementById('purchase-container').className = "row justify-content-center d-flex mb-3"
        console.log(actualProds)
        console.log(arrValid)
        for (let i = 0; i < arrValid.length; i++) {
            if (document.getElementById(`card-cart-${arrValid[i].id}`).className != "row d-block") {
                document.getElementById(`card-cart-${arrValid[i].id}`).className = "row d-block"
            }
            ttFinal += Number(arrValid[i].price)
        }
    }
    console.log(ttFinal);
    document.getElementById('final-price').innerText = ttFinal
})
const arrTotalProducts = [1,1,1,1,1,1]
const adders = document.getElementsByClassName('adder');
const lessers = document.getElementsByClassName('lesser');
console.log(adders);
console.log(lessers);
for (let i = 0; i < adders.length; i++) {
    adders[i].addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(`#card-cart-${adders[i].value} .btn-container p`).innerText = ++arrTotalProducts[i];
        let priceInt = document.querySelector(`#card-cart-${adders[i].value} .price`)
        console.log(priceInt)
        console.log(Number(priceInt.innerText))
        ttFinal += Number(priceInt.innerText)
        document.getElementById('final-price').innerText = ttFinal.toFixed(2)
    })
}
for (let i = 0; i < lessers.length; i++) {
    lessers[i].addEventListener('click', (e) => {
        e.preventDefault()
       if(arrTotalProducts[i] > 1){
        document.querySelector(`#card-cart-${adders[i].value} .btn-container p`).innerText = --arrTotalProducts[i];
        let priceInt = document.querySelector(`#card-cart-${adders[i].value} .price`)
        console.log(priceInt)
        console.log(Number(priceInt.innerText))
        ttFinal -= Number(priceInt.innerText)
        document.getElementById('final-price').innerText = ttFinal.toFixed(2)
       }
    })
}
document.getElementById('purchase-button').addEventListener ('click', () => {
    alert('Gracias por confiar en nosotros! Te esperamos la proxima');
    window.location.reload()
})