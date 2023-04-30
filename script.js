const albums = [
    {
        id: 1,
        title: "The Only Place",
        band: "Best Coast",
        img:
            "img/bestcoast-theonlyplace.jpg",
        info:
            "Release date: May 15, 2012"
    },
    {
        id: 2,
        title: "Cults",
        band: "Cults",
        img:
            "img/cults-cults.jpg",
        info:
            "Release date: June 7, 2011"
    },
    {
        id: 3,
        title: "Fantasies",
        band: "Metric",
        img:
            "img/metric-fantasies.jpg",
        info:
            "Release date: April 7, 2009"
    },
    {
        id: 4,
        title: "Fever To Tell",
        band: "Yeah Yeah Yeahs",
        img:
            "img/yyys-fevertotell.jpg",
        info:
            "Release date: April 29, 2003"
    }
];

const img = document.getElementById("band-img");
const title = document.getElementById("title");
const band = document.getElementById("band");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showAlbum(currentItem);
});

function showAlbum(i) {
    const item = albums[i];
    img.src = item.img;
    title.textContent = item.title;
    band.textContent = item.band;
    info.textContent = item.info;
};

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > albums.length -1) {
        currentItem = 0;
    }
    showAlbum(currentItem);

});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem  < 0) {
        currentItem = albums.length -1;
    }
    showAlbum(currentItem);
})