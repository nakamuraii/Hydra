function initializeSlider(prevBtnId, nextBtnId, sliderItemsSelector) {
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const sliderItems = document.querySelectorAll(sliderItemsSelector);
    let currentIndex = 0;

    function showSlide(index) {
        sliderItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active-slide');
            } else {
                item.classList.remove('active-slide');
            }
        });
    }
      
    function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        showSlide(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

}

const slider1Config = {
    prevBtnId: 'prevBtn1',
    nextBtnId: 'nextBtn1',
    sliderItemsSelector: '.contacts__item',
};

const slider2Config = {
    prevBtnId: 'prevBtn2',
    nextBtnId: 'nextBtn2',
    sliderItemsSelector: '.feel__item',
};

const slider3Config = {
    prevBtnId: 'prevBtn3',
    nextBtnId: 'nextBtn3',
    sliderItemsSelector: '.engine-item',
};

const slider4Config = {
    prevBtnId: 'prevBtn4',
    nextBtnId: 'nextBtn4',
    sliderItemsSelector: '.process__step',
};

initializeSlider(slider1Config.prevBtnId, slider1Config.nextBtnId, slider1Config.sliderItemsSelector, slider1Config.cTransformItemId);
initializeSlider(slider2Config.prevBtnId, slider2Config.nextBtnId, slider2Config.sliderItemsSelector, slider2Config.cTransformItemId);
initializeSlider(slider3Config.prevBtnId, slider3Config.nextBtnId, slider3Config.sliderItemsSelector, slider3Config.cTransformItemId);
initializeSlider(slider4Config.prevBtnId, slider4Config.nextBtnId, slider4Config.sliderItemsSelector, slider4Config.cTransformItemId);


const screenWidth = window.screen.width;

let currentIndex = 0;

if (screenWidth <= 430) {
    const cTransformItem = document.getElementById('cTransformItem');
    cTransformItem.innerHTML = 'Send Us';

    const copyrightItem = document.getElementById('copyright');
    copyrightItem.innerHTML = '2023 © HYDRA LANDING PAGE <br>BY ZINE. E. FALOUTI <br>ALL RIGHTS RESERVED'
}