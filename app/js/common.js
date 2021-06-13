var mySwiper = new Swiper('.available-design', {
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

// el[i].addEventListener('click', function(){
//     var val = el.dataset.tabHeader;
//     console.log(val);
//     var x = target.getAttributeNode('data-tab-container').value;
//     if(target.dataset.tabContainer == val){
//         target.classList.toggle('open')
//     }
//     console.log(target.getAttributeNode('data-tab-container').nodeValue);


// });





