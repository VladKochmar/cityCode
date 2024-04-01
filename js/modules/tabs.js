export class Tabs {
   constructor() {
      this.tabs = document.querySelectorAll('[data-tabs]')
   }

   selectTitle(targetIndex, titlesBlock, contentBlock) {
      for (let i = 0; i < titlesBlock.children.length; i++) {
         if (targetIndex !== i) {
            titlesBlock.children[i].classList.remove('active')
            contentBlock.children[i].style.display = 'none'
         }
      }
      titlesBlock.children[targetIndex].classList.add('active')
      contentBlock.children[targetIndex].style.display = 'block'
   }

   init() {
      for (let tab of this.tabs) {
         const tabsTitles = tab.querySelector('[data-tabs-titles]')
         const tabsContent = tab.querySelector('[data-tabs-content]')

         tabsTitles.children[0].classList.add('active')

         for (let i = 1; i < tabsContent.children.length; i++) {
            tabsContent.children[i].style.display = 'none'
         }

         tabsTitles.addEventListener('click', e => {
            for (let i = 0; i < tabsTitles.children.length; i++) {
               if (e.target === tabsTitles.children[i]) this.selectTitle(i, tabsTitles, tabsContent)
            }
         })
      }
   }
}
