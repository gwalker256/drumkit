const boomSound = document.getElementById("boomSound");
const clapSound = document.getElementById("clapSound");
const hihatSound = document.getElementById("hihatSound");
const kickSound = document.getElementById("kickSound");
const openhatSound = document.getElementById("openhatSound");
const rideSound = document.getElementById("rideSound");
const snareSound = document.getElementById("snareSound");
const tinkSound = document.getElementById("tinkSound");
const tomSound = document.getElementById("tomSound");

document.addEventListener("keydown",(e)=>{
    if (e.key=="a"){boomSound.play();}
    else if (e.key=="s"){clapSound.play();}
    else if (e.key=="d"){hihatSound.play();}
    else if (e.key=="f"){kickSound.play();}
    else if (e.key=="g"){openhatSound.play();}
    else if (e.key=="h"){rideSound.play();}
    else if (e.key=="j"){snareSound.play();}
    else if (e.key=="k"){tinkSound.play();}
    else if (e.key=="l"){tomSound.play();} 
})

const kickClick = document.getElementById("kickClick");
kickClick.addEventListener("click",()=>{kickSound.play()});

const hihatClick = document.getElementById("hihatClick");
hihatClick.addEventListener("click",()=>{hihatSound.play()});

const tomClick = document.getElementById("tomClick");
tomClick.addEventListener("click",()=>{tomSound.play()});

const snareClick = document.getElementById("snareClick");
snareClick.addEventListener("click",()=>{snareSound.play()});

const rideClick = document.getElementById("rideClick");
rideClick.addEventListener("click",()=>{rideSound.play()});

const openhatClick = document.getElementById("openhatClick");
openhatClick.addEventListener("click",()=>{openhatSound.play()});

const boomClick = document.getElementById("boomClick");
boomClick.addEventListener("click",()=>{boomSound.play()});