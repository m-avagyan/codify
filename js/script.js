const home = document.getElementsByClassName('container')[0],
      section = document.getElementsByClassName('section-container')[0],
      info = document.getElementsByClassName('info-container')[0],
      portfolio = document.getElementsByClassName('portfolio-container')[0],
      offer = document.getElementsByClassName('offer-container')[0],
      contact = document.getElementsByClassName('contact-container')[0],
      side1 = document.getElementsByClassName('side1')[0],
      side2 = document.getElementsByClassName('side2')[0],
      side3 = document.getElementsByClassName('side3')[0],
      menubar = document.getElementsByClassName('menu')[0],
      menucontrol = document.getElementsByClassName('menu-control')[0],
      langbar = document.getElementsByClassName('lang-bar')[0];
var menu = false,
    lang = false;

function setMenuBarTrue() {
    menu = true;
    menubar.style = 'z-index: 99; opacity: 1;';
    side1.style = 'transform: translate(-50%, -50%) rotate(45deg); top: 50%;';
    side2.style = 'opacity: 0';
    side3.style = 'transform: translate(-50%, -50%) rotate(-45deg); top: 50%;';
    if (window.innerWidth <= 426) {
        menucontrol.style = 'position: fixed'
    }
}

function setMenuBarFalse() {
    menu = false;
    menubar.style = 'z-index: -99; opacity: 0;';
    side1.style = 'transform: translate(-50%, -50%) rotate(0deg); top: 40%;';
    side2.style = 'opacity: 1';
    side3.style = 'transform: translate(-50%, -50%) rotate(0deg); top: 60%;';
    menucontrol.style = 'position: absolute';
}

function setMenuBar() {
    if(menu) {
        setMenuBarFalse();
        closeLangBar();
    }else {
        setMenuBarTrue()
    }
}

document.addEventListener('click', (evt) => {
    let targetEl = evt.target;
    do {
        if (targetEl == menubar || targetEl == menucontrol) {
            return
        }
        targetEl = targetEl.parentNode;
    } while (targetEl)

    setMenuBarFalse();
    closeLangBar();
})

function webscroll(n) {
    setMenuBarFalse();
    closeLangBar();
    
    if (n == 1) {
        home.scrollIntoView()
    }else if (n == 2) {
        section.scrollIntoView()
    }else if (n == 3) {
        info.scrollIntoView()
    }else if (n == 4) {
        portfolio.scrollIntoView()
    }else if (n == 5) {
        offer.scrollIntoView()
    }else if (n == 6) {
        contact.scrollIntoView()
    } 
}

function openLangBar() {
    langbar.className += ' lang-bar-open';
    lang = true
}

function closeLangBar() {
    langbar.className = 'lang-bar';
    lang = false;
}

function setLangBar() {
    if(lang) {
        closeLangBar()
    }else {
        openLangBar()
    }
}