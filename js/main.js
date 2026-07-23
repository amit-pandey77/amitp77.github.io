/*=====================================================
  CYBERSHIELD PORTFOLIO
  MAIN.JS
  Part 1
======================================================*/

"use strict";

/*=====================================================
DOM ELEMENTS
======================================================*/

const loader = document.getElementById("loader");

const navbar = document.getElementById("navbar");

const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("navLinks");

const menuLinks = document.querySelectorAll(".nav-links a");

/*=====================================================
LOADER
======================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.5s";

    }, 700);

});

/*=====================================================
STICKY NAVBAR
======================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("navbar-scrolled");

    }

    else{

        navbar.classList.remove("navbar-scrolled");

    }

});

/*=====================================================
MOBILE MENU
======================================================*/

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navLinks.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

/*=====================================================
CLOSE MENU AFTER CLICK
======================================================*/

menuLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        hamburger.classList.remove("active");

        navLinks.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});

/*=====================================================
CLICK OUTSIDE MENU
======================================================*/

document.addEventListener("click",(event)=>{

    const insideMenu=

    navLinks.contains(event.target);

    const insideButton=

    hamburger.contains(event.target);

    if(

        !insideMenu &&

        !insideButton &&

        navLinks.classList.contains("active")

    ){

        navLinks.classList.remove("active");

        hamburger.classList.remove("active");

        document.body.classList.remove("menu-open");

    }

});

/*=====================================================
SMOOTH SCROLL
======================================================*/

menuLinks.forEach(anchor=>{

    anchor.addEventListener("click",(e)=>{

        const href=

        anchor.getAttribute("href");

        if(

            href.startsWith("#")

        ){

            e.preventDefault();

            document.querySelector(href)

            ?.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

/*=====================================================
ACTIVE NAVIGATION
======================================================*/

const sections=

document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=

        section.offsetTop-150;

        if(

            pageYOffset>=sectionTop

        ){

            current=

            section.getAttribute("id");

        }

    });

    menuLinks.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href")==="#"+current

        ){

            link.classList.add("active");

        }

    });

});

/*=====================================================
ESC KEY CLOSE MENU
======================================================*/

document.addEventListener("keydown",(e)=>{

    if(

        e.key==="Escape"

    ){

        hamburger.classList.remove("active");

        navLinks.classList.remove("active");

    }

});

/*=====================================================
LOCK BODY SCROLL
======================================================*/

const observer=new MutationObserver(()=>{

    if(

        navLinks.classList.contains("active")

    ){

        document.body.style.overflow="hidden";

    }

    else{

        document.body.style.overflow="";

    }

});

observer.observe(navLinks,{

attributes:true

});

/*=====================================================
END
======================================================*/

/*=====================================================
MAIN.JS
Part 2
======================================================*/

/*=====================================================
ELEMENTS
======================================================*/

const progressBar = document.getElementById("scroll-progress");

const scrollTopBtn = document.getElementById("scrollTopBtn");

const statNumbers = document.querySelectorAll(".stats h2");

const revealItems = document.querySelectorAll(

".card, .profile-card, .hero-left, .hero-right"

);

/*=====================================================
SCROLL PROGRESS
======================================================*/

function updateProgressBar(){

const scrollTop = window.scrollY;

const documentHeight =

document.documentElement.scrollHeight -

window.innerHeight;

const progress =

(scrollTop / documentHeight) * 100;

progressBar.style.width = progress + "%";

}

/*=====================================================
BACK TO TOP
======================================================*/

function toggleScrollButton(){

if(window.scrollY > 400){

scrollTopBtn.classList.add("show");

}else{

scrollTopBtn.classList.remove("show");

}

}

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=====================================================
COUNTER ANIMATION
======================================================*/

function animateCounter(element){

const original =

element.innerText.replace("+","");

const target = parseInt(original);

if(isNaN(target)) return;

let current = 0;

const increment =

Math.max(1,Math.ceil(target/80));

const timer = setInterval(()=>{

current += increment;

if(current >= target){

current = target;

clearInterval(timer);

}

element.innerText = current + "+";

},20);

}

const counterObserver =

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(

entry.target

);

counterObserver.unobserve(entry.target);

}

});

},{

threshold:0.5

});

statNumbers.forEach(item=>{

counterObserver.observe(item);

});

/*=====================================================
REVEAL ON SCROLL
======================================================*/

const revealObserver =

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("revealed");

}

});

},{

threshold:.15

});

revealItems.forEach(item=>{

item.classList.add("reveal");

revealObserver.observe(item);

});

/*=====================================================
PARALLAX HERO
======================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const offset = window.scrollY;

if(hero){

hero.style.transform =

`translateY(${offset * 0.08}px)`;

}

});

/*=====================================================
OPTIMIZED SCROLL EVENTS
======================================================*/

let ticking = false;

window.addEventListener("scroll",()=>{

if(!ticking){

requestAnimationFrame(()=>{

updateProgressBar();

toggleScrollButton();

ticking = false;

});

ticking = true;

}

},
{passive:true});

updateProgressBar();

toggleScrollButton();

/*=====================================================
END PART 2
======================================================*/
