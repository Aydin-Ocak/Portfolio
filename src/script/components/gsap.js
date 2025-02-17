/* Smooth Scroll FX */
/* if(window.innerWidth > mobileBreakpoint) window.smoothScroll = ScrollSmoother.create({ markers: true, smooth: 1, effects: true, smoothTouch: 0.1 }); */

/* Number Counter FX */
/* document.fonts.ready.then(() => {
   if (window.innerWidth > mobileBreakpoint) {
      gsap.utils.toArray(".fx-text-counter").forEach(element => {
         let value = element.querySelector('.fx-child');
         let valueText = value.textContent;
         let numbers = valueText.split('');
         let valueHeight = value.offsetHeight;

         let numberElement = '<div class="digit" style="height: ' + valueHeight + 'px;"></div>';
         for (let i = 0; i <= 9; i++) { numberElement += '<div class="digit w-fit leading-none" style="height: ' + valueHeight + 'px;">' + i + '</div>'; }

         value.innerHTML = '';
         value.style.height = valueHeight + 'px';
         numbers.forEach(number => {
            if (number == '.' || number == ',' || number == 'm' || number == 'k') value.innerHTML += '<div class="point inline-flex flex-col leading-none [will-change:transform,width] backface-hidden translate-y-[-15%]">' + number + '</div>';
            else value.innerHTML += '<div data-number="' + (parseInt(number) + 1) + '" class="number inline-flex flex-col [will-change:transform,width] backface-hidden">' + numberElement + '</div>';
         });

         value.querySelectorAll('.number').forEach((number, index) => {
            number.querySelectorAll('.digit').forEach(digit => { if (digit.textContent == number.dataset.number - 1) { digit.classList.add('active'); } });

            gsap.to(number, {
               scrollTrigger: {
                  trigger: element,
                  start: 'top-=' + (window.innerHeight / 3) + ' center',
               },
               duration: 2,
               y: -number.dataset.number * valueHeight,
               width: number.querySelector('.digit.active').offsetWidth,
               ease: 'expo.out',
               delay: index * 0.1
            })
         });
      });
   }
}); */

/* Text Hover FX */
/* if (window.innerWidth > mobileBreakpoint)
   gsap.utils.toArray(".fx-text-hover").forEach(element => {
      document.fonts.ready.then(() => {
         let hovered = new SplitText(element.querySelector(".hovered"), { type: "chars, words, lines", charsClass: 'split-chars', wordsClass: 'split-words', linesClass: 'split-lines' });
         let current = new SplitText(element.querySelector(".current"), { type: "chars, words, lines", charsClass: 'split-chars', wordsClass: 'split-words', linesClass: 'split-lines' });

         let effectTL = gsap.timeline({ paused: true });

         gsap.set(hovered.chars, { y: '-50%' });

         effectTL.to(current.chars, { duration: 0.25, y: '50%', opacity: 0, stagger: 0.015 })
            .to(hovered.chars, { delay: 0.05, duration: 0.5, y: '0%', opacity: 1, stagger: 0.015 }, 0);

         element.addEventListener("mouseenter", () => effectTL.play());
         element.addEventListener("mouseleave", () => effectTL.reverse());
      });
   }); */

/* Text Reveal FX */
/* if (window.innerWidth > mobileBreakpoint)
   gsap.utils.toArray(".fx-text-reveal").forEach(element => {
      document.fonts.ready.then(() => {
         let splitedText = new SplitText(element, { type: "chars, words, lines", charsClass: 'split-chars', wordsClass: 'split-words', linesClass: 'split-lines' });

         let effectTL = gsap.timeline({
            scrollTrigger: {
               trigger: element,
               start: 'top 90%',
               end: 'bottom top',
               once: true,
            },
            delay: preloaderDelay / 1000,
         });

         effectTL.to(splitedText.chars, { delay: 0.1, duration: 0.5, opacity: 1, stagger: 0.015 }, 0);
      });
   }); */