const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    }
};
if (isMobile.any()) {
    document.body.classList.add('touch');
} else {
    document.body.classList.add('pc')
}

$(function () {
    $('.inspiration-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })
})

const loadVideoBlock = document.querySelector('.place-video');
const windowHeight = document.documentElement.clientHeight
window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
    if (!loadVideoBlock.classList.contains('loaded')) {
        getVideo();
    }
}

function getVideo() {
    const loadVideoPos = loadVideoBlock.getBoundingClientRect().top + pageYOffset;
    if (pageYOffset > loadVideoPos - windowHeight) {
        const loadVideoUrl = loadVideoBlock.dataset.map;
        if (loadVideoUrl) {
            loadVideoBlock.insertAdjacentHTML(
                'beforeend',
                `<iframe
                            width="600" height="600" src=${loadVideoUrl}
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen >
                    </iframe>`
            );
            loadVideoBlock.classList.add('loaded');
        }
    }
}

// menu burger
const menuBurger = document.querySelector('.header-menu-burger');
const headerMenu = document.querySelector('.header-menu');
const body = document.querySelector('body');
const headerInner = document.querySelector('.header-inner');
const darkMod = document.querySelector('.header-inner-check-box');


menuBurger.onclick = () => {
    menuBurger.classList.toggle('open');
    body.classList.toggle('lock');
    headerInner.classList.toggle('active');
    window.onscroll = () => {
        scrollWatch()
    }
}
darkMod.onclick = () => {
    body.classList.toggle('dark')
}
let width = window.matchMedia('(min-width:849px)');
width.addListener(changes);
changes(screen)

function changes(screen) {
    if (screen.matches) {
        menuBurger.classList.remove('open');
        body.classList.remove('lock');
        headerInner.classList.remove('active');
    }
}
function scrollWatch() {
    let wahScroll = window.pageYOffset;
    if (!menuBurger.classList.contains('open') && !body.classList.contains('lock') && !headerInner.classList.contains('active')){
        window.onscroll = null;
    }
    if (wahScroll > 0) {
        menuBurger.classList.remove('open');
        body.classList.remove('lock');
        headerInner.classList.remove('active');
    }

}
