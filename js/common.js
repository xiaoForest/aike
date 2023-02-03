jQuery(document).ready(function ($) {
    let mlNav = $('.magnetic-levitation');
    let h = 100

    function navMain() {
        var r = 0,
            n = $(".header-light").length ? "light" : "dark";
        $(window).on("scroll", function () {
            var t = $(this).scrollTop(),
                u = $(".header-fixed").length,
                i;
            // mlNav.length && window.innerWidth > 991 && (i = [],
            mlNav.length && window.innerWidth && (i = [],
                $(".magnetic-levitation a").each(function () {
                    var n = $(this).attr("href");
                    $(n).length && i.push({
                        href: n,
                        scroll: $(n).offset().top - 300
                    })
                }),
                $("body.is-scrolling").length == 0 && $.each(i, function (n, t) {
                    window.scrollY > t.scroll && ($(".magnetic-levitation a.active").removeClass("active"),
                        $('.magnetic-levitation a[href="' + t.href + '"]').addClass("active"))
                }));
            r = t
        });
        $(".cd-search-trigger").on("click", function () {
            return false
        })
    }

    function scrollTo() {
        $(document).on("click", 'a[href^="#"][href!="#"]', function (n) {

            var i = $($(this).attr("href")),
                t = i.offset().top - h;
            $("body").addClass("is-scrolling");
            mlNav.length && (t -= $(".fixed-bar").height(),
                $('a[href^="#"]').removeClass("active"),
                $(this).addClass("active"));

            $("html, body").stop().animate({
                scrollTop: t
            }, 500, function () {
                $("body").removeClass("is-scrolling")
            });

            n.preventDefault()
        });
        location.hash && ($el = $(location.hash),
            $el.length && $("html, body").stop().animate({
                scrollTop: $el.offset().top - h
            }, 800))

    }
    $('.magnetic-levitation').length && navMain()
    $('.magnetic-levitation').length && scrollTo()

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

    function aboutIndex() {
        var aboutSwiper3 = new Swiper('.about-s1 .swiper-container', {
            speed: 800,
            // centeredSlides: true,
            mousewheel: true,
            slidesPerView: 4,
            spaceBetween: 30,
            parallax: true,
            loop: false,
            simulateTouch: true,
            navigation: {
                prevEl: $('.about-s1 .button-prev'),
                nextEl: $('.about-s1 .button-next'),
            },
            // pagination: {
            //     el: '.index-s3 .swiper-pagination',
            //     clickable: true,
            // },
            scrollbar: {
                el: '.about-s1 .swiper-scrollbar',
                draggable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                990: {
                    slidesPerView: 2,
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
    $('.about-certification').length && aboutIndex();

    function newsInit() {
        var newsSwiper1 = new Swiper('.news-s1 .swiper-container', {
            speed: 800,
            parallax: true,
            spaceBetween: 10,
            simulateTouch: true,
            pagination: {
                el: '.news-s1 .swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        });
    }
    $('.news-bannre').length && newsInit();

    if ($('.m2lcWpr').length) {
        $(window).scroll(function () {
            if ($(document).scrollTop() > ($('.m2lcWpr').offset().top - $(window).height() / 3)) {
                $(".slideMenu").fadeIn(200);
            } else {
                $(".slideMenu").fadeOut(200);
            }
            // if ($(document).scrollTop() > ($('.hmCon7').offset().top - $(window).height() / 1.2)) {
            //     $(".slideMenu").css("opacity", 0);
            // } else {
            //     $(".slideMenu").css("opacity", 1);
            // }

            var h = 0;
            var dh = $(".m2lcLine").offset().top;
            h = ($(document).scrollTop() + $(window).height() / 2 + 20) - dh;
            $(".m2lcLine i").css("height", h);
            //$("title").text(dh);
            // $(".m2lcItems li").each(function (i) {
            //     if ($(document).scrollTop() + ($(window).height() / 1.9) >= $(".m2lcItems li").eq(i).offset().top) {
            //         $(".m2lcYr").removeClass("on");
            //         $(".m2lcYr").eq(i).addClass("on");
            //         $(".m2lcItems li").eq(i).addClass("on");
            //     } else {
            //         $(".m2lcItems li").eq(i).removeClass("on");
            //     }
            // });
            $(".maoLink").each(function (i) {
                if ($(document).scrollTop() + 500 >= $(".maoLink").eq(i).offset().top) {
                    $(".slideMenu_a").removeClass("on");
                    $(".slideMenu_a").eq(i).addClass("on");
                }
            });
        });


    }

    if ($('.emc-banner').length) {
        $('.emc-banner .btns .button').on('click', function (e) {
            if ($(this).hasClass('on')) return false
            $(this).addClass('on').siblings().removeClass('on')
            $(this).parents('.emc-banner').toggleClass('on')
        })
    }

    function recruitList() {
        $('.recruit-list .wrapper-dropdown').click(function(){
            $(this).toggleClass('active').parents('.boxes').siblings().find('.wrapper-dropdown').removeClass('active');
        })
        $('.recruit-list ul li').click(function () {
            var text = $(this).text();
            $('.recruit-list .wrapper-dropdown').addClass('find')
            $(this).parents('.select').find('input').attr('value', text);
        })
    }
    $('.recruit-list').length && recruitList();


    if ($('.data-main').length) {
        $('.data-list .li .row').click(function () {
            var _par = $(this).parent();
            if (!_par.hasClass('on')) {
                _par.addClass('on').siblings().removeClass('on'), _par.siblings().find('.hide').slideUp(), _par.find('.hide').slideDown();
            } else {
                _par.removeClass('on').find('.hide').slideUp();
            }
        })
    }

    function contactInit() {
        var _para, _img, lnglat = [],
            x, y;
        _para = '<p>北京爱科创业电子技术有限公司</p>';
        _img = '';
        lnglat = '116.244888,40.083556';
        x = '116.244888';
        y = '40.083556';

        var map = new AMap.Map('map', {
            resizeEnable: true,
            scrollWheel: false,
            zoom: 17,
            center: [x, y],
            mapStyle: 'amap://styles/whitesmoke',
        });
        openInfo(_para, _img);
        var marker = new AMap.Marker({
            icon: 'images/contact/location.png',
            size: new AMap.Size(28, 35),
            offset: new AMap.Pixel(-28, -20),
            position: map.getCenter(),
            draggable: false,
            cursor: 'pointer'
        });
        marker.setMap(map);
        marker.on('click', function () {
            infoWindow.open(map, map.getCenter());
        });

        function openInfo(para, ewm) {
            //构建信息窗体中显示的内容
            var info = [];
            info.push(
                '<div class="map-cont"><div class="text">' + para + '</div></div>');
            infoWindow = new AMap.InfoWindow({
                content: info.join(""),
                offset: new AMap.Pixel(-14, -40)
            });
            infoWindow.setAnchor('bottom-center')
            infoWindow.open(map, map.getCenter());
        }
    }

    $('.map-main').length && contactInit();

    const sin = Math.sin;
    const cos = Math.cos;
    const PI = Math.PI;
    const fov = 150;
    class Dot {
        constructor(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }

    let canvas;
    let context;
    let dots = [];
    let dotsLength = (innerWidth + innerHeight) / 20;

    function setSize() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        initDots();
        context.fillStyle = '#ffffff';
        if (innerWidth < 800) {
            context.globalAlpha = 0.3;
        } else {
            context.globalAlpha = 0.8;
        }
    }

    function initDots() {
        dots = [];
        dotsLength = (innerWidth + innerHeight) / 20;
        let x, y, z;
        for (let i = 0; i < dotsLength; i++) {
            x = Math.random() * innerWidth - innerWidth / 2;
            y = Math.random() * innerHeight - innerHeight / 2;
            z = Math.random() * innerWidth - innerWidth / 2;
            dots.push(new Dot(x, y, z));
        }
    }

    function drawDots(dot) {
        let scale, x2d, y2d;
        scale = fov / (fov + dot.z);
        x2d = dot.x * scale + innerWidth / 2;
        y2d = dot.y * scale + innerHeight / 2;
        context.fillRect(x2d, y2d, scale * 3, scale * 2);
    }

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        let dot;
        for (let i = 0; i < dots.length; i++) {
            dot = dots[i];
            dot.z -= 4;
            if (dot.z < -fov) {
                dot.z += (innerWidth + innerHeight) / 2;
            }
            drawDots(dot);
        }
        requestAnimationFrame(render);
    }

    function talentInit() {
        canvas = document.querySelector('.canvas');
        context = canvas.getContext('2d');
        setSize();
        render();
    }

    addEventListener('resize', setSize);
    $('.talent-occupation').length && talentInit();
})