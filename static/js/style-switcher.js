


let skinColor = document.getElementById('skin-color');
let theme = localStorage.getItem('theme');
let colorStyle = localStorage.getItem('color-style');
let activeNav = localStorage.getItem('active-nav');

/* ---------- Loading theme and color style -------------------*/

if(theme == null){
    theme = "/static/css/light.css"
    swapStyleSheet(theme);
}
else{
    swapStyleSheet(theme);
}


if (colorStyle == null){
    skinColor.setAttribute('href','/static/css/skins/color-1.css');
}
else{
    skinColor.setAttribute('href',colorStyle);
}


themeSwitcher = document.getElementById('light-switcher-btn');
lightdarkIcon = document.getElementById('light-dark-icon');
styleIcon = document.getElementById('style-switcher-icon');
style = document.getElementById('style');
themeBtn = document.getElementsByClassName('theme-switcher');

function swapStyleSheet(sheet){
    style.setAttribute('href', sheet);
    localStorage.setItem('theme', sheet);
}

themeSwitcher.onclick = function (){
    if (lightdarkIcon.classList.contains('fa-sun')){
        lightdarkIcon.classList.remove('fa-sun');
        lightdarkIcon.classList.add('fa-moon');
        swapStyleSheet("/static/css/light.css");
    }
    else if(lightdarkIcon.classList.contains('fa-moon')){
        lightdarkIcon.classList.remove('fa-moon');
        lightdarkIcon.classList.add('fa-sun');
        swapStyleSheet("/static/css/dark.css");
    }

};



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
