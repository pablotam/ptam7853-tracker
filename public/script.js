const tasteButton = document.getElementById('create-taste');
const createTaste = document.getElementById('create-your-taste');
const homePage = document.getElementById('home-page');
const backButton = document.getElementById('buttons-sp');
const addSongForm = document.getElementById('add-song');
const mtButton = document.getElementById('my-taste')
const tastePage = document.getElementById('my-taste-page')
const backButton2 = document.getElementById('buttons-tp');
const songList = document.getElementById('song-list');


tasteButton.addEventListener('click', () => {
    createTaste.style.display = 'block';
    homePage.style.display = 'none';
    addSongForm.style.display = 'block';
});
// home to second page


backButton.addEventListener('click', () => {
    createTaste.style.display = 'none';
    homePage.style.display = 'block';
    addSongForm.style.display = 'none';
});
// second page back to home 


mtButton.addEventListener('click', () => {
    tastePage.style.display = 'block';
    createTaste.style.display = 'none';
    homePage.style.display = 'none';
    addSongForm.style.display = 'none';
});
// home to third page 

backButton2.addEventListener('click', () => {
    tastePage.style.display = 'none';
    createTaste.style.display = 'none';
    homePage.style.display = 'block';
    addSongForm.style.display = 'none';
});
// third page to home

// Buttons + General Formatting 

addSongForm.addEventListener("submit", function (event) {
    event.preventDefault();

    addSong(
        addSongForm.elements.songName.value,
        addSongForm.elements.songArtist.value,
        addSongForm.elements.songAlbum.value,
        addSongForm.elements.songGenre.value,
        addSongForm.elements.songDuration.value,
        addSongForm.elements.songPhoto.value,
        addSongForm.elements.dateAdded.value,
    )
})

// sets up variables

function displaySongs() {

    songList.innerHTML = "";

    let localSongs = JSON.parse(localStorage.getItem('songs'));

    if (localSongs !== null) {

        localSongs.forEach((song) => {

            console.log(song)

            let item = document.createElement("li");
            item.setAttribute("data-id", song.id);
            item.innerHTML = `<p><strong>${song.name}</strong><br>${song.artist}<br>${song.date}</p>`;
            songList.appendChild(item);

            addSongForm.reset();

            let delButton = document.createElement("button");
            let delButtonText = document.createTextNode("Delete");
            delButton.appendChild(delButtonText);
            item.appendChild(delButton);

            delButton.addEventListener("click", function (event) {

                localSongs.forEach(function (songArrayElement, songArrayIndex) {
                    if (songArrayElement.id == item.getAttribute("data - id")) {
                        localSongs.splice(songArrayIndex, 1)
                    }
                })

                localStorage.setItem('songs', JSON.stringify(localSongs));
            })

        })
    }
}
// creates and adds songs to list + delete button 


function addSong(name, artist, album, genre, duration, photo, date) {

    let song = {
        name,
        artist,
        album,
        genre,
        duration,
        photo,
        id: Date.now(),
        date: new Date().toISOString(),
    }

    let localSongs = JSON.parse(localStorage.getItem('songs')) || [];

    if (localSongs == null) {
        localSongs = [song];
    } else {
        if (localSongs.find(element => element.id === song.id)) {
            console.log('Song ID already exists');
        } else {
            localSongs.push(song);
        }
    }

    localStorage.setItem('songs', JSON.stringify(localSongs))

    displaySongs();
}

displaySongs();

// Form 




