$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()>50)
            $('.navbar-section').addClass('navbar-active');
        else $('.navbar-section').removeClass('navbar-active')
    });
});

// $('.slider-main').css('height', `${$(window).height() - $('.navbar_section').outerHeight()}px`)


class SLIDER2 {
    constructor(options) {
        this.slider = document.querySelector(options.slider);
        this.sliderLine = this.slider.querySelector('.sliders');
        this.slides = this.sliderLine.children;

        this.prev = document.querySelector('.slider__prev2');
        this.next = document.querySelector('.slider__next2');

        this.activeSlide = 0;
        this.moveUnit = 100;

        for (let i = 0; i < this.slides.length; i++) {
            const currentSlide = this.slides[i];

            if (i != this.activeSlide) {
                currentSlide.style.transform = `translateY(${this.moveUnit}%)`;
            }

            if (i === this.slides.length - 1) {
                currentSlide.style.transform = `translateY(-${this.moveUnit}%)`;
            }

        }

        this.prev.addEventListener('click', () => this.move(this.prev));
        this.next.addEventListener('click', () => this.move(this.next));
    }

    move(btn) {
        let LeftOrRightBTN = btn == this.next ? this.moveUnit * -1 : this.moveUnit;

        for (let i = 0; i < this.slides.length; i++) {
            let currentSlide = this.slides[i];
            currentSlide.style.transition = '0ms';
            if (currentSlide != this.activeSlide) {
                currentSlide.style.transform = `translateY(${LeftOrRightBTN * -1}%)`
            }
        }


        this.slides[this.activeSlide].style = `transform: translateY(${LeftOrRightBTN}%)`
        this.slides[this.activeSlide].style.transition = '500ms'


        if (btn == this.next) {
            this.activeSlide++;
            if (this.activeSlide > this.slides.length - 1) {
                this.activeSlide = 0;
            }
        } else if (btn == this.prev) {
            this.activeSlide--;
            if (this.activeSlide < 0) {
                this.activeSlide = this.slides.length - 1;
            }
        }

        this.slides[this.activeSlide].style.transform = `translateY(${0})`
        this.slides[this.activeSlide].style.transition = '500ms'

    }
}

const sliderNum2 = new SLIDER2({
    slider: '.slider-main',
})






