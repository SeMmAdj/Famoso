

// Show Menu on click, add class to the div by clicking

const showMenu = (toggleId, navId) => {
    // toggleId - button, navId = menu div
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)


    if(toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');


//  Remove menu mobile when you click on the menu link
const navLink = document.querySelectorAll('.nav-link')
// grab all links

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav-link element we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(link => link.addEventListener('click', linkAction))


//Scroll section Active link

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)



// Change background header

function scrollHeader() {

    const nav = document.getElementById('header');
    // when  the scroll is greater than 2000 viewport height, add the scroll-header class

    if(this.scrollY >=200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')


}

window.addEventListener('scroll', scrollHeader)

//Scroll top

function scrollTop() {

    const scrollTop = document.getElementById('scroll-top');
    // when  the scroll is greater than 2000 viewport height, add the scroll-header class

    if(this.scrollY >=560)
     scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')


}

window.addEventListener('scroll', scrollTop)



// Dark Light Theme

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
// Icon
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


// we obtain the current theme that the interface has by validation the dark-theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.body.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if(selectedTheme) {
    // If the validation if fulfilled, we ask what the issue was to know if we active

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)

}


// Acitive/deactive the theme manually with the button 

themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle(darkTheme)
    // Add change the icon, to moon or sun
    themeButton.classList.toggle(iconTheme)

      // we save the theme and the current icon that the user chose

      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())


})

// scroll reveal animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home-data, .home-img,
  .about-data, .about-img,
  .services-content, .menu-content, 
  .app-data, .app-img, .contact-data, 
  .contact-button, .footer-content`,{

    interval: 200

})


