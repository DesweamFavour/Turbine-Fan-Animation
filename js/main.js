const img = document.querySelector('#img')
const radioBtns = document.querySelector('label');

let x;
function turbineSpeed(x) {
    img.style.animationDuration = `${x}s`;
    radioBtns.style.color = '#000000';
    console.log(`Speed: ${x}s`);
}

function On() {
    img.style.animationName = `fan`;
    img.style.animationDuration = turbineSpeed(x) + 's';
    console.log('Rotating');
    console.log(turbineSpeed(x));
}

function Off() {
    img.style.animationName = `none`;
    console.log('Stopped');
}