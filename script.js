const Carticon = document.querySelector(".nav-item-icon");
const temp = document.querySelector("#sample").content;
const ProductName = document.querySelector(".Product").innerHTML;
const cartList = document.querySelector(".cart-list");
const cartItems = document.querySelector(".Cart-items");
const nav = document.querySelector(".nav");
const thumbnails = document.querySelectorAll(".thumb");
const mainIMG = document.querySelector(".mainIMG");
const buttons = document.querySelector(".buttons");
let amount = +document.querySelector(".current").innerHTML;
const Price = +document.querySelector(".Price").innerHTML;
const sum = document.querySelector(".Sum");
let sumPrice = 0;
//showing the cart
Carticon.addEventListener("click", () => {
  cartList.classList.toggle("hidden");
});
//underline selected nav-item
const focusNav = document.createElement("div");
focusNav.classList.add("focusNav");
nav.querySelector("#list1").addEventListener("mouseover", () => {
  nav.querySelector("#list1").appendChild(focusNav);
});
nav.querySelector("#list2").addEventListener("mouseover", () => {
  nav.querySelector("#list2").appendChild(focusNav);
});
nav.querySelector("#list3").addEventListener("mouseover", () => {
  nav.querySelector("#list3").appendChild(focusNav);
});
nav.querySelector("#list4").addEventListener("mouseover", () => {
  nav.querySelector("#list4").appendChild(focusNav);
});
nav.querySelector("#list5").addEventListener("mouseover", () => {
  nav.querySelector("#list5").appendChild(focusNav);
});
const arThumb = Array.from(thumbnails);
arThumb.forEach((e) => {
  e.addEventListener("click", () => {
    arThumb.forEach((element) => {
      element.classList.remove("active");
    });
    e.classList.add("active");
    mainIMG.src = `images/image-product-${arThumb.indexOf(e) + 1}.jpg`;
  });
});
buttons.querySelector(".Add").addEventListener("click", () => {
  amount += 1;
  document.querySelector(".current").innerHTML = amount;
});
buttons.querySelector(".remove").addEventListener("click", () => {
  amount === 0 ? alert("cant go below 0") : (amount -= 1),
    (document.querySelector(".current").innerHTML = amount);
});
buttons.querySelector(".cart").addEventListener("click", () => {
  if (amount === 0) {
    return;
  } else {
    console.log(amount * Price);
    const copyTemp = document.importNode(temp, true);
    copyTemp.querySelector(".cartThumb").src = "images/image-product-1.jpg";
    copyTemp.querySelector(".Product").innerHTML = ProductName;
    copyTemp.querySelector(".amount").innerHTML = `amount:${amount}`;
    copyTemp.querySelector(".total").innerHTML = `total:${amount * Price}`;
    cartItems.appendChild(copyTemp);
    sumPrice += amount * Price;
    sum.innerHTML = sumPrice;
    debugger;
    amount = 0;
    document.querySelector(".current").innerHTML = amount;
  }
});
