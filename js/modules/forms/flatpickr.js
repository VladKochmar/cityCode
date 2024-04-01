import flatpickr from 'flatpickr'

flatpickr('#calendar', {
   dateFormat: 'd.m.y',
   minDate: 'today',
   disableMobile: true,
})

flatpickr('#time', {
   enableTime: true,
   noCalendar: true,
   dateFormat: 'H:i',
   time_24hr: true,
   disableMobile: true,
})
