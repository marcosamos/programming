// Variables
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

 // Functions
function toggleDesktopMenu(){
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    mobileMenu.classList.add("inactive");
    shoppingCartContainer.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940;"

});

productList.push({
    name: "Smart TV",
    price: 1500,
    image: "https://www.lg.com/mx/images/televisores/md07531103/gallery/D-1.jpg;"

});

productList.push({
    name: "Computer",
    price: 2000,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1;"

});

productList.push({
    name: "Telephone",
    price: 2000,
    image: "https://images.pexels.com/photos/10397363/pexels-photo-10397363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1;"

});

productList.push({
    name: "Xbox Series S",
    price: 5000,
    image: "https://images.pexels.com/photos/12718988/pexels-photo-12718988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1;"

});

productList.push({
    name: "Xbox Series X",
    price: 120,
    image: "https://s.yimg.com/os/creatr-uploaded-images/2020-11/00ab1e70-1f19-11eb-bbfb-6d1c65d2b15f;"

});

productList.push({
    name: "Nintendo swich",
    price: 700,
    image: "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1;"

});

productList.push({
    name: "Master PC Race",
    price: 8000,
    image: "https://battler.gg/wp-content/uploads/2021/04/comprar-pc-gamer-2021-battler.jpg;"

});

productList.push({
    name: "Samsung Galaxi S10",
    price: 120,
    image: "https://media.revistagq.com/photos/5ca5f0f3f464888999f49149/1:1/w_900,h_900,c_limit/samsung_galaxy_s10__1099.jpg;"

});

productList.push({
    name: "Samsung Galaxi S22",
    price: 120,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WmpudpOaTwjbWFNqWun5VV2a0JdcB7hd_w&usqp=CAU;"

});

function renderProducts(arr){

    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const producInfo = document.createElement("div");
        producInfo.classList.add("product-info");
    
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = `$ ${product.price}`;
    
        const productName = document.createElement("p");
        productName.innerText = `$ ${product.name}`;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
        
        producInfo.appendChild(productInfoDiv);
        producInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(producInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);