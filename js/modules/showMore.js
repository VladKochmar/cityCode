export class ShowMore {
   constructor() {
      this.showMoreList = document.querySelectorAll('[data-showMore]')
   }

   toggleContent(e) {
      const targetElement = e.target
      const showMoreContainer = targetElement.previousElementSibling
      const dots = showMoreContainer.querySelector('.dots')
      const moreContent = showMoreContainer.querySelector('.more')

      if (moreContent.classList.contains('hidden')) {
         dots.classList.add('hidden')
         moreContent.classList.remove('hidden')
         targetElement.innerText = 'Read less'
      } else {
         dots.classList.remove('hidden')
         moreContent.classList.add('hidden')
         targetElement.innerText = 'Read more'
      }
   }

   init() {
      for (const showMoteItem of this.showMoreList) {
         const button = showMoteItem.nextElementSibling
         button.addEventListener('click', this.toggleContent.bind(this))
      }
   }
}
