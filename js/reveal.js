var revealerpoint = 150;
window.addEventListener('scroll', reveal);
function reveal() {
    var revealers = document.querySelectorAll('.revealer');
    for (var i = 0; i < revealers.length; i++) {
        var windowheight = window.innerHeight;
        var revealertop = revealers[i].getBoundingClientRect().top;
        var revealerbottom = revealers[i].getBoundingClientRect().bottom;
        if (revealertop < windowheight - revealerpoint) {
            revealers[i].classList.add('active');
        } else {
            revealers[i].classList.remove('active');
        };
        if (revealerbottom < 0 + revealerpoint) {
            revealers[i].classList.remove('active');
        }
    } 
};

var revealerpointdeux = 0;
window.addEventListener('scroll', revealdeux);
function revealdeux() {
    var revealersdeux = document.querySelectorAll('.revealerdeux');
    for (var i = 0; i < revealersdeux.length; i++) {
        var windowheightdeux = window.innerHeight;
        var revealertopdeux = revealersdeux[i].getBoundingClientRect().top;
        var revealerbottomdeux = revealersdeux[i].getBoundingClientRect().bottom;
        if (revealertopdeux < windowheightdeux - revealerpointdeux) {
            revealersdeux[i].classList.add('active')
        } else {
            revealersdeux[i].classList.remove('active');
        };
        if (revealerbottomdeux < 0 + revealerpointdeux) {
            revealersdeux[i].classList.remove('active');
        }
    } 
};

reveal();
revealdeux();