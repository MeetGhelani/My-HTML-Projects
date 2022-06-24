const s_container = document.querySelector('.s-container');
const slideLeft = document.querySelector('.l-slider');
const slideRight = document.querySelector('.r-slider');
const upbtn = document.querySelector('.up-btn');
const downbtn = document.querySelector('.down-btn');
const slidelength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidelength - 1) * 100}vh`

upbtn.addEventListener('click' , () => changeSlide('up'));
downbtn.addEventListener('click' , () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = s_container.clientHeight;
    console.log(sliderHeight);
    if(direction === 'up'){
        activeSlideIndex ++ ;
        if(activeSlideIndex > slidelength - 1){
            activeSlideIndex = 0 ;
        }
    }
    else if(direction === 'down') {
            activeSlideIndex -- ;
            if(activeSlideIndex < 0) {
                activeSlideIndex = slidelength - 1 ;
            }
        }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)` ;
    slideLeft.style.transform = `translateY(+${activeSlideIndex * sliderHeight}px)` ;

}


