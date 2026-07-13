// ==========================
// Leon County RP Website JS
// ==========================

// Fade in animations

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.stats div,.section h2").forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

// Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Animated Statistics

const counters=document.querySelectorAll(".stats h1");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const trigger=stats.offsetTop-500;

if(window.scrollY>trigger && !started){

started=true;

counters.forEach(counter=>{

const target=counter.innerText;

if(isNaN(parseInt(target))) return;

let count=0;

const speed=Math.ceil(parseInt(target)/100);

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target;

}else{

counter.innerText=count;

requestAnimationFrame(update);

}

};

update();

});

}

});

// Header Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 0 20px rgba(0,0,0,.5)";

}else{

header.style.boxShadow="none";

}

});

// Gold Button Animation

document.querySelectorAll(".gold-btn,.blue-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px) scale(1)";

});

});

// Random Motto

const sayings=[

"Protect • Serve • Roleplay",

"Where Realism Meets Community",

"Professional FiveM Experience",

"Your Story Starts Here"

];

const hero=document.querySelector(".hero p");

if(hero){

setInterval(()=>{

hero.innerText=sayings[Math.floor(Math.random()*sayings.length)];

},5000);

}
