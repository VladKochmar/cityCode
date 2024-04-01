export class MoveTo {
   constructor(movedBlockSelector) {
      this.movedBlock = document.querySelector(movedBlockSelector)
      this.movingWidth = this.movedBlock.getAttribute('moving-width')
      this.newParent = document.querySelector(this.movedBlock.getAttribute('new-parent'))
      this.oldParent = this.movedBlock.parentElement
   }

   move() {
      if (document.documentElement.clientWidth <= this.movingWidth) {
         if (this.oldParent.contains(this.movedBlock)) this.oldParent.removeChild(this.movedBlock)
         this.newParent.append(this.movedBlock)
      } else {
         this.oldParent.append(this.movedBlock)
         if (this.newParent.contains(this.movedBlock)) this.newParent.removeChild(this.movedBlock)
      }
   }

   init() {
      this.move()
      window.addEventListener('resize', this.move.bind(this))
   }
}
