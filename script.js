import {country} from './data.js';

const flagImg = document.querySelector('.flag-img');
const flagNameBox = document.querySelector('.flag-name-box');
const nextButton = document.querySelector('.next');
const correctEl = document.querySelector('.correct');
const wrongEl = document.querySelector('.wrong');

let srcImage;
let correct = 0;
let wrong = 0;





const startGame = () => {
    const countryArray = [
        country[Math.floor(Math.random() * country.length)],
        country[Math.floor(Math.random() * country.length)],
        country[Math.floor(Math.random() * country.length)]
    ];
    
    srcImage = countryArray[Math.floor(Math.random() * countryArray.length)];

    correctEl.innerHTML = `${correct}`;
    wrongEl.innerHTML = `${wrong}`;
    if(flagImg.complete === false) {
        flagImg.src = `https://countryflagsapi.com/png/${srcImage.toLowerCase()}`;
    } else{
        flagImg.alt = 'image not found, please press next';
    }
    console.log(flagImg.complete ? 'error' : 'all good');

    
    countryArray.map(el => {
        const newElement = document.createElement('p');
        newElement.innerHTML = el;
    
        flagNameBox.appendChild(newElement);
    })
}

startGame();


nextButton.addEventListener('click', () => {
    flagImg.src = '';
    flagNameBox.innerHTML = '';
    
    startGame();
})

flagNameBox.addEventListener('click', (e) => {
    console.log(e.target.innerHTML);
    console.log(srcImage);
    if(e.target.innerHTML === srcImage) {
        e.target.style.boxShadow = 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px';
        correct ++;
        correctEl.innerHTML = `${correct}`;
    } else {
        flagImg.classList.add("animateFalse");
        e.target.style.textDecoration = 'line-through';
        e.target.style.textDecorationColor = 'red';
        wrong ++;
        wrongEl.innerHTML = `${wrong}`;

        setTimeout(()=> {
            flagImg.classList.remove("animateFalse");

        }, 1000)
    }
})


