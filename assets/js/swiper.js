$(document).ready(
    () => {
        const swiper1 = new Swiper('#department_slider',
            {
                slidesPerView: 'auto',
                loop: true,
                spaceBetween: 18,
                navigation: {
                    prevEl: '#department_previous',
                    nextEl: '#department_next',
                },
            }
        );

        const swiper2 = new Swiper('#offer_slider', 
            {
                slidesPerView: 'auto',
                loop: true,
                spaceBetween: 20,
                navigation: {
                    prevEl: '#offer_previous',
                    nextEl: '#offer_next',
                },
            }
        );
    }
);