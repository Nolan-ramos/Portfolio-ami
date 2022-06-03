var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

const slide_projet = document.querySelector("#slide_projet");
function open_slide_projet(){
    body.style.overflow = "hidden";
    if(modal_theme.style.right == "0px" || !modal_theme.style.right){
        close_theme();
        setTimeout(
            function(){
                slide_projet.style.right = "0";
                setTimeout(
                    function(){
                        body.style.left = "-300px";
                    }
                ,300);
            }
        ,500);
    }
    else if(modal_nav.style.right == "0px" || !modal_nav.style.right){
        close_nav();
        setTimeout(
            function(){
                slide_projet.style.right = "0";
                setTimeout(
                    function(){
                        body.style.left = "-300px";
                    }
                ,300);
            }
        ,500);
    }
    else{
        slide_projet.style.right = "0";
        setTimeout(
            function(){
                body.style.left = "-300px";
            }
        ,300);
    }
}

function close_slide_projet(){
    slide_projet.style.right = "-100%";
    body.style.left = "0px";
    body.style.overflow = "auto";
}