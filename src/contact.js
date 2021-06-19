import contactIcon from "./img/6.png";


function loadContact() {
    let contact = document.createElement('div');
    contact.classList.add('contact', 'visible');
    let img = new Image();
    img.src = contactIcon;
    contact.appendChild(img);
    let phoneNumber = document.createElement('p');
    phoneNumber.textContent = "Phone number : +1234789"
    contact.appendChild(phoneNumber);
    let email = document.createElement('p');
    email.textContent = "Email : lorepipsum@ipsum.co"
    contact.appendChild(email);
    let p = document.createElement('p');
    p.textContent = "We are waiting for you !!"
    contact.appendChild(p);
    let visible = document.querySelector('.visible');
    content.removeChild(visible);
    content.appendChild(contact);
}

export { loadContact }