const data = [
    {
        img: "../Image/berriescheescake.png",
        title: "Berries and Cream Cheescake",
        price: 40,
        cart: 0,
    },
    {
        img: "../Image/macarons.png",
        title: "Macaron",
        price: 15,
        cart: 0,
    },
    {
        img: "../Image/croissant.png",
        title: "Croissant",
        price: 35,
        cart: 0,
    },
    {
        img: "../Image/cupcake.png",
        title: "Cupcake",
        price: 20,
        cart: 0,
    },
    {
        img: "../Image/donuts.png",
        title: "Doughnut",
        price: 25,
        cart: 0,
    },
    {
        img: "../Image/blackcoffee.png",
        title: "Coffee",
        price: 20,
        cart: 0,
    },
    {
        img: "../Image/milk-shake.png",
        title: "Milkshake",
        price: 40,
        cart: 0,
    },
    {
        img: "../Image/milktea.png",
        title: "Milktea",
        price: 30,
        cart: 0,
    },
]


let productsHTML = "";
let idAllProducts = document.getElementById("allProducts");

for (product of data) {
    productsHTML += `
        
        <div class="product">
            <div class="item-detail">
            <img class="product__img" src=${product.img}>
            </div>
                <div class="product__title">${product.title}</div>
                <div class="product__price">${product.price},000 vnd</div>  
                <i class="fa fa-shopping-cart" id="cart"></i>
        </div>
        
    `;
};

idAllProducts.innerHTML = productsHTML;



let carts = document.querySelectorAll('#cart');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(data[i]);
        totalCost(data[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(data) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }

    setItem(data);
}
function setItem(data) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[data.title] == undefined) {
            cartItems = {
                ...cartItems,
                [data.title]: data
            }
        }
        cartItems[data.title].cart += 1;
    } else {
        data.cart = 1;
        cartItems = {
            [data.title]: data
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(data) {
    //  console.log("The product price is", data.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + data.price);
    } else {
        localStorage.setItem("totalCost", data.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
        (".cart-container");

    console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <tr id="showCart">
        <td>
        <div class="cart-info">
            <img src="${item.img}" alt="">
            <div>
                <p>${item.title}</p>
                <small>Price: ${item.price},000 vnd</small>
                <i class="fa fa-trash" onclick="minusCartNum()"></i> 
        </div>
    </td>
    <td>  <label >Quantity: </label>${item.cart}</td>
    <td><label >Price: </label>${item.cart * item.price},000 vnd</td>
    </tr>
    <hr>
        
        `
        });
    }
}

onLoadCartNumbers();
displayCart();

