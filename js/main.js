const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let btn of infoBtns) {
    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        for (let hint of infoHints) {
            hint.classList.add('none')
        }
        btn.parentNode.querySelector('.info-hint').classList.toggle('none');
    })
}

document.addEventListener('click', () => {
    for (let hint of infoHints) {
        hint.classList.add('none')
    }
});

for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation())
}

// swiper slider

const swiper = new Swiper('.swiper', {
    // loop: true,
    // freeMode: true,

    slidesPerView: 4,
    spaceBetween: 42,
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        920: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
      },
  
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
});

// TABS

const tabsBtn = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabsBtn) {
    btn.addEventListener('click',  function () {
        tabsBtn.forEach(function (btn) {
            btn.classList.remove('tab-controls__btn--active');
        }) 
        this.classList.add('tab-controls__btn--active');
        for (let product of tabsProducts) {
            if (this.dataset.tab === 'all') {
                product.classList.remove('none')
            } else {
                if (product.dataset.tabValue === this.dataset.tab) {
                    product.classList.remove('none')
                } else {
                    product.classList.add('none')
                }
            }
        }
        swiper.update()
    })
}

// Mobile nav 

const mobileNavOpenBtn = document.querySelector('#openMobileNavBtn');
const mobileNavCloseBtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

mobileNav.classList.remove('mobile-nav-wrapper--open');

mobileNavOpenBtn.onclick = () => {
    mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = () => {
    mobileNav.classList.remove('mobile-nav-wrapper--open');
}