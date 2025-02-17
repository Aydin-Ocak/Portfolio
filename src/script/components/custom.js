/* After Load Global Variables */
window.body = document.querySelector('body')
window.footer = document.querySelector('footer')
window.header = document.querySelector('header')
window.bodyOverlay = document.querySelector('.body-overlay')

/* FancyBox Settings */
Fancybox.defaults.placeFocusBack = 0
Fancybox.defaults.autoFocus = false
Fancybox.defaults.trapFocus = false
Fancybox.defaults.dragToClose = false

Fancybox.bind('[data-fancybox]', {})

// Define Custom Elements
class wrapper extends HTMLElement {
   constructor() {
      super()
   }
}
customElements.define('penta-yazilim', wrapper)

/* Scroll Affected Menu */
let smartMenuHeaderField = document.querySelector('.header-field')
let smartMenuHeaderHeight = smartMenuHeaderField.offsetHeight
let smartMenuCurrentScrollTop = window.pageYOffset || document.documentElement.scrollTop
if (smartMenuCurrentScrollTop >= smartMenuHeaderHeight / 5) {
   smartMenuHeaderField.classList.add('scroll-up')
   smartMenuHeaderField.classList.add('scroll-down')
} else {
   smartMenuHeaderField.classList.remove('scroll-up')
   smartMenuHeaderField.classList.remove('scroll-down')
}

let smartMenuLastScrollTop = 0
let smartMenuStickyObjects = document.querySelectorAll('.sticky-el')
window.addEventListener(
   'scroll',
   function () {
      let smartMenuScrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (smartMenuScrollTop > smartMenuLastScrollTop && smartMenuScrollTop > smartMenuHeaderHeight / 5) {
         smartMenuStickyObjects.forEach((el) => {
            el.style.top = `30px`
         })
         smartMenuHeaderField.classList.add('scroll-up')
         smartMenuHeaderField.classList.add('scroll-down')
      } else {
         smartMenuStickyObjects.forEach((el) => {
            el.style.top = `${smartMenuHeaderHeight + 30}px`
         })
         if (smartMenuScrollTop > smartMenuHeaderHeight / 5) {
            smartMenuHeaderField.classList.remove('scroll-up')
            smartMenuHeaderField.classList.add('scroll-down')
         } else {
            smartMenuHeaderField.classList.remove('scroll-up')
            smartMenuHeaderField.classList.remove('scroll-down')
         }
      }
      smartMenuLastScrollTop = smartMenuScrollTop
   },
   false,
)

/* Cookie Box */
let cookie = document.querySelector('.cookie-box')
let cookieClose = document.querySelectorAll('.close-cookie')
let cookieAccept = document.querySelectorAll('.accept-cookie')
let cookieExpire = parseInt(cookie.getAttribute('data-expire'))

Cookies.get('cookie') && Cookies.get('cookie') == 'accepted' ? '' : cookie.classList.remove('translate-y-[125%]')

cookieClose.forEach((close) => {
   close.addEventListener('click', () => {
      cookie.classList.add('!translate-y-[125%]')
   })
})
cookieAccept.forEach((close) => {
   close.addEventListener('click', () => {
      cookie.classList.add('!translate-y-[125%]')
      Cookies.set('cookie', 'accepted', { expires: cookieExpire })
   })
})

//Menu Events
const menuButton = document.querySelector('.menuButton')
const navigation = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {
   navigation.classList.toggle('active')
})
