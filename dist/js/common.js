var mySwiper=new Swiper(".available-design",{loop:!0,speed:1e3,slidesPerView:5,spaceBetween:30,autoplay:{delay:3e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});$(".accordion__tab-header").click((function(){$(this).children(".accordion__icon").toggleClass("icon-plus icon-minus");var e=$(this).attr("data-tab-header");$(".accordion__tab-container[data-tab-container = "+e+"]").toggleClass("open")})),$(".menu-toggle").click((function(e){e.stopPropagation(),$("body").addClass("menu-open")})),$("body").click((function(e){$(this).removeClass("menu-open"),e.stopPropagation()}));
//# sourceMappingURL=common.js.map