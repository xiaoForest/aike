window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

jQuery(document).ready(function($) {
	var PC = $(window).width() > 1024,
        mobile = $(window).width() <= 768,
        winWidth = $(window).width(),
        winHeight = $(window).height();
    $('.count').length && $('.count').countUp();
    $(window).load(function () {
        $('html').addClass('dom-loaded');
    })

    // header
    if(PC){
        $(window).scroll(function(){
            $(window).scrollTop() > 10 ? $('.header').addClass('down') : $('.header').removeClass('down')
        })
    }else{
        $('.header').append(
            '<div class="mNavBtn"><span class="line1"></span><span class="line2"></span><span class="line3"></span></div>'
        );
        $('.header .mNavBtn').click(function () {
            $(this).toggleClass('active');
            $('.header .nav').toggleClass('active');
        });
    }
    $('.header .search').click(function () {
        $('.fixed-search').addClass('active');
    })
    $('.fixed-search .close').click(function () {
        $('.fixed-search').removeClass('active');
    })
    $('.fixed-search button').click(function () {
        var _this = $('.fixed-search input[type="text"]');
        var _val = _this.val();
        val = $.trim(_val);
        if (val == "") {
            alert("请输入关键字");
            return false;
        }
    })



    function videoPopups(){
        $('.video-btn').click(function () {
            var _url = $(this).attr('data-url')
            $('.video-pop video').attr('src', _url)
            $('.video-pop video')[0].play();
            $('.video-pop').fadeIn(400);
            $('body').addClass('hidden');
        })
        $('.video-pop .close,.video-pop .bg').click(function () {
            $('.video-pop').fadeOut(400);
            $('body').removeClass('hidden');
        })
    }
    $('.video-pop').length && videoPopups();



	function indexInit(){
        if(PC){
            var canc = false;
            var indexPage = new fullpage('.index-main', {
                navigation: false,
                anchors: ['1', '2', '3', '4', '5', '6'],
                onLeave: function(origin, destination, direction){
                    var loadedSection = this;
                    if(destination.anchor == 1){
                        $('.header').removeClass('hover down');
                    }else{
                        $('.header').addClass('hover down');
                    }
                },
                afterLoad: function(origin, destination, direction){
                    if(destination.anchor == 2){
                        canc = true;
                    }else{
                        canc = false;
                    }
                    if(canc){
                        $('.index-s2 .data span').countUp();
                    }
                    if(destination.anchor == 5 || destination.anchor == 6){
                        $('.index-s5').addClass('ani')
                    }else{
                        $('.index-s5').removeClass('ani')
                    }
                }
            });
        }

        // section1
        var indexSwiper1 = new Swiper('.index-s1 .items', {
            speed: 800,
            // parallax : true,
            simulateTouch: false,
            navigation: {
                prevEl: $('.index-s1 .button-prev'),
                nextEl: $('.index-s1 .button-next'),
            },
            pagination: {
                el: '.index-s1 .pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<div class="' + className + '"><span>0' + (index + 1) + '</span><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="495px" height="25px" viewBox="-0.278 16.444 495 25" enable-background="new -0.278 16.444 495 25"><polyline class="line-1" fill="none" stroke-width="2" stroke-miterlimit="10" points="1,0 1,40.362 493.892,40.362 493.892,0 "/><<polyline class="line-2" fill="none" stroke-width="2" stroke-miterlimit="10" points="1,0 1,40.362 493.892,40.362 493.892,0 "/></svg></div>';
                },
                bulletClass : 'num',
                bulletActiveClass: 'active',
            },
        });

        // section3
        $('.index-s3 .tab-tit .item').hover(function(){
            $(this).addClass('active').siblings().removeClass('active'), $('.index-s3 .tab-cont .item').eq($(this).index()).addClass('active').siblings().removeClass('active'), $('.index-s3 .bg-box .item').eq($(this).index()).addClass('active').siblings().removeClass('active')
        })

        // section3
        $('.index-s4 .cont-box .item').hover(function(){
            $(this).addClass('active').siblings().removeClass('active'), $('.index-s4 .bg-box .item').eq($(this).index()).addClass('active').siblings().removeClass('active')
        })
    }
    $('.index-main').length && indexInit();



    function contactInit(){
        var _para, _img, lnglat = [], x, y;
        _para = $('.contact-s2 .tab-tit .item').eq(0).attr('data-para');
        _img = $('.contact-s2 .tab-tit .item').eq(0).attr('data-ewm');
        lnglat = $('.contact-s2 .tab-tit .item').eq(0).attr('data-lnglat');
        x = $('.contact-s2 .tab-tit .item').eq(0).attr('x');
        y = $('.contact-s2 .tab-tit .item').eq(0).attr('y');
        var map = new AMap.Map('map', {
            resizeEnable: true,
            scrollWheel: false,
            zoom: 17,
            center: [x,y],
            mapStyle: 'amap://styles/25b539fed6d119e12c34209ee6958f37'
        });
        // var infoWindow = new AMap.InfoWindow({
        //     anchor: 'bottom-center',
        //     content: '<div class="map-cont"><div class="img-box cell-box"><img src="images/foot-logo.png" alt="" class="cell" /></div><div class="txt"></div><div class="ewm"></div></div>',
        //     offset: new AMap.Pixel(-14, -30)
        // });
        // infoWindow.open(map,[116.435671,39.934705])
        openInfo(_para, _img);
        var marker = new AMap.Marker({
            icon: 'images/contact/map.png',
            size: new AMap.Size(28, 35),
            offset: new AMap.Pixel(-28,-20),
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
                '<div class="map-cont"><div class="img-box cell-box"><img src="images/foot-logo.png" alt="" class="cell" /></div><div class="txt">'+ para +'</div><div class="ewm"><img src="'+ ewm +'" alt="" /></div></div>');
            infoWindow = new AMap.InfoWindow({
                content: info.join(""),
                offset: new AMap.Pixel(-14, -40)
            });
            infoWindow.setAnchor('bottom-center')
            infoWindow.open(map, map.getCenter());
        }
        $('.contact-s2 .tab-tit .item').click(function () {
            _para = $(this).attr('data-para');
            _img = $(this).attr('data-ewm');
            lnglat = $(this).attr('data-lnglat');
            x = $(this).attr('x');
            y = $(this).attr('y');
            AMap.plugin('AMap.Geocoder', function () {
                var geocoder = new AMap.Geocoder({
                    city: '全国'
                })
                geocoder.getAddress(lnglat, function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        console.log(status, result)
                        // console.log(result.regeocode.formattedAddress)
                        marker.setPosition(new AMap.LngLat(x, y));
                        map.setFitView(marker);
                        openInfo(_para, _img);
                    }
                })
            })
            $('.contact-s2 .tab-tit .item').eq($(this).index()).addClass('active').siblings().removeClass('active');
        })



    }
    $('.contact-page').length && contactInit();



    function aboutHistory(){
        if(PC){
            var arr = [],
                h = $('.about-history-s1 .item'),
                j = $('.about-history-s1 .line-box .line'),
                k = $('.about-history-s1 .line-box'),
                l;
            h.each(function(){
                var m = $(this).offset().top;
                arr.push(m);
            })
            $(window).scroll(function(){
                l = $(window).scrollTop();
                l > winHeight/2 ? k.addClass('show') : k.removeClass('show')
                var key =0;
                var flag = true;
                for(var i =0; i<arr.length; i++){
                    key++;
                    if(flag){
                        if(l >= arr[arr.length-key] - winHeight/2){
                            var index = arr.length-key;
                            flag = false;
                        }else{
                            flag=true;
                        }

                    }
                }
                h.eq(index).addClass('active').siblings().removeClass('active');
                j.eq(index).addClass('active').siblings().removeClass('active');
            })
            j.click(function(){
                var n = $(this).index();
                $('html,body').animate({
                    'scrollTop': h.eq(n).offset().top - winHeight/3
                }, 500)
            })
        }
    }
    $('.about-history').length && aboutHistory();



    function recruitIdea(){
        $('.recruit-idea-s5 .left-box .item').mouseenter(function(){
            $(this).addClass('active').siblings().removeClass('active'), $('.recruit-idea-s5 .right-box .item').eq($(this).index()).addClass('active').siblings().removeClass('active')
        })
    }
    $('.recruit-idea').length && recruitIdea();



    function recruitList(){
        $('.recruit-list ul li').click(function(){
            var text = $(this).text();
            $(this).parents('.select').find('input').attr('value',text);
        })

        $('.recruit-list-s2 .item .show').click(function(){
            var _par = $(this).parent();
            if(!_par.hasClass('active')){
                _par.addClass('active').siblings().removeClass('active'), _par.siblings().find('.hide').slideUp(), _par.find('.hide').slideDown();
            }else{
                _par.removeClass('active').find('.hide').slideUp();
            }
        })
    }
    $('.recruit-list').length && recruitList();



    function aboutIndex(){

        // section3
        // var arrayHeight = new Array();
        // for (var i = 0; i < $('.about-page-s3 .tab-cont .child').length; i++) {
        //     arrayHeight.push($('.about-page-s3 .tab-cont .child').eq(i).find('.para').height())
        // }
        // var max = Math.max.apply(null, arrayHeight);
        // console.log(arrayHeight)
        // $('.about-page-s3 .tab-cont .child').hide();
        // $('.about-page-s3 .tab-cont .child').find('.para').height(max)
        var f = 0,
            g = $('.about-page-s3 .year .item').length - 1,
            h = 100 / g,
            j;
        $('.about-page-s3 .year .item:eq(0)').addClass('active')
        var aboutSwiper3 = new Swiper('.about-page-s3 .year', {
            speed: 500,
            slidesPerView: 8,
            spaceBetween: 100,
            simulateTouch : false,
            slideToClickedSlide: true,
            navigation: {
                prevEl: $('.about-page-s3 .button-prev'),
                nextEl: $('.about-page-s3 .button-next'),
            },
            breakpoints: {
                1600: {
                    spaceBetween: 80,
                },
                1366: {
                    spaceBetween: 60,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                }
            },
            on: {
                transitionStart: function() {
                },
                init: function() {
                    this.emit('transitionStart');
                }
            }
        });
        $('.about-page-s3 .year .item').click(function(){
            f = $(this).index()
            j = f * h
            $('.about-page-s3 .airplane img').css('left', j+'%')
            $(this).addClass('active').siblings().removeClass('active')
            $('.about-page-s3 .tab-cont .child').eq($(this).index()).addClass('active').siblings().removeClass('active')
        })
        $('.about-page-s3 .button-prev').click(function(){
            f--;
            if(f < 0){
                f = 0;
                return false;
            }
            j = f * h
            $('.about-page-s3 .airplane img').css('left', j+'%')
            $('.about-page-s3 .year .item').eq(f).addClass('active').siblings().removeClass('active')
            $('.about-page-s3 .tab-cont .child').eq(f).addClass('active').siblings().removeClass('active')
        })
        $('.about-page-s3 .button-next').click(function(){
            f++;
            if(f > g){
                f = g;
                return false;
            }
            j = f * h
            $('.about-page-s3 .airplane img').css('left', j+'%')
            $('.about-page-s3 .year .item').eq(f).addClass('active').siblings().removeClass('active')
            $('.about-page-s3 .tab-cont .child').eq(f).addClass('active').siblings().removeClass('active')
        })

        // section5
        $('.about-page-s5 .tab-tit span').click(function(){
            $(this).addClass('active').siblings().removeClass('active')
            $('.about-page-s5 .tab-cont .child').eq($(this).index()).addClass('active').siblings().removeClass('active')
        })

        // section6
        $('.about-page-s6 .pagination span.total').text('0'+ $('.about-page-s6 .right-box .item').length)
        var aboutSwiper4 = new Swiper('.about-page-s6 .right-box .items', {
            speed: 500,
            slidesPerView: 2,
            simulateTouch : false,
            loop: true,
            navigation: {
                prevEl: $('.about-page-s6 .button-prev'),
                nextEl: $('.about-page-s6 .button-next'),
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                }
            },
            on: {
                transitionStart: function() {
                    $('.about-page-s6 .pagination span.curr').text('0'+ (this.realIndex + 1))
                    $('.about-page-s6 .left-box .item').eq(this.realIndex).addClass('active').siblings().removeClass('active')
                },
                init: function() {
                    this.emit('transitionStart');
                }
            }
        });

    }
    $('.about-page').length && aboutIndex();



    function solutionPage1(){
        var solutionSwiper = new Swiper('.solution-s4 .items', {
            speed: 500,
            slidesPerView: 5,
            // simulateTouch : false,
            spaceBetween: 0.02 * winWidth,
            centeredSlides: true,
            loop: true,
            autoplay: {
                disableOnInteraction: false,
            },
            breakpoints: {
                1600: {
                    spaceBetween: 0,
                },
                769: {
                    slidesPerView: 1,
                }
            },
            pagination: {
                el: '.solution-s4 .pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
                bulletClass : 'num',
                bulletActiveClass: 'active',
            },
        });

        $('.solution-tabtit .item').mouseenter(function(){
            $(this).addClass('active').siblings().removeClass('active'), $(this).parents('.solution-tabtit').next().find('.child').eq($(this).index()).addClass('active').siblings().removeClass('active')
        })
    }
    $('.solution-page1').length && solutionPage1();



    function solutionPage2(){
        var i = 0;
        var timer = setInterval(circle, 2000)
        function circle(){
            i++;
            if(i > 9){
                i=0
            }
            $('.solution-s11 .img-box .box').eq(i).addClass('active').siblings().removeClass('active')
        }
    }
    $('.solution-page2').length && solutionPage2();



    function solutionPage3(){
        $('.solution-tabtit .item').mouseenter(function(){
            $(this).addClass('active').siblings().removeClass('active'), $(this).parents('.solution-tabtit').next().find('.child').eq($(this).index()).addClass('active').siblings().removeClass('active')
        })
    }
    $('.solution-page3').length && solutionPage3();



})