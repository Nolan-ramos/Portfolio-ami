// empecher le scroll du body quand on est dans la nav
var scrollablenav = document.querySelector('.scrollablenav');
scrollablenav.addEventListener('wheel', function(event) {
    var deltaY = event.deltaY;
    var contentHeight = scrollablenav.scrollHeight;
    var visibleHeight = scrollablenav.offsetHeight;
    var scrollTop = scrollablenav.scrollTop;
    if (scrollTop === 0 && deltaY < 0)
        event.preventDefault();
    else if (visibleHeight + scrollTop === contentHeight && deltaY > 0)
        event.preventDefault();
});

// modal nav
const button_nav = document.querySelector('#button_nav');
const modal_nav = document.querySelector('#modal_nav');
const content_article = document.querySelectorAll('.content_article');
const lien_nav = document.querySelectorAll('.lien_nav');
const icon_nav = document.querySelector('#icon_nav');
function open_nav(){
    if(modal_theme.style.right == "0px" || !modal_theme.style.right){
        close_theme();
    }
    modal_nav.style.right = "0";
    button_nav.style.right = "185px"; button_nav.style.transform = "rotate(180deg)";
    body.style.left = "-280px";
    modal_nav.classList.add("navopen");
    icon_nav.classList.add("uil-times");
    icon_nav.classList.remove("uil-align-center-alt");
}
function close_nav(){
    modal_nav.style.right = "-280px";
    button_nav.style.right = "25px"; button_nav.style.transform = "rotate(0deg)";
    body.style.left = "0";
    modal_nav.classList.remove("navopen");
    icon_nav.classList.add("uil-align-center-alt");
    icon_nav.classList.remove("uil-times");
}
for(i=0;i <lien_nav.length; i++){
    lien_nav[i].onclick = function(){
        close_nav();
    }
}
button_nav.addEventListener("click", function(){
    if(modal_nav.style.right == "-280px" || !modal_nav.style.right){
        open_nav();
    }
    else{
        close_nav();
    }
});