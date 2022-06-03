// empecher le scroll du body quand on est dans la div du theme 
var scrollable = document.querySelector('.scrollable');
scrollable.addEventListener('wheel', function(event) {
    var deltaY = event.deltaY;
    var contentHeight = scrollable.scrollHeight;
    var visibleHeight = scrollable.offsetHeight;
    var scrollTop = scrollable.scrollTop;
    if (scrollTop === 0 && deltaY < 0)
        event.preventDefault();
    else if (visibleHeight + scrollTop === contentHeight && deltaY > 0)
        event.preventDefault();
});

// modal theme
const theme = document.querySelector('#theme');
const hexagon_theme = document.querySelector('#hexagon_theme');
const modal_theme = document.querySelector('#modal_theme');
const txt_hexagon = document.querySelector('#txt_hexagon');
const article_flex = document.querySelectorAll('.article_flex');
const title_article = document.querySelectorAll('.title_article');
function open_theme(){
    if(modal_nav.style.left == "0px" || !modal_nav.style.left){
        close_nav();
    }
    modal_theme.style.right = "0";
    hexagon_theme.style.right = "242.5px"; hexagon_theme.style.transform = "translateY(-50%) rotate(0deg)";
    txt_hexagon.style.right = "250px"; txt_hexagon.style.transform = "translateY(-50%) rotate(0deg)";
    body.style.left = "-280px";
}
function close_theme(){
    modal_theme.style.right = "-280px";
    hexagon_theme.style.right = "-40px"; hexagon_theme.style.transform = "translateY(-50%) rotate(90deg)";
    txt_hexagon.style.right = "-17.5px"; txt_hexagon.style.transform = "translateY(-50%) rotate(90deg)";
    body.style.left = "0";
}
theme.addEventListener("click", function(){
    if(modal_theme.style.right == "-280px" || !modal_theme.style.right){
        open_theme();
    }
    else{
        close_theme();
    }
});
const close_modal_theme_mobile = document.querySelector('#close_modal_theme_mobile');
close_modal_theme_mobile.addEventListener("click", function(){
    close_theme();
});

// fonction polices
fonction_montserrat.addEventListener("click", function(){
    document.querySelector(':root').style.setProperty('--police', "'Montserrat', sans-serif");
})
fonction_lato.addEventListener("click", function(){
    document.querySelector(':root').style.setProperty('--police', "'Lato', sans-serif");
})
fonction_roboto.addEventListener("click", function(){
    document.querySelector(':root').style.setProperty('--police', "'Roboto', sans-serif");
})

// fonction couleur
function chang_couleur(tres_sombre, sombre, normal, clair){
    document.querySelector(':root').style.setProperty('--light_color', clair);
    document.querySelector(':root').style.setProperty('--normal_color', normal);
    document.querySelector(':root').style.setProperty('--dark_color', sombre);
    document.querySelector(':root').style.setProperty('--very_dark_color', tres_sombre);
}

// couleurs
// bleu
fonction_bleu.addEventListener("click", function(){
    chang_couleur('#09489A','#0A51AE','#3E8DF4','#D8E9FD');
})
// rouge
fonction_rouge.addEventListener("click", function(){
    chang_couleur('#941018','#A5121C','#EA3440','#FDEDEE');
})
// vert
fonction_vert.addEventListener("click", function(){
    chang_couleur('#0E6C0E','#107E10','#1AC71A','#EDFDED');
})
// jaune
fonction_jaune.addEventListener("click", function(){
    chang_couleur('#F1C40F','#F3CB2B','#F6D965','#FEFAEC');
})
// rose
fonction_rose.addEventListener("click", function(){
    chang_couleur('#FF709B','#FF85A9','#FFACC8','#FFEBF1');
})
// orange
fonction_orange.addEventListener("click", function(){
    chang_couleur('#E05A00','#F56200','#FF781F','#FFF3EB');
})
// violet
fonction_violet.addEventListener("click", function(){
    chang_couleur('#4E2F75','#583483','#6B40A0','#F4F0F9');
})
// beige
fonction_beige.addEventListener("click", function(){
    chang_couleur('#DAC8A9','#E0D1B8','#E6DAC6','#F9F6F1');
})
// marron
fonction_marron.addEventListener("click", function(){
    chang_couleur('#140900','#291300','#582900','#FFF4EB');
})

// pays

// france
fonction_france.addEventListener("click", function(){
    chang_couleur('#002395','#002BB8','#ED2939','#FDECEE');
})
// allemagne
fonction_allemagne.addEventListener("click", function(){
    chang_couleur('#B80000','#DE0000','#FFCF00','#FFFBEB');
})
// espagne
fonction_espagne.addEventListener("click", function(){
    chang_couleur('#FFC400','#FFCB1F','#E4011C','#FFEBED');
})
// portugal
fonction_portugal.addEventListener("click", function(){
    chang_couleur('#00663D','#007A49','#FF0000','#FFEBEB');
})
// italie
fonction_italie.addEventListener("click", function(){
    chang_couleur('#009344','#00B856','#CF2734','#FCEEEF');
})

// saisons

// printemps
fonction_printemps.addEventListener("click", function(){
    chang_couleur('#BCA3E0','#C8B3E6','#CBF6CD','#EEFCEE');
})
// été
fonction_ete.addEventListener("click", function(){
    chang_couleur('#70D4FF','#85DAFF','#ECD15B','#FDFAED');
})
// automne
fonction_automne.addEventListener("click", function(){
    chang_couleur('#6A4622','#7B5228','#DA6134','#FCF2EE');
})
// hiver
fonction_hiver.addEventListener("click", function(){
    chang_couleur('#0F056B','#130688','#8D6346','#F8F4F1');
})

// marques

// tiktok
fonction_tiktok.addEventListener("click", function(){
    chang_couleur('#00F2EB','#1FFFF8','#FF004E','#FFEBF1');
})
// macdo
fonction_macdo.addEventListener("click", function(){
    chang_couleur('#1F522F','#27683C','#FEDF24','#FFFCEB');
})
// redbull
fonction_redbull.addEventListener("click", function(){
    chang_couleur('#173083','#EE3C48','#FBE62B','#EE3C48');
})
// burger king
fonction_burgerking.addEventListener("click", function(){
    chang_couleur('#0060A9','#FEBE10','#ED1A2D','#FEBE10');
})

// fonction theme sombre clair

// sombre
function sombre(){
    document.querySelector(':root').style.setProperty('--light', '#292929');
    document.querySelector(':root').style.setProperty('--dark', '#fff');
    document.querySelector(':root').style.setProperty('--white', '#000');
    document.querySelector(':root').style.setProperty('--black', '#fff');
    document.getElementById("clair").checked = false;
    document.getElementById("sombre").checked = true;
    document.querySelector("#img_cloud").src = "img/cloud_sombre.png";
    document.querySelector("#img_lock").src = "img/lock_sombre.png";
    document.querySelector("#img_reseaux").src = "img/reseaux_sombre.png";
    document.querySelector("#img_dev").src = "img/dev_sombre.png";
}
fonction_sombre.addEventListener("click", function(){
    sombre();
})
// clair
function clair(){
    document.querySelector(':root').style.setProperty('--light', '#fff');
    document.querySelector(':root').style.setProperty('--dark', '#292929');
    document.querySelector(':root').style.setProperty('--white', '#fff');
    document.querySelector(':root').style.setProperty('--black', '#000');
    document.getElementById("clair").checked = true;
    document.getElementById("sombre").checked = false;
    document.querySelector("#img_cloud").src = "img/cloud_clair.png";
    document.querySelector("#img_lock").src = "img/lock_clair.png";
    document.querySelector("#img_reseaux").src = "img/reseaux_clair.png";
    document.querySelector("#img_dev").src = "img/dev_clair.png";
}
fonction_clair.addEventListener("click", function(){
    clair();
})
// detection theme sombre clair navigateur
function theme_navigateur(){
    // sombre
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        sombre();
    }
    // clair
    else {  
        clair();
    }
}
theme_navigateur();