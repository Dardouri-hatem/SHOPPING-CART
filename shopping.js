//dropdown Content
const drop =document.querySelector('.dropdown-content');
// console.log(drop);
const Account=document.getElementById("Account");
//AccountButon listner
Account.addEventListener("click",()=>{drop.classList.toggle("active")});


/*Carousel js */
const carouselSlide=document.querySelector('.carousel-slide');
const carouselImages=document.querySelectorAll('.carousel-slide img');

//button carousel
const prevBtn=document.querySelector('#prevBtn');
const nextBtn=document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;  //how much we need to slide

carouselSlide.style.transform = 'translateX(' +(-size * counter)+'px)'; //slide one picture counter =1

//buttonListner
nextBtn.addEventListener('click',()=>{
        if(counter>=carouselImages.length-1) return;
        carouselSlide.style.transition="transform 0.4s ease-in-out";
        counter++
        carouselSlide.style.transform = 'translateX(' +(-size * counter)+'px)'; 

});
prevBtn.addEventListener('click',()=>{

        if(counter<=0) return;
        carouselSlide.style.transition="transform 0.4s ease-in-out";
        counter--
        carouselSlide.style.transform = 'translateX(' +(-size * counter)+'px)'; 
        
        });
//End transition of carousel
carouselSlide.addEventListener('transitionend',()=>{
        if(carouselImages[counter].id==='lastClone'){
        carouselSlide.style.transition="none";
        counter=carouselImages.length -2
        carouselSlide.style.transform = 'translateX(' +(-size * counter)+'px)'; 
}
        if(carouselImages[counter].id==='firstClone'){
        carouselSlide.style.transition="none";
        counter=carouselImages.length - counter
        carouselSlide.style.transform = 'translateX(' +(-size * counter)+'px)'; 
}


})
//remove Button
let removeButton=document.getElementsByClassName("removeBtn");
let divProduct=document.getElementsByClassName("products");
 
for(let button of removeButton){
        button.addEventListener('click',(event)=>{
                var buttonClicked= event.target;
                // console.log(divProduct.length)
                button.parentElement.parentElement.remove()
                // console.log(divProduct.length)
                displayTotal()
                
                


        });
}
// Quantity and PriceTotal

let productNumbers=document.getElementsByClassName("product-numbers");
let plusBtn=Array.from(document.querySelectorAll(".plus-btn"));
let minusBtn=document.getElementsByClassName("minus-btn");
let priceProduct=document.getElementsByClassName("price");
let total=document.getElementsByClassName("total-product");
let totalCost=document.querySelector(".footer-product");
let min=document.getElementById("decrement");
let x=min.nextElementSibling;

// x.value=2;
//increment the input number "+" and calcul total price

for(let i=0; i<plusBtn.length;i++){
        
        plusBtn[i].addEventListener('click',()=>{
                let x=plusBtn[i].previousElementSibling.value;
                console.log(x)
                x=parseInt(x);
                x++;
                plusBtn[i].previousSibling.value=x;
                let prixUnit=priceProduct[i].textContent;
                prixUnit=parseInt(prixUnit);

        console.log(prixUnit*x);
        total[i].innerHTML = prixUnit*x + "$";
        displayTotal()

        })
}

//Decrement the input number "-" and calcul total price
for(let i=0; i<minusBtn.length;i++){ 
      minusBtn[i].addEventListener('click',()=>{
              
        let x=minusBtn[i].nextElementSibling.value;
        if(x>1){
        x=parseInt(x);
        x-=1;
        minusBtn[i].nextElementSibling.value=x;
        let prixUnit=priceProduct[i].textContent;
        prixUnit=parseInt(prixUnit);

        console.log(prixUnit*x);
        total[i].innerHTML = prixUnit*x + "$";
        displayTotal()
        }
})
}

function calculTotal(){
        var TotCost=0 ;
for (let i of total){
        x=i.textContent;
        x=parseInt(x)
        //  console.log("voila",x);
        // console.log(typeof x)
        TotCost +=x;      
}
return TotCost
}
//Display Totat Price of Products
function displayTotal(){
        totalCost.innerHTML="<i class='fas fa-shopping-basket'></i>  <h2> Total Price : <h2>"+calculTotal()+"$";
}
displayTotal()
