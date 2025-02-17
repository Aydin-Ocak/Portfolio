/* Multi Carousel Example ------------------------------------------------------------------ */
/* if (document.querySelector('.sample-carousel')) {
   let i;
   const sliderName = document.querySelectorAll('.sample-carousel');

   const prevNavName = document.querySelectorAll('.sample-prev');
   const nextNavName = document.querySelectorAll('.sample-next');
   const paginationName = document.querySelectorAll('.sample-pagination');

   for (i = 0; i < sliderName.length; i++) {
      sliderName[i].classList.add('sample-carousel-' + i);
      prevNavName[i].classList.add('sample-prev-' + i);
      nextNavName[i].classList.add('sample-next-' + i);
      paginationName[i].classList.add('sample-pagination-' + i);

      new Swiper('.sample-carousel-' + i, {
         modules: [A, P, N],
         slidesPerView: 1,
         speed: 1000,
         spaceBetween: 30,
         resistance: true,
         resistanceRatio: 0,
         autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
         },
         pagination: {
            el: '.sample-pagination-' + i,
            clickable: true,
         },
         navigation: {
            nextEl: '.sample-next-' + i,
            prevEl: '.sample-prev-' + i,
         },
         on: {
            slideChange: function () { },
         }
      });
   }
} */

/* Single Carousel Example ------------------------------------------------------------------ */
/* if (document.querySelector('.sample-carousel')) {
   new Swiper(".sample-carousel", {
      modules: [A, P, N],
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 30,
      resistance: true,
      resistanceRatio: 0,
      autoplay: {
         delay: 5000,
         disableOnInteraction: false,
         pauseOnMouseEnter: true,
      },
      navigation: {
         nextEl: ".sample-next",
         prevEl: ".sample-prev"
      },
      pagination: {
         el: ".sample-pagination",
         clickable: true,
      },
      breakpoints: {
         0: { slidesPerView: 1, },
         481: { slidesPerView: 2, },
         991: { slidesPerView: 3, },
         1025: { slidesPerView: 4, },
         1281: { slidesPerView: 5, },
      },
      on: {
         beforeInit: function () {
            let totalSlideNumber = this.wrapperEl.querySelectorAll(".swiper-slide").length;
            totalSlideNumber = totalSlideNumber < 10 ? '0' + totalSlideNumber : totalSlideNumber;
            let totalField = document.querySelector('.sample-carousel-field .total');

            if (totalField) totalField.innerHTML = totalSlideNumber;
         },
         slideChange: function () {
            var activeSlideNumber = this.realIndex + 1;
            activeSlideNumber = activeSlideNumber < 10 ? '0' + activeSlideNumber : activeSlideNumber;
            let activeField = document.querySelector('.sample-carousel-field .current');

            if (activeField) activeField.innerHTML = activeSlideNumber;
         },
         autoplayTimeLeft: function (swiper, timeLeft, percentage) {
            this.el.querySelector('.sample-carousel-line-wrapper .fill').style.width = (100 - (percentage * 100).toFixed(1)) + '%';
         }
      }
   })
} */