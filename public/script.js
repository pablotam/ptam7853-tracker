const tasteButton = document.getElementById('create-taste');
const createTaste = document.getElementById('create-your-taste');
const homePage = document.getElementById('home-page');
const addSong = document.getElementById('addsong');

tasteButton.addEventListener('click', () => {
    createTaste.style.display = 'block';
    homePage.style.display = 'none';
    addSong.style.display = 'block';
});
// create taste button 


const backButton = document.getElementById('buttons-sp');


backButton.addEventListener('click', () => {
    createTaste.style.display = 'none';
    homePage.style.display = 'block';
    addSong.style.display = 'none';
    subHeading.style.display ='none';
});
// second page 