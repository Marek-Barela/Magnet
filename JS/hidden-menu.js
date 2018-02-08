document.addEventListener('DOMContentLoaded', function(){
    const hamburgerBtn = document.querySelector('.hamburger'),
        navLayer = document.getElementById('hidden-layer'),
        closeNavBtn = document.querySelector('.close-btn');
    function changeScreen() {
        let windowWidth = window.innerWidth;
        if (windowWidth > 992) {
            hamburgerBtn.style.display = 'none'
            navLayer.style.display = 'none'
        }
        else {
            hamburgerBtn.style.display = 'block'
        }
    }
    (function openMenu() {
        hamburgerBtn.addEventListener('click', function(){
            navLayer.style.display = 'block'
            closeMenu()
        })
    })();
    function closeMenu() {
        closeNavBtn.addEventListener('click', function(){
            navLayer.style.display = 'none'
        })
    };
    window.addEventListener('click', outsideClick)
    function outsideClick(e) {
        if(e.target == navLayer){
            navLayer.style.display = "none";
        }
    }
    window.addEventListener('resize', changeScreen)
});