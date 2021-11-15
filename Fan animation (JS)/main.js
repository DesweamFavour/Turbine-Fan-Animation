const img = document.querySelector('#img')
const radioBtns = document.querySelector('label');
const fs_1 = document.querySelector('#one');
const fs_2 = document.querySelector('#two');
const fs_3 = document.querySelector('#three');
const fs_4 = document.querySelector('#four');
const fs_5 = document.querySelector('#five');



function On() {
    img.style.animationName = `fan`;
    img.style.animationDuration = `3s`;
    console.log('Rotating');

}

function turbineSpeed(x) {
    img.style.animationDuration = `${x}s`;
    radioBtns.style.color = '#000000';
    console.log(`Speed: ${x}s`);
}

function Off() {
    img.style.animationName = `none`;
    console.log('Stopped');
}