var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');
function register() {
  x.style.left = '-400px';
  y.style.left = '50px';
  z.style.left = '110px';
}
function login() {
  x.style.left = '50px';
  y.style.left = '450px';
  z.style.left = '0px';
}
var modal = document.getElementById('login-form');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function myFunction() {
  var un = document.forms["myForm"]["Uname"].value;
  var pw = document.forms["myForm"]["Pass"].value;
  if (un == "abc.lol@gmail.com" && pw == "ilovejohncena") {
    window.open('new.html');
    alert("Login succesful")
  }
  else {
    alert("Invalid Password or Email")
  }
  return true;
}


function loginFunction() {
  window.open("login.html")
  target = "_blank"
}
function logoutFunction() {
  location.replace("index.html")
  target = "_blank"
}



const data = [
  {
    img: "https://m.media-amazon.com/images/I/61uOSq1OJ8L._SX425_.jpg",
    title: "God of War",
    price: 59.99,
    sold: "521,000d",
    inCart: 0
  },
  {
    img: "https://asia.playstation.com/content/dam/pscom/hk/latest-news/2019/20190827_cod_modern_warfare/codmw-packshot.jpg",
    title: "Call of Duty",
    price: 59.99,
    sold: "581,180",
    inCart: 0
  },
  {
    img: "https://m.media-amazon.com/images/I/91T0XQv8gEL._SL1500_.jpg",
    title: "GTA 5",
    price: 59.99,
    sold: "1.000.180",
    inCart: 0
  },

  {
    img: "https://product.hstatic.net/1000190106/product/81ucwruvjol._sl1500__d186f90cc08d40088d6496b754f54a90_master.jpg",
    title: "FIFA 2021",
    price: 59.99,
    sold: "951,710",
    inCart: 0
  },
  {
    img: "https://m.media-amazon.com/images/I/818I9yzsRDL._SL1500_.jpg",
    title: "NBA 2k 21",
    price: 59.99,
    sold: "891,120",
    inCart: 0
  },
];

let productsHTML = "";
let idAllProducts = document.getElementById("allProducts");

for (products of data) {
  productsHTML += `
  <div class="item item-1">
          <img alt="Qries" src="${products.img}" height="200px"
            class="image" id="img" style="margin-left: 3px; margin-right: 3px">
          <hr style=" height: 4px; background-color: #fc6a03; border: none;">

          <div class="product-title">
            <h2 style="color: #0080ff;" id="title">${products.title}</h2>
            <p style="margin-bottom: 3px;">${products.price}</p>
            <i style="color: #ffbf00; font-size: 22px; margin-left: -7px;" class="fas fa-star"></i>
            <i style="color: #ffbf00; font-size: 22px;" class="fas fa-star"></i>
            <i style="color: #ffbf00; font-size: 22px;" class="fas fa-star"></i>
            <i style="color: #ffbf00; font-size: 22px;" class="fas fa-star"></i>
            <i style="color: #ffbf00; font-size: 22px;" class="fas fa-star"></i>
            <p style="color: orange;" id="sold">Have sold ${products.sold} </p>
            <button class="product-button" id="carts">
              <i class="fas fa-shopping-cart" style="color: white; font-size: 15px;"> <span
                  style="font-family: 'Atkinson Hyperlegible', sans-serif;">Add to Cart</span> </i>
            </button>
          </div>
        </div>
  `;
}
console.log(productsHTML);

idAllProducts.innerHTML = productsHTML;




let carts = document.querySelectorAll('#carts');


for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(data[i]);
    totalCost(data[i])
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.cart-button span').textContent = productNumbers;
  }
}

function cartNumbers(data) {

  let productNumbers = localStorage.getItem('cartNumbers');


  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector('.cart-button span').textContent = productNumbers + 1;
    ;
  } else {
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.cart-button span').textContent = 1;
  }

  setItems(data);
}
function setItems(data) {
  let cartItems = localStorage.getItem('productsIncart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {

    if (cartItems[data.title] == undefined) {
      cartItems = {
        ...cartItems,
        [data.title]: data
      }
    }
    cartItems[data.title].inCart += 1;
  } else {
    data.inCart = 1;
    cartItems = {
      [data.title]: data
    }

  }


  localStorage.setItem("productsIncart", JSON.stringify(cartItems));
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
  let cartItems = localStorage.getItem("productsIncart");
  cartItems = JSON.parse(cartItems);
  let productcart = document.querySelector('.list');

  //console.log(cartItems);
  if (cartItems && productcart) {
    productcart.innerHTML = '';
    Object.values(cartItems).map(products => {
      productcart.innerHTML +=
        `
    
        <div id="shopping-cart">
        <!--List Cart-->
        <tr>
        <td>
          <div class="product-cart">
            <img src="${products.img}" style="max-height: 100px;">
            <div>
              <p> ${products.title}</p>
              <p class="price form-control" disabled> Price= $${products.price}</p>
              <br>
              <a href="">Remove</a>
            </div>
          </div>
        </td>
        <td class="product-quantity">
          Quantity: ${products.inCart}
        </td>
        <td class="product-subtotal"> 
        $ <span class="price form-control" id="amount"></span>
        ${products.inCart * products.price}
        </td>
      </tr>
      </div>
      <div class="cart-input">
        <input type="button" value="Save" onclick="SaveItem()">
        <input type="button" value="Update" onclick="ModifyItem()">
        <input type="button" value="Delete" onclick="RemoveItem()">
      </div>
        `
    })







  }
}

onLoadCartNumbers();
displayCart();


















