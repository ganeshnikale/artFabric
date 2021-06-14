var swiperCarousel = '.available-design ',
options = {
    loop: true,
    speed: 1000,
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },  
};


   

    var mySwiper = new Swiper(swiperCarousel, options);
    mySwiper.init();

    var swiper = new Swiper('.swiper-coverflow', {
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        initialSlide: 3,
        keyboardControl: true,
        mousewheelControl: true,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false,
        lazyLoadingInPrevNext: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
       
        coverflow: {
            rotate: 0,
            stretch: 40,
            depth: 400,
            modifier: 1,
            
            slideShadows : false,
        }
    });


    var swiperThumbnal = new Swiper('.swiper-thumb', {
        spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
     });

    var swiperThumbnalSlide = new Swiper('.swiper-slide--main', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: swiperThumbnal
        }
    });

   
 


$('.accordion__tab-header').click(function() {
    // $('.accordion__tab-container, .accordion__tab-header').removeClass('open');
     $(this).children('.accordion__icon').toggleClass('icon-plus icon-minus');
    
    var myEm = $(this).attr('data-tab-header');
    $('.accordion__tab-container[data-tab-container = '+myEm+']').toggleClass('open');

  
});

    
    $('.menu-toggle').click(function(event){
        
        $('body').addClass('menu-open');
        
    });

    $('.backdrop').on('click', function(){
        $('body').removeClass('menu-open');
    })


    $('.modal-trigger').click(function() {
        var myEm = $(this).attr('data-modal');
        $('.modal[data-modal-target = '+myEm+']').toggleClass('show');  
    });






