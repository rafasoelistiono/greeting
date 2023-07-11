
window.onload=function(){
    setTimeout(content, 500);
}

function content(){
    var he=document.querySelector('#home h2');
    he.style.opacity='1';
        he.style.transform='translateY(0)';
    var hs=document.querySelector('#home p');
    hs.style.opacity='1';
        hs.style.transform='translateY(0)';
    var hh=document.querySelector('.box-button');
    hh.style.opacity='1';
        hh.style.transform='translateY(0)';
}

window.addEventListener('scroll' , reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++ ){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i] = null;
        }
    }
}