import validator from 'validator'

function checkEmail(input) {
   let status = true

   if (!validator.isEmail(input.value)) {
      input.value = ''
      validateInput(input, 'Enter your email (must contain @)', 'error')
      status = false
   }

   return status
}

function validateInput(input, placeholder, addedClass) {
   if (input.classList.contains(addedClass)) return false
   input.classList.add(addedClass)
   input.placeholder = placeholder
}

function validateFile(input, addedCalss) {
   const placeholder = input.previousElementSibling
   placeholder.classList.add(addedCalss)
}

if (document.querySelector('.form-transfers')) {
   const form = document.querySelector('.form-transfers')

   const numberInputs = document.querySelectorAll('.form-transfers__input.number')

   for (const input of numberInputs) {
      input.addEventListener('input', () => {
         if (validator.isInt(input.value)) {
            if (parseInt(input.value) < parseInt(input.min) || parseInt(input.value) > parseInt(input.max)) input.value = ''
         } else {
            input.value = ''
         }
      })
   }

   form.addEventListener('submit', e => {
      e.preventDefault()

      let status = true

      const selectsAirports = document.querySelectorAll('select.form-transfers__select')

      for (const select of selectsAirports) {
         if (validator.isEmpty(select.value)) {
            const input = select.nextElementSibling.querySelector('input')
            validateInput(input, 'Select an airport', 'error')
            status = false
         }
      }

      const calendar = document.getElementById('calendar')

      if (validator.isEmpty(calendar.value)) {
         validateInput(calendar, 'Choose a date', 'error')
         status = false
      }

      const time = document.getElementById('time')

      if (validator.isEmpty(time.value)) {
         validateInput(time, 'Choose a time', 'error')
         status = false
      }

      for (const input of numberInputs) {
         if (validator.isEmpty(input.value)) {
            validateInput(input, 'Enter the quantity', 'error')
            status = false
         }
      }

      if (status) form.submit()
   })
}

if (document.querySelector('.starts-here__form')) {
   const form = document.querySelector('.starts-here__form')

   form.addEventListener('submit', e => {
      e.preventDefault()

      let status = true
      const input = form.querySelector('input')

      status = checkEmail(input)

      if (status) form.submit()
   })
}

if (document.querySelector('.form-request')) {
   const form = document.querySelector('.form-request')

   form.addEventListener('submit', e => {
      e.preventDefault()

      let status = true

      const inputsText = document.querySelectorAll('.text')

      for (const input of inputsText) {
         if (!validator.isAlpha(input.value)) {
            input.value = ''
            validateInput(input, 'Fill the field (Only a-z)', 'error')
         }
      }

      const emailInput = document.getElementById('email')
      status = checkEmail(emailInput)

      const telInput = document.getElementById('phone')

      if (!validator.isMobilePhone(telInput.value)) {
         telInput.value = ''
         validateInput(telInput, 'Enter a phone number', 'error')
         status = false
      }

      if (status) form.submit()
   })
}

if (document.querySelector('.create-ad__form')) {
   const form = document.querySelector('.create-ad__form')

   form.addEventListener('submit', e => {
      e.preventDefault()

      let status = true

      const noEmptyInputs = document.querySelectorAll('.no-empty')

      for (const input of noEmptyInputs) {
         if (validator.isEmpty(input.value)) {
            validateInput(input, `Enter a ${input.placeholder}`, 'error')
            status = false
         }
      }

      const fileInput = document.getElementById('inputFile')

      if (validator.isEmpty(fileInput.value)) {
         validateFile(fileInput, 'error')
         status = false
      }

      const phoneInput = document.querySelector('.input.phone')

      if (!validator.isMobilePhone(phoneInput.value)) {
         phoneInput.value = ''
         validateInput(phoneInput, 'Enter a Phone number*', 'error')
         status = false
      }

      const numberInputs = document.querySelectorAll('.input.number')

      for (const input of numberInputs) {
         if (!validator.isInt(input.value)) {
            input.value = ''
            validateInput(input, `Enter a ${input.placeholder} (numbers)`, 'error')
            status = false
         }
      }

      const currency = document.getElementById('currency')

      if (!validator.isCurrency(currency.value, { symbol_after_digits: true, allow_space_after_digits: true })) {
         currency.value = ''
         validateInput(currency, `Enter a ${currency.placeholder} (Only numbers and $)`, 'error')
         status = false
      }

      if (status) form.submit()
   })
}

if (document.querySelector('.contact-us__form')) {
   const form = document.querySelector('.contact-us__form')

   form.addEventListener('submit', e => {
      e.preventDefault()

      let status = true

      const noEmptyInputs = document.querySelectorAll('.no-empty')

      for (const input of noEmptyInputs) {
         if (validator.isEmpty(input.value)) {
            validateInput(input, `Enter a ${input.placeholder}`, 'error')
            status = false
         }
      }

      if (status) form.submit()
   })
}

if (document.querySelector('.form-register')) {
   const form = document.querySelector('.form-register')

   form.addEventListener('submit', e => {
      e.preventDefault()

      let status = true

      const nameInput = document.querySelector('.form-register__input.name')

      if (validator.isEmpty(nameInput.value)) {
         validateInput(nameInput, 'Write your name', 'error')
         status = false
      }

      const emailInput = document.querySelector('.form-register__input.email')
      status = checkEmail(emailInput)

      const phoneInput = document.querySelector('.form-register__input.phone')

      if (!validator.isMobilePhone(phoneInput.value)) {
         phoneInput.value = ''
         validateInput(phoneInput, 'Enter a Phone number*', 'error')
         status = false
      }

      const passwordInput = document.querySelector('.form-register__input.password')
      const confirmPassword = document.querySelector('.form-register__input.confirm-password')

      if (passwordInput.value !== confirmPassword.value) {
         validateInput(passwordInput, 'Passwords do not match', 'error')
         validateInput(confirmPassword, 'Passwords do not match', 'error')
         status = false
      } else if (validator.isEmpty(passwordInput.value)) {
         validateInput(passwordInput, 'Write the password', 'error')
         validateInput(confirmPassword, 'Write the password', 'error')
         status = false
      }

      if (status) form.submit()
   })
}

if (document.querySelector('.form-login')) {
   const form = document.querySelector('.form-login')

   form.addEventListener('submit', e => {
      e.preventDefault()

      let status = true
      const emailInput = document.querySelector('.form-login__input.email')
      const phoneInput = document.querySelector('.form-login__input.phone')

      if (validator.isEmpty(phoneInput.value)) status = checkEmail(emailInput)
      else if (emailInput.classList.contains('error')) emailInput.classList.remove('error')

      if (validator.isEmpty(emailInput.value)) {
         if (!validator.isMobilePhone(phoneInput.value)) {
            phoneInput.value = ''
            validateInput(phoneInput, 'Enter a Phone number*', 'error')
            status = false
         }
      } else if (phoneInput.classList.contains('error')) phoneInput.classList.remove('error')

      const passwordInput = document.querySelector('.form-login__input.password')

      if (validator.isEmpty(passwordInput.value)) {
         validateInput(passwordInput, 'Write your password', 'error')
         status = false
      }

      if (status) form.submit()
   })
}
