window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "16"
    },
    "share": {}
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

jQuery(document).ready(function ($) {
    var PC = $(window).width() > 1024,
        mobile = $(window).width() <= 768,
        winWidth = $(window).width(),
        winHeight = $(window).height();
    $('.count').length && $('.count').countUp();
    $(window).load(function () {
        $('html').addClass('dom-loaded');
    })

    if (!$('.changeHeader').length) {
        $(window).scroll(function () {
            let htmlHeight = $(window).height()
            let scrollTop = $(window).scrollTop();
            let headHeight = $('.headerTop').height()
            if (scrollTop <= headHeight) {
                $('header').removeClass('changeHeader')
                $('.nav-desktop li').removeClass('on')
                $('.subnav-desktop').removeClass('active')
            } else {
                $('header').addClass('changeHeader')
            }
        })
    }

    function mHeader() {
        var $search = $('.searchTcWrap')
        if ($(window).width() < 1199) {
            let h = window.innerHeight - 56;
            $(".mOpenMenu").click(function (e) {
                $search.removeClass('open_search')
                $(".mOpenSearch").removeClass('active act')
                $('.languageWrap').removeClass('act')
                if ($(this).hasClass('active')) {
                    $("body").css("overflow", "inherit");
                } else {
                    $("body").css("overflow", "hidden");
                }
                $(".navMobileBox").css("height", h + "px");
                $(this).toggleClass("active");
                $(".navMobileBox").stop().slideToggle();
            });

            $(".mCloseBtn,.mMenuLayBg").click(function () {
                $("body").css("overflow", "inherit");
            });

            //Search
            $(".mOpenSearch").click(function () {
                $(this).toggleClass('active act')
                $search.toggleClass('open_search')
                if (!$(this).hasClass('active')) {
                    $("body").css("overflow", "inherit");
                } else {
                    $("body").css("overflow", "hidden");
                }
                if ($(".mOpenMenu").hasClass('active')) {
                    $(".mOpenMenu").removeClass('active')
                    $(".navMobileBox").stop().slideToggle();
                }
            });
        }

        $('.onSearch').on('click', function () {
            $search.addClass('open_search')
        })

        $('.closeSearch').on('click', function () {
            $search.removeClass('open_search')
            $("body").css("overflow", "inherit");
        })
        $('#languageEarth').on('click', function () {
            $('.languageWrap').addClass('act')
        })
        $('#languageGetBack').on('click', function () {
            $('.languageWrap').removeClass('act')
        })

        $('.navMoblie li>a').on('click', function () {
            $(this).toggleClass('active').parent().siblings().children().removeClass('active')
            $(this).next().slideToggle().parent().siblings().children().next().slideUp()
        })
        $('.navMoblie li .list-dl dt').on('click', function () {
            $(this).toggleClass('active').parent().siblings().children().removeClass('active')
            $(this).next().slideToggle().parent().siblings().children().next().slideUp()
        })
    }
    mHeader()

    function indexInit() {

        // section1
        var indexSwiper1 = new Swiper('.index-s1 .swiper-container', {
            speed: 800,
            parallax: true,
            simulateTouch: true,
            navigation: {
                prevEl: $('.index-s1 .button-prev'),
                nextEl: $('.index-s1 .button-next'),
            },
            pagination: {
                el: '.index-s1.swiper-pagination',
                clickable: true,
            },
            on: {
                init: function (swiper) {
                    let n = 0
                    $('.index-s1.swiper-number').html(`<span>${n}${this.activeIndex+1}</span>/<span>${n}${this.slides.length}</span>`)
                },
                slideChangeTransitionStart: function (swiper) {
                    let n = 0
                    $('.index-s1.swiper-number').html(`<span>${n}${this.activeIndex+1}</span>/<span>${n}${this.slides.length}</span>`)
                },
            },
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        });
        var indexSwiper2 = new Swiper('.index-s2 .swiper-container', {
            speed: 800,
            parallax: true,
            loop: true,
            direction: 'vertical',
            simulateTouch: false,
            navigation: {
                prevEl: $('.index-s2 .button-prev'),
                nextEl: $('.index-s2 .button-next'),
            },
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        });
        var indexSwiper3 = new Swiper('.index-s3 .swiper-container', {
            speed: 800,
            // centeredSlides: true,
            mousewheel: true,
            slidesPerView: 2.5,
            spaceBetween: 30,
            parallax: true,
            loop: false,
            simulateTouch: true,
            navigation: {
                prevEl: $('.index-s3 .button-prev'),
                nextEl: $('.index-s3 .button-next'),
            },
            pagination: {
                el: '.index-s3 .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                990: {
                    slidesPerView: 1.5,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
            },
            // autoplay: {
            //     delay: 6000,
            //     stopOnLastSlide: false,
            //     disableOnInteraction: true,
            // },
        });
    }
    $('.home-banner').length && indexInit();

})