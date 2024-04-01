import TomSelect from 'tom-select'

if (document.querySelectorAll('.form-transfers__select')) {
   for (let select of document.querySelectorAll('.form-transfers__select')) {
      new TomSelect(select, {
         hideSelected: true,
         sortField: {
            field: 'text',
            direction: 'asc',
         },
      })
   }
}

if (document.querySelectorAll('.form-catalog-filter__select')) {
   for (let select of document.querySelectorAll('.form-catalog-filter__select')) {
      new TomSelect(select, {
         hideSelected: true,
      })
   }
}

if (document.querySelector('.sorted-by')) {
   new TomSelect('.sorted-by', {
      hideSelected: true,
   })
}

if (document.querySelector('.header__langs')) {
   new TomSelect('.header__langs', {
      hideSelected: true,
   })
}
