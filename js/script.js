window.addEventListener('resize', function(){
    if (window.matchMedia("(min-width: 993px)").matches) {
        if(document.querySelector('#modal_nav').classList.contains("navopen")){
            close_nav();
        }
    }
});

window.addEventListener('resize', function(){
    if (window.matchMedia("(max-height: 400px)").matches) {
        revealerpoint = 0;
    }
    else{
        revealerpoint = 150;
    }
});

if (typeof (navigator.msLaunchUri) === "function") {
    navigator.msLaunchUri('microsoft-edge:' + window.location.href,
        function () { window.location.href="https://go.microsoft.com/fwlink/?linkid=2151617" },
        function () {console.log('ie but no edge')}
    )
}