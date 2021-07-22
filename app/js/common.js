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
            stretch: 80,
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


     var thumbDemo3 = new Swiper('.thumb-demo-3', {
      spaceBetween: 10,
    // slidesPerView: 4,
    // freeMode: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
      direction: 'vertical',
	    spaceBetween: 10,
   });

     var swiperDemoView2 = new Swiper(".swiper-demo-view2", {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 10,
        // loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

    var swiperThumbnalSlide = new Swiper('.swiper-slide--main', {
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: swiperThumbnal
        }
    });

    var swiperDemoView3 = new Swiper('.swiper-demo-view-3', {
      spaceBetween: 10,
      direction: 'vertical',
	
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: thumbDemo3,
        
      }
  });

    var galleryTop = new Swiper('.gallery-topxx', {
    slidesPerView: 1,  
  loop: true,
  loopedSlides: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var galleryThumbs = new Swiper('.gallery-thumbsxx', {
  direction: 'vertical',
  slidesPerView: 4,
  slideToClickedSlide: true,
  spaceBetween: 10,
  loopedSlides: 50,
  loop: true,
});


galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
   
$('.masonry-grid').isotope({
    itemSelector: '.demo4-card',
    fitWidth: true
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
