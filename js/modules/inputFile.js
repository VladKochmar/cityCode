export class InputFilePhoto {
   constructor(containerSelector, imageClass, removeClass) {
      this.containerSelector = containerSelector
      this.imageClass = imageClass
      this.removeClass = removeClass
      this.buttonAdd = document.querySelector('[photo-add-button]')
   }

   removeImage(e) {
      const targetButton = e.target
      const targetElemntContainer = targetButton.closest(`.${this.imageClass}`)
      targetElemntContainer.remove()
   }

   createImage(e) {
      const selectedFile = e.target.files[0]

      this.el = document.createElement('div')
      this.el.className = this.imageClass

      const div = document.createElement('div')
      this.el.append(div)

      const img = document.createElement('img')
      const objectURL = URL.createObjectURL(selectedFile)
      img.src = objectURL
      div.append(img)

      const removeBtn = document.createElement('button')
      removeBtn.className = this.removeClass
      removeBtn.type = 'button'
      removeBtn.addEventListener('click', this.removeImage.bind(this))
      div.append(removeBtn)

      this.render()
   }

   render() {
      document.querySelector(this.containerSelector).append(this.el)
   }

   init() {
      this.buttonAdd.addEventListener('change', this.createImage.bind(this))
   }
}
