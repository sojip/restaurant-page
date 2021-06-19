import './reset.css';
import './style.css';
import { loadContent, loadDescription } from './pageLoad.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';


loadContent();

let navItems = document.querySelectorAll("li");
navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        let activeItem = document.querySelector(".active");
        activeItem.classList.remove('active');
        navItem.classList.add("active");
        if (navItem.textContent.toLowerCase() === "menu") loadMenu();
        else if (navItem.textContent.toLowerCase() === "home") loadDescription();
        else if (navItem.textContent.toLowerCase() === "contact") loadContact();
    })
})

window.addEventListener('wheel', function(e) {
    let menu = document.querySelector(".menu");
    if(menu) {
        if (e.deltaY > 0) menu.scrollLeft += 150;
        else menu.scrollLeft -= 150;
    }
    return   
  });
