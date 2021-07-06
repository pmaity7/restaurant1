import './style.css';
import {buildHomePage} from './home.js';
import {buildMenuPage} from './menu.js';
import { buildContactPage } from './contact';
import img10 from './img/img10.jpg';

const navbar = document.createElement('div');
const home = document.createElement('button');
const menu = document.createElement('button');
const contact = document.createElement('button');
const content = document.getElementById('content');
const homeContainer = document.createElement('div');
homeContainer.setAttribute('id', 'homeContainer');
homeContainer.classList.add('container');
const menuContainer = document.createElement('div');
menuContainer.setAttribute('id', 'menuContainer');
menuContainer.setAttribute('hidden', '');
menuContainer.classList.add('container');
const contactContainer = document.createElement('div');
contactContainer.setAttribute('id', 'contactContainer');
contactContainer.classList.add('container');
contactContainer.setAttribute('hidden', '');
navbar.setAttribute('id', 'navbar');
home.textContent = "Home";
home.setAttribute('id', 'homebtn');
home.classList.add('links');
menu.textContent = "Menu";
menu.classList.add('links');
menu.setAttribute('id', 'menubtn');
contact.textContent = "Contact";
contact.classList.add('links');
contact.setAttribute('id', 'contactbtn');
navbar.appendChild(home);
navbar.appendChild(menu);
navbar.appendChild(contact);
//content.style.backgroundImage = "url('../src/img/img10.jpg')";
//content.style.backgroundImage = img10;
const darkBackground = document.createElement('div');
    darkBackground.setAttribute('id', 'darkBackground');
    darkBackground.style.backgroundColor = "rgba(0,0,0,0.5)";
    darkBackground.style.width = "80%";
    darkBackground.style.left = "20%";
    darkBackground.style.top = "0";
    darkBackground.style.height = "100%";
    darkBackground.style.zIndex = "4";
    darkBackground.style.position = "absolute";
    content.appendChild(darkBackground);
document.body.appendChild(navbar);
content.appendChild(homeContainer);
content.appendChild(menuContainer);
content.appendChild(contactContainer);

buildHomePage();
buildMenuPage();
buildContactPage();

/*home.addEventListener('click', (e) => {
    hideOtherContainer(e);
    
});
menu.addEventListener('click', (e) => {
    hideOtherContainer(e);
    
});*/

const btns = document.getElementsByClassName('links');
Array.from(btns).map(btn => btn.addEventListener('click', (e) => {
    hideOtherContainer(e);
}));

function hideOtherContainer(e){
    if(e.target.id == 'homebtn'){
        const homeContainer = document.getElementById('homeContainer');
        homeContainer.removeAttribute('hidden');
        const menuContainer = document.getElementById('menuContainer');
        menuContainer.setAttribute('hidden', '');
        const contactContainer = document.getElementById('contactContainer');
        contactContainer.setAttribute('hidden', '');
    }else if(e.target.id == 'menubtn'){
        const menuContainer = document.getElementById('menuContainer');
        menuContainer.removeAttribute('hidden');
        const homeContainer = document.getElementById('homeContainer');
        homeContainer.setAttribute('hidden', '');
        const contactContainer = document.getElementById('contactContainer');
        contactContainer.setAttribute('hidden', '');
    }else if(e.target.id == "contactbtn"){
        const contactContainer = document.getElementById('contactContainer');
        contactContainer.removeAttribute('hidden');
        const homeContainer = document.getElementById('homeContainer');
        homeContainer.setAttribute('hidden', '');
        const menuContainer = document.getElementById('menuContainer');
        menuContainer.setAttribute('hidden', '');
    }
}