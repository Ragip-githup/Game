let index = 0;

const btn = document.querySelector('.btn');
const puantablo = document.querySelector("puan");



btn.addEventListener('mouseover', () => {
    const randomIndex = parseInt(Math.random() * 300);


    btn.style.top = randomIndex + 'px';
    btn.style.right = randomIndex + 'px';


});

btn.addEventListener('mouseover', () => {
    const randomIndex = parseInt(Math.random() * 300);


    btn.style.botton = randomIndex + 'px';
    btn.style.left = randomIndex + 'px';


});


function changeColors() {

    let colors = ["red", "blue", "orange", "yellow", "green", "purple"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if (index > colors.length - 1) {
        index = 0;
    }
}



