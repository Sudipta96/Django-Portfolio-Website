let skinColor = document.getElementById('skin-color');
let theme = localStorage.getItem('theme');
let colorStyle = localStorage.getItem('color-style');
let activeNav = localStorage.getItem('active-nav');

/* ---------- Loading theme and color style -------------------*/



if (colorStyle == null){
    skinColor.setAttribute('href','/static/css/skins/color-1.css');
}
else{
    skinColor.setAttribute('href',colorStyle);
}


lightdarkIcon = document.getElementById('light-dark-icon');
styleIcon = document.getElementById('style-switcher-icon');

const modeToggleBtn = document.getElementById('theme-switcher');

let isLightMode = localStorage.getItem('lightMode') === 'true';


function applyStyleSheet() {
    const stylesheet = isLightMode ? '/static/css/light.css' : '/static/css/dark.css';
    document.getElementById('style-sheet').setAttribute('href', stylesheet);
}

applyStyleSheet();

function changeThemeSwitcherBtnIcon(){
    if (lightdarkIcon.classList.contains('fa-sun')){
    lightdarkIcon.classList.remove('fa-sun');
    lightdarkIcon.classList.add('fa-moon');
}
    else if(lightdarkIcon.classList.contains('fa-moon')){
        lightdarkIcon.classList.remove('fa-moon');
        lightdarkIcon.classList.add('fa-sun');
    }
}


modeToggleBtn.addEventListener('click', () => {
    isLightMode = !isLightMode;
    localStorage.setItem('lightMode', isLightMode);
    applyStyleSheet();
    changeThemeSwitcherBtnIcon();
});




$(document).ready(function(){
    $('ul.theme-colors li').click(function(){

        let id = $(this).attr('id');

        if (id === '1'){
            skinColor.setAttribute('href','/static/css/skins/color-1.css');
            localStorage.setItem('color-style', '/static/css/skins/color-1.css');
        }
        else if(id === '2'){
            skinColor.setAttribute('href','/static/css/skins/color-2.css');
            localStorage.setItem('color-style', '/static/css/skins/color-2.css');
        }
        else if(id === '3'){

            skinColor.setAttribute('href','/static/css/skins/color-3.css');
            localStorage.setItem('color-style', '/static/css/skins/color-3.css');
        }
        else if(id === '4'){

            skinColor.setAttribute('href','/static/css/skins/color-4.css');
            localStorage.setItem('color-style', '/static/css/skins/color-4.css');
        }
        else if(id === '5'){

            skinColor.setAttribute('href','/static/css/skins/color-5.css');
            localStorage.setItem('color-style', '/static/css/skins/color-5.css');
        }


    });

/* -------- show and hide the color style div ----------------*/

    $('#style-switcher-btn').click(function(){
        $('.colors').toggleClass('active');
    })

})
