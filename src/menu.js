import Image_1 from "./img/1.png";
import Image_2 from "./img/1.png";
import Image_3 from "./img/1.png";
import Image_4 from "./img/1.png";
import Image_5 from "./img/1.png";
import Image_6 from "./img/1.png";
import Image_7 from "./img/1.png";
import Image_8 from "./img/1.png";
import Image_9 from "./img/1.png";
import Image_10 from "./img/1.png";
import Image_11 from "./img/1.png";

const Plate = (title, description, picture, price) => {
    return {
        title,
        description,
        picture,
        price
    }
}

function loadMenu() {
    const imgs = [Image_1, Image_2, Image_3, Image_4, Image_5, Image_6, 
                  Image_7, Image_8, Image_9, Image_10, Image_11];
    
    const pictures = imgs.map((img) => {
        let picture = new Image();
        picture.src = img;
        return picture;
    })
    
    const titles = ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor",
                    "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor",
                    "Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem ipsum dolor"];
    
    const descriptions = ["Phasellus condimentum, augue nec.",
                          "Phasellus condimentum, augue nec.",
                          "Phasellus condimentum, augue nec.",
                          "Phasellus condimentum, augue nec.",
                          "Phasellus condimentum, augue nec.",
                          "Phasellus condimentum, augue nec.",
                          "Phasellus condimentum, augue nec.",
                          "Phasellus condimentum, augue nec.",
                          "Phasellus condimentum, augue nec.",
                          "Phasellus condimentum, augue nec.",
                          "Phasellus condimentum, augue nec."]
    
    const prices = ["1$", "10$", "4$", "1$", "2$", "1$", "10$", "4$", "1$", "2$", "4$" ]

    let content = document.querySelector('#content');
    let plates = [];
    for(let i = 0; i < pictures.length; i++) {
        let plate = Plate(titles[i], descriptions[i], pictures[i], prices[i]);
        plates.push(plate);
    }

    let menu = document.createElement('div');
    menu.classList.add("menu", "visible");
    for (let i = 0; i < plates.length; i++) {
        let div = document.createElement('div');
        div.classList.add("card");
        let picture = plates[i].picture;
        div.appendChild(picture);
        let title = document.createElement('h2');
        title.textContent = plates[i].title;
        div.appendChild(title);
        let p = document.createElement('p');
        p.textContent = plates[i].description;
        div.appendChild(p);
        let span = document.createElement('span');
        span.textContent = plates[i].price;
        div.appendChild(span);
        menu.appendChild(div);
    }
    let visible = document.querySelector('.visible');
    content.removeChild(visible);
    content.appendChild(menu);

}

export { loadMenu };