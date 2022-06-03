const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    body.style.overflow = "hidden";
    setTimeout(
        function(){
            loader.classList.add('fondu-out');
            body.style.overflow = "auto";
        }
    ,2400);
});