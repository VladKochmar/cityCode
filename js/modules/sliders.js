import Swiper, { Pagination, Navigation, Mousewheel, Thumbs, EffectFade } from 'swiper'

if (document.querySelector('.welcome-to__slider')) {
   new Swiper('.welcome-to__slider', {
      modules: [Pagination, Mousewheel],
      speed: 800,
      observer: true,
      observeParents: true,
      pagination: {
         el: '.vertical-slider-pagination',
         clickable: true,
         renderBullet: function (index, className) {
            return `<span class="${className}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18.8778 21.2166C16.699 22.8425 14.0146 23.644 11.301 23.4787C8.58743 23.3135 6.02012 22.1922 4.05469 20.314C2.08925 18.4357 0.852799 15.9218 0.564738 13.2185C0.276678 10.5152 0.955642 7.79726 2.48114 5.54699C4.00664 3.29672 6.28003 1.65965 8.89787 0.926302C11.5157 0.192954 14.3087 0.410747 16.7812 1.54103C19.2537 2.67132 21.2459 4.641 22.4041 7.10055C23.5623 9.56009 23.8118 12.3504 23.1081 14.9764" stroke="white" stroke-linecap="round"/>
            <circle cx="12" cy="12" r="5"/>
            </svg></span>`
         },
      },
      mousewheel: {
         releaseOnEdges: true,
      },
      breakpoints: {
         320: {
            direction: 'horizontal',
         },
         700: {
            direction: 'vertical',
         },
      },
   })
}

if (document.querySelectorAll('.real-estate-article__slider').length) {
   for (let swiper of document.querySelectorAll('.real-estate-article__slider')) {
      new Swiper(swiper, {
         modules: [Pagination, Navigation],
         speed: 800,
         observer: true,
         observeParents: true,
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
         },
      })
   }
}

if (document.querySelectorAll('.swiper-articles').length) {
   for (let swiper of document.querySelectorAll('.swiper-articles')) {
      new Swiper(swiper, {
         speed: 800,
         observer: true,
         observeParents: true,
         spaceBetween: 8,
         breakpoints: {
            320: {
               slidesPerView: 1.1,
            },
            800: {
               slidesPerView: 2.335,
            },
         },
      })
   }
}

if (document.querySelector('.swiper-also-like')) {
   new Swiper('.swiper-also-like', {
      speed: 800,
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
         320: {
            slidesPerView: 1.1,
         },
         800: {
            slidesPerView: 2.335,
         },
         1001: {
            slidesPerView: 3,
         },
      },
   })
}

if (document.querySelectorAll('.favorite-articles-block__slider').length) {
   for (let swiper of document.querySelectorAll('.favorite-articles-block__slider')) {
      new Swiper(swiper, {
         speed: 800,
         observer: true,
         observeParents: true,
         spaceBetween: 8,
         breakpoints: {
            320: {
               slidesPerView: 1.1,
            },
            700: {
               slidesPerView: 2,
            },
            1200: {
               slidesPerView: 3,
            },
         },
      })
   }
}

if (document.querySelector('.page-info__slider')) {
   new Swiper('.page-info__slider', {
      modules: [Pagination, Navigation],
      speed: 800,
      observer: true,
      observeParents: true,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      navigation: {
         prevEl: '.swiper-button-prev',
         nextEl: '.swiper-button-next',
      },
   })
}

if (document.querySelector('.service-info__main-swiper')) {
   const thumbs = new Swiper('.service-info__thumbs', {
      breakpoints: {
         320: {
            slidesPerView: 2,
            spaceBetween: 4,
         },
         520: {
            slidesPerView: 3,
            spaceBetween: 8,
         },
         700: {
            slidesPerView: 4,
            spaceBetween: 10,
         },
      },
   })

   new Swiper('.service-info__main-swiper', {
      modules: [Navigation, Thumbs, EffectFade],
      speed: 800,
      observer: true,
      observeParents: true,
      effect: 'fade',
      navigation: {
         prevEl: '.swiper-button-prev',
         nextEl: '.swiper-button-next',
      },
      thumbs: {
         swiper: thumbs,
      },
   })
}
