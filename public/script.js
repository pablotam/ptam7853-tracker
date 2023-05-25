const tasteButton = document.getElementById('create-taste')
const createTaste = document.getElementById('create-your-taste')
const homePage = document.getElementById('home-page')

tasteButton.addEventListener('click', () => {
    createTaste.style.display = 'block';
    homePage.style.display = 'none'; 
});
// create taste button 


const backButton = document.getElementById('buttons-sp')


backButton.addEventListener('click', () => {
    createTaste.style.display = 'none';
    homePage.style.display = 'block'; 
});
// second page 