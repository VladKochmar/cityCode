export function isWebp() {
   // Перевірка підтримки webp
   function testWebP(callback) {
      let webP = new Image()
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2)
      }
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
   }
   // Додавання класу _webp або _no-webp для HTML
   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp'
      document.documentElement.classList.add(className)
   })
}

export function headerActions() {
   document.addEventListener('click', e => {
      const targetElement = e.target

      if (targetElement.closest('.open-menu')) {
         document.querySelector('.sidebar-menu').classList.add('open')
      }

      if (targetElement.closest('.actions-header__login')) {
         document.querySelector('.menu-login').classList.add('open')
      }

      if (targetElement.closest('.actions-header__search')) {
         document.querySelector('.search-form').classList.add('open-search')
      }

      if (targetElement.closest('.sidebar-menu__close')) {
         document.querySelector('.sidebar-menu').classList.remove('open')
      }

      if (targetElement.closest('.menu-login__close')) {
         document.querySelector('.menu-login').classList.remove('open')
      }

      if (targetElement.closest('.search-form__clear')) {
         document.querySelector('.search-form').classList.remove('open-search')
         document.body.classList.remove('lock')
      }
   })
}

export function fileUpload() {
   const fileInputList = document.querySelectorAll('.input-file')

   for (const input of fileInputList) {
      input.addEventListener('change', e => {
         let fileName = ''
         for (const file of e.target.files) {
            fileName += `${file.name} `
         }
         const placeholder = input.parentElement.querySelector('.placeholder')
         placeholder.innerText = fileName
      })
   }
}

export function addInput(placeholder, name) {
   const addButton = document.querySelector('[add-input-button]')
   let inputIndex = document.querySelectorAll('[added-input]').length

   addButton.addEventListener('click', () => {
      const input = document.createElement('input')
      input.setAttribute('added-input', '')
      input.type = 'text'
      input.name = `${name}_${++inputIndex}`
      input.placeholder = placeholder
      input.className = 'input input_background no-empty'
      addButton.insertAdjacentElement('beforebegin', input)
   })
}

export function addsList() {
   const addsList = document.querySelector('.ads-list')
   const content = document.getElementById('content')

   addsList.addEventListener('click', e => {
      if (e.target.closest('.ads-list__item')) {
         const targetElement = e.target.closest('.ads-list__item')

         if (targetElement.dataset.type === 'job_offer') {
            const jobContent = `<div class="job-offer">
            <p class="job-offer__title">Commercial Medico-Marketing Team Lead</p>
            <a href="jobs-page.html" class="job-offer__view-ad">View ad</a>
            <p class="job-offer__title job-offer__title_mb">Applicant Details</p>
            <table>
               <tr>
                  <td>First name:</td>
                  <td>Garold</td>
               </tr>
               <tr>
                  <td>Last name:</td>
                  <td>Cuper</td>
               </tr>
               <tr>
                  <td>Email:</td>
                  <td>garoldcuper@gmail.com</td>
               </tr>
               <tr>
                  <td>Phone:</td>
                  <td>+2 802 544 21 23</td>
               </tr>
               <tr>
                  <td>Message:</td>
                  <td>I really want to work for you</td>
               </tr>
            </table>
            <label class="job-offer__file"><span class="placeholder">Download resume</span><input required type="file" name="user_resume" accept=".pdf, .docx" class="input-file"></label>
            </div>`

            content.innerHTML = jobContent
         }

         if (targetElement.dataset.type === 'real_estate') {
            const realEstate = `<div class="chat">
            <div class="chat__header">
               <p class="chat__title">Apartment OFELIA view and Private parking</p>
               <a href="real-estate-page.html" class="chat__view-ad">View ad</a>
            </div>
            <div class="chat__body">
               <div class="message">
                  <div class="message__header">
                     <img src="img/chat/user1.png" alt="photo">
                     <p class="message__name">Tomas</p>
                  </div>
                  <div class="message__body">
                     <p>Hello, is this offer still available for consideration?</p>
                  </div>
                  <div class="message__time">11:28 a.m.</div>
               </div>
               <div class="message message_user">
                  <div class="message__header">
                     <p class="message__name">DaNiel</p>
                     <img src="img/chat/user2.png" alt="user photo">
                  </div>
                  <div class="message__body">
                     <p>Hey!
                        Yes, this offer is still valid, when will it be convenient for you to look?</p>
                  </div>
                  <div class="message__time">12:21 a.m.</div>
               </div>
               <div class="message">
                  <div class="message__header">
                     <img src="img/chat/user1.png" alt="user photo">
                     <p class="message__name">Tomas</p>
                  </div>
                  <div class="message__body">
                     <p>Sorry, my plans have changed</p>
                  </div>
                  <div class="message__time">4:21 p.m.</div>
               </div>
            </div>
            <div class="chat-panel">
               <label class="chat-panel__input"><input autocomplete="off" type="text" name="user_message" placeholder="Type your message here..."></label>
               <div class="chat-panel__actions">
                  <label class="chat-panel__media"><input type="file" name="user_media" accept=".svg, .png, .jpg, .jpeg, .webp, .mp4, .gif, .wmv, .avi, .mov"></label>
                  <button type="button" class="chat-panel__emoji"></button>
                  <button type="button" class="chat-panel__send"></button>
               </div>
            </div>
            </div>`

            content.innerHTML = realEstate
         }
      }
   })
}
