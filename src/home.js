import './style.css';

function buildHomePage(){
    
    const content = document.getElementById('content');
    const container = document.getElementById('homeContainer');
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = `Pallavi's Kitchen`;
    container.appendChild(h1);
    //content.appendChild(container);
    const p = document.createElement('p');
    p.textContent = "We specialise in Indian and Indo-Chinese cuisine. \
    You'll get authentic Indian tastes and aroma that you cannot forget.\
    We offer famous foods from various cities of India."
    container.appendChild(p);
    p.classList.add('text');
    const p1 = document.createElement('p');
    p1.textContent = "We are open on all days.\
    From morning 11 am to 10pm."
    container.appendChild(p1);
    p1.classList.add('text');
    const p2 = document.createElement('p');
    p2.textContent = "Location: NH200, Maharashtra, India."
    container.appendChild(p2);
    p2.classList.add('text');
    container.style.zIndex = 7;
    container.style.position = "absolute";
    container.style.left = "390px";
    container.style.top = "50px";
    container.style.textAlign = "center";
    
}

export {buildHomePage};