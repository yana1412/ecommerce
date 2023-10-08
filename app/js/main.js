
const menu = document.querySelector('#menu-item')
const menuDown = document.querySelector('.menu__drop-down')
menu.addEventListener('click', () => {
   menuDown.style.display='block'
})

document.addEventListener('click', (e) => {
   if (e.target.id !== 'menu-item') {
      menuDown.style.display='none'
   }
})

const footerItems = document.querySelectorAll('.footer__title-wrapper')
const footerLists = document.querySelectorAll('.footer__list')
const productButtons = document.querySelectorAll('.product__btn')
const productItems = document.querySelectorAll('.product__inner')

footerItems.forEach((i, idx) => {
   i.addEventListener('click', (e)=>{
      i.classList.toggle('open')
      footerLists.forEach((i, index) => {
         if (index === idx) {
            i.classList.toggle('show')
         }
      })
   })
})

productItems.forEach((i) => {
   i.classList.add('show')
})

productButtons[0].focus()

productButtons.forEach((i, index) => {
   i.addEventListener('click', () => {
      productItems.forEach((i) => {
         if (index === 0) {
            i.classList.add('show')
         }
         if (i.dataset.type == index) {
            i.classList.add('show')
         } else if (i.dataset.type != index && index !== 0) {
            i.classList.remove('show')
         }

         if (!i.dataset.type) {
            i.classList.add('show')
         }
      })
   })
})


const menuBtn = document.querySelector('.menu__btn-img')
const menuList = document.querySelector('.menu')

menuBtn.addEventListener('click', ()=>{
   menuList.classList.toggle('show')
})


const paginationButtons = document.querySelectorAll('.product__slider-btn')

productItems[0].classList.add('open')
paginationButtons[0].focus()


paginationButtons.forEach((i, index)=>{
   i.addEventListener('click', () => {
      productItems.forEach((i) => {
         if(i.dataset.pagination == index + 1){
            i.classList.add('open')
         } else {
            i.classList.remove('open')
         }
      })
   })

})