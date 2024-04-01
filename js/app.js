import * as projectFunctions from './modules/functions.js'

projectFunctions.isWebp()

projectFunctions.headerActions()

if (document.querySelectorAll('.input-file').length) {
   projectFunctions.fileUpload()
}

if (document.querySelector('.real-estate-add')) projectFunctions.addInput('Services and facilities*', 'services_facilities')

if (document.querySelector('.job-add')) projectFunctions.addInput('Job Responsibilities*', 'job_responsibilities')

import { InputFilePhoto } from './modules/inputFile.js'

if (document.querySelector('[photo-add-button]')) new InputFilePhoto('.create-ad__images', 'create-ad__image', 'create-ad__remove').init()

if (document.querySelector('.ads-list')) {
   projectFunctions.addsList()
}

// lazyLoading
import './modules/lazyload.js'

import './modules/weather.js'

import { ShowMore } from './modules/showMore.js'

new ShowMore().init()

// Tabs
import { Tabs } from './modules/tabs.js'

new Tabs().init()

import { MoveTo } from './modules/move-to.js'

if (document.querySelector('.contacts')) new MoveTo('.contacts').init()

import './modules/sliders.js'

import './modules/forms/selects.js'

import './modules/forms/flatpickr.js'

import './modules/forms/validator.js'

import './modules/player.js'
