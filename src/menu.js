import './style.css';

function buildMenuPage(){
    const content = document.getElementById('content');
    const container = document.getElementById('menuContainer');
    //const darkBack = document.getElementById('darkBackground');
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent = `Menu`;
    container.appendChild(h1);
    container.style.zIndex = 7;
    container.style.position = "absolute";
    container.style.left = "390px";
    container.style.top = "50px";
    container.style.textAlign = "center";
    const foodsContainer = document.createElement('div');
    
    for(let i=0; i<10; i++){

        const div = document.createElement('div');
        const imgPopup = document.createElement('div');
        imgPopup.setAttribute('hidden', '');
        imgPopup.setAttribute('id', `imgPop${i}`);
        div.setAttribute('id', `food${i}`);
        imgPopup.classList.add('imgPopup');
        imgPopup.style.left = `${i+20}%`;
        div.classList.add('foods');
        div.style.backgroundImage = `url('../src/img/img${i}.jpg')`;
        imgPopup.style.backgroundImage = `url('../src/img/img${i}.jpg')`;
        div.addEventListener('mouseover', () => {
            imgPopup.removeAttribute('hidden');
        })
        div.addEventListener('mouseout', () => {
            imgPopup.setAttribute('hidden', '');
        })
        foodsContainer.appendChild(div);
        foodsContainer.appendChild(imgPopup);
    }
    foodsContainer.setAttribute('id', 'foodsContainer');
    
    container.appendChild(foodsContainer);
    //content.appendChild(container);
}

export {buildMenuPage};