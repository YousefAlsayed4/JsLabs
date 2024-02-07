/*var imgs = Array.from(document.getElementsByClassName('img-container'));
var lightboxitem=document.querySelector('.light-box-item')
var currentimg=0;
var next=document.getElementById('next');
var prev=document.getElementById('prev');

for (let i= 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        var imgSrc=e.target.getAttribute('src')
        currentimg=imgs.indexOf(e.currentTarget);  
        lightboxitem.style.backgroundImage = 'url(' + imgSrc + ')';
    })   
}

function nextSlide() 
{
    currentimg++;
    if (currentimg==imgs.length-1) {
        currentimg=0;
    }
    var imgSource=imgs[currentimg].getAttribute('src');
    lightboxitem.style.backgroundImage = 'url(' + imgSource + ')';
    
}
function prevSlide() 
{
    currentimg--;
    if (currentimg<0) {
        currentimg=imgs.length-1;
    }
    var imgSource=imgs[currentimg].getAttribute('src');
    lightboxitem.style.backgroundImage = 'url(' + imgSource + ')';
    
}

next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);

*/

var imgs = Array.from(document.getElementsByClassName('img-container'));
var lightboxitem = document.querySelector('.light-box-item');
var currentimg = 0;
var next = document.getElementById('next');
var prev = document.getElementById('prev');

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        var imgSrc = e.target.getAttribute('src');
        currentimg = imgs.indexOf(e.currentTarget);
        lightboxitem.style.backgroundImage = 'url(' + imgSrc + ')';
    });
}

function nextSlide() {
    currentimg++;
    if (currentimg === imgs.length) {
        currentimg = 0;
    }
    var imgSource = imgs[currentimg].querySelector('img').getAttribute('src');
    lightboxitem.style.backgroundImage = 'url(' + imgSource + ')';
}

function prevSlide() {
    currentimg--;
    if (currentimg < 0) {
        currentimg = imgs.length - 1;
    }
    var imgSource = imgs[currentimg].querySelector('img').getAttribute('src');
    lightboxitem.style.backgroundImage = 'url(' + imgSource + ')';
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);



