$(document).ready(
    () => {
        let swiper = new Swiper('#departmentsSlider',
            {
                slidesPerView: 'auto',
                loop: true,
                spaceBetween: 18,
                navigation: {
                    prevEl: '#departmentsPrevious',
                    nextEl: '#departmentsNext'
                }
            }
        );
    }
);