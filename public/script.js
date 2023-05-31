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

addSongForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const elementsToHide = [createTaste, addSongForm, tastePage];
    const elementsToShow = [homePage];

    elementsToHide.forEach((element) => {
        element.classList.add("hidden");
    });

    elementsToShow.forEach((element) => {
        element.classList.remove("hidden");
    });

    const popupText = document.getElementById("popupText");
    popupText.textContent = "SONG SAVED";

    const popup = document.getElementById("popup");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
});
// pop up confirmation

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
    );

});
// sets up variables

function getDateFormatted(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}
// makes date and time only year, month and day

function displaySongs() {

    songList.innerHTML = "";

    let localSongs = JSON.parse(localStorage.getItem('songs'));

    if (localSongs !== null) {

        localSongs.forEach((song) => {

            console.log(song)

            let item = document.createElement("li");
            item.setAttribute("data-id", song.id);
            item.innerHTML = `<p><strong>${song.name}</strong> ${song.duration}<br>${song.artist}<br><em>${getDateFormatted(song.date)}</em></p>`;

            let img = document.createElement("img");
            img.src = song.photo || "images/placeholder.svg";
            item.appendChild(img);
            // adds photo to list 

            songList.appendChild(item);
            addSongForm.reset();

            let delButton = document.createElement("button");
            let delButtonText = document.createTextNode("Remove");
            delButton.appendChild(delButtonText);
            item.appendChild(delButton);

            delButton.addEventListener("click", function (event) {

                localSongs.forEach(function (songArrayElement, songArrayIndex) {
                    if (songArrayElement.id == item.getAttribute("data-id")) {
                        localSongs.splice(songArrayIndex, 1)
                    }
                });

                localStorage.setItem('songs', JSON.stringify(localSongs));
                displaySongs();

            });

        });
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
        photo: photo || "images/placeholder.svg",
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

    localStorage.setItem('songs', JSON.stringify(localSongs));

    displaySongs();
}

displaySongs();

// Form