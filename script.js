// US Collection Website Script

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {

            e.preventDefault();

            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });

        }

    });
});

// Hero button animation
const btn = document.querySelector(".btn");

if(btn){

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

}

// Product Card Hover Effect
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 25px rgba(212,175,55,.5)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});

// Simple Search Function (Future Ready)

function searchProducts(){

let input=document.getElementById("search");

if(!input) return;

let filter=input.value.toUpperCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let title=card.querySelector("h3").innerText;

if(title.toUpperCase().indexOf(filter)>-1){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";

topBtn.style.right="20px";

topBtn.style.bottom="20px";

topBtn.style.width="50px";

topBtn.style.height="50px";

topBtn.style.border="none";

topBtn.style.borderRadius="50%";

topBtn.style.background="#d4af37";

topBtn.style.color="#000";

topBtn.style.fontSize="22px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

console.log("US Collection Website Loaded Successfully");
