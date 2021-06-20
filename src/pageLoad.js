import descriptionIcon from "./img/4.png";
import descriptionIcon_ from "./img/5.png";

function loadNav() {
    let content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    //create navbar
    let nav = document.createElement('nav');
    let title = document.createElement('h1');
    title.textContent = "The Restaurant";
    nav.appendChild(title);
    let ul = document.createElement('ul');
    let navMenu = ['Home', 'Menu', 'Contact'];
    for (let i = 0; i < navMenu.length; i++) {
        let menuItem = document.createElement('li');
        if(i === 0) menuItem.classList.add('active');
        menuItem.textContent = navMenu[i];
        ul.appendChild(menuItem);
    }
    nav.appendChild(ul);
    //add to screen
    content.appendChild(nav);
}

function loadDescription() {
    let content = document.querySelector('#content');
    //create Description
    let div = document.createElement('div');
    div.classList.add('description', 'visible');
    const img_ = new Image();
    img_.src = descriptionIcon_;
    div.appendChild(img_);
    let p = document.createElement('p');
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, nibh convallis rhoncus consequat, massa nunc blandit ipsum, in ultrices enim nibh id."
    div.appendChild(p);
    const img = new Image();
    img.src = descriptionIcon;
    div.appendChild(img);
    let visible = document.querySelector('.visible');
    if (visible) content.removeChild(visible);
    content.appendChild(div);
}

function loadContent() {
    loadNav();
    loadDescription();
}




export { loadContent, loadDescription }
