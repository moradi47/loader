let preload = document.querySelector('.preload');

function beforeunloadHandler(){
    preload.style.display = 'flex';
}