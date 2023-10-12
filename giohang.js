const products = [
  {
    id: 1,
    name: 'Giày Nike Air Force 1 Travis Scott White Pk God Factory',
    image: 'Image/nike1.jpg',
    price: '3,400,000'
  },
  {
    id: 2,
    name: 'AF1 Panda – Giày Nike Air Force 1 Panda hàng Siêu Cấp',
    image: 'Image/nike5.jpg',
    price: '2,500,000'
  },
  {
    id: 3,
    name: 'Giày Nike Air Force 1 Low Custom Baby Blue',
    image: 'Image/nike6.png',
    price: '1,600,000'
  },
  {
    id: 4,
    name: 'AF1 Panda – Giày Nike Air Force 1 Panda hàng Siêu Cấp',
    image: 'Image/nike4.jpg',
    price: '470,000'
  }
];
let productInCart = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];


//Index page
function renderProducts () {
  let data = ``;
  products.map(value => {
    data += `
      <div class='col-3'>
        <div class='card-${value.id}'>
          <img src='${value.image}' class='card-img-top' alt=''>
          <div class='card-body'>
            <h5 class='card-title'>${value.name}</h5>
            <p class='card-text'>${value.price}</p>
            <button onclick='addToCart(this)' class='btn btn-primary' id='btnadd-${value.id}'>Add to cart</button>
          </div>
        </div>
      </div>
    `;
  });
  document.getElementById('products').innerHTML = data;
}
renderProducts();

function addToCart(button){
  // var add  = button.parentElement.parentElement.cloneNode(true);
  //   var btnXoa = add.getElementsByTagName("button")[0];
  //   btnXoa.innerText ="xóa";
  //   btnXoa.setAttribute('onclick','xoa(this)');
  //   document.getElementById("cart").appendChild(add);
  // var add=document.getElementById("btnadd").parentElement.parentElement.id;
  // document.getElementById
  var test = document.getElementById('btnadd-1')

  //  tinhTong();
}
function xoa(button){
  var row = button.parentElement.parentElement;
  document.getElementById("cart").removeChild(row);
  tinhTong();
}

function tinhTong(){
  var cart = document.getElementById("products");
  var rows = cart.getElementsByTagName("id");
  var tong = 0;
  for (var i=0; i<productInCart.length; i++ ){
      var cells = rows[i].getItem(products);
      var price = cells[price].innerText.substr(price);
      tong += Number(price);
  }
  document.getElementById("tong").innerText = tong;
  console.log(price);
}
