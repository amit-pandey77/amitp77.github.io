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
