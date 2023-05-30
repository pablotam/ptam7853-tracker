const tasteButton = document.getElementById('create-taste');
const createTaste = document.getElementById('create-your-taste');
const homePage = document.getElementById('home-page');
const backButton = document.getElementById('buttons-sp');
const addSong = document.getElementById('addsong');
const mtButton = document.getElementById('my-taste')
const tastePage = document.getElementById('my-taste-page')
const backButton2 = document.getElementById('buttons-tp');


tasteButton.addEventListener('click', () => {
    createTaste.style.display = 'block';
    homePage.style.display = 'none';
    addSong.style.display = 'block';
});
// home to second page


backButton.addEventListener('click', () => {
    createTaste.style.display = 'none';
    homePage.style.display = 'block';
    addSong.style.display = 'none';
});
// second page back to home 


mtButton.addEventListener('click', () => {
    tastePage.style.display = 'block';
    createTaste.style.display = 'none';
    homePage.style.display = 'none';
    addSong.style.display = 'none';
});
// home to third page 

backButton2.addEventListener('click', () =>{
    tastePage.style.display = 'none';
    createTaste.style.display = 'none';
    homePage.style.display = 'block';
    addSong.style.display = 'none';
});
// third page to home 

