import './style.css';

function buildContactPage(){
    
    const content = document.getElementById('content');
    const container = document.getElementById('contactContainer');
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = `Contacts`;
    container.appendChild(h1);
    //content.appendChild(container);
    const p = document.createElement('p');
    p.textContent = "Mobile No:. 9999988888"
    container.appendChild(p);
    p.classList.add('text');
    const p1 = document.createElement('p');
    p1.textContent = "Telephone No:. 02277777777"
    container.appendChild(p1);
    p1.classList.add('text');
    const p2 = document.createElement('p');
    p2.textContent = "Mail us at: indianmomskitchen@email.com"
    container.appendChild(p2);
    p2.classList.add('text');
    container.style.zIndex = 7;
    container.style.position = "absolute";
    container.style.left = "415px";
    container.style.top = "100px";
    container.style.width = "800px";
    container.style.textAlign = "center";
    
}

export {buildContactPage};