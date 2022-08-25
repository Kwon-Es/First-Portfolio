$(function(){


    //1.Header
    let winWidth = $(window).width();

    if(winWidth < 1200){
        //1-1. 버튼 클릭 시 메뉴영역 나타나고 사라지기
        $('.openM').on('click', function(){
            $('.menu').stop().animate({
                left:0
            }), 400;
        });
        $('.closeM').on('click', function(){
            $('.menu').stop().animate({
                left:'-100%'
            }), 400;
        });

        //1-2. 메인메뉴 클릭 시, 서브메뉴1 나타내기
        $('.depth1 h3').on('click', function(){
            $(this).siblings().stop().slideToggle(400);
            $(this).parent().siblings().find('.depth2').stop().slideUp(400);
        });
        //1-3. 서브메뉴1 클릭 시, 서브메뉴2 나타내기\
        $('.depth2>li p').on('click', function(){
            $(this).siblings().stop().slideToggle(400);
            $(this).parent().siblings().find('.depth3').stop().slideUp(400);
            //arrow 아이콘 회전
            $(this).toggleClass('on').parent().siblings().find('p').removeClass('on');
        });
    } else {
         //1-1. 메인메뉴 hover 시, 서브메뉴1 나타나고 사라지기
         $('.depth1 h3').on('mouseenter', function(){
            $(this).siblings().stop().show();
            $(this).parent().siblings().find('.depth2').stop().hide();
            $('.subBg').stop().show();
        });
        $('.depth1').on('mouseleave', function(){
            $(this).find('.depth2').stop().hide();
            $('.subBg').stop().hide();
        })

        //1-2. 서브메뉴1 hover 시, 서브메뉴2 나타내기, 아이콘 회전
        $('.depth2>li p').on('mouseenter', function(){
            $(this).siblings().stop().show();
            $(this).parent().siblings().find('.depth3').stop().hide();
            $(this).children('.isub').css({
                transform : `rotate(0deg)`,
                paddingRight : `0px`
            }).parents('li').siblings().find('.isub').css({
                transform : `rotate(90deg)`,
                paddingRight : `2px`
            });
        });
        $('.depth2').on('mouseleave', function(){
            $(this).find('.depth3').stop().hide();
            $(this).find('.isub').css({
                transform : `rotate(90deg)`,
                paddingRight : `2px`
            });
        });


        //1-3. 아이콘 클릭 시, 써치박스 나타내기
        $('.isc').on('click', function(){
            $('.scBox').stop().toggle();
        });
    
    };


    //2.Mainvisual
    //(all)
    //메인비주얼 이미지 자동 슬라이드
    $('.simg').slick({
        slidesToShow:1,//화면에서 보여질 이미지 개수
        slidesToScroll:1, //스크를시 이동할 이미지 개수
        arrows:false,//기본값, 사용함
        dots:true, //pager 사용 여부, 기본값:false
        speed:700,//다음페이지로 넘어가는 시간
        autoplay:true, //자동재생 여부, 포트폴리오에서는 항상 켜놓기
        autoplaySpeed:1200, //자동재생시 이미지가 유지되는 시간
        pauseOnhHover:false,//기본값, 마우스 hover시 자동재생 멈춤 여부
        pauseOnFocus: false,
        infinite:true,//무한반복 여부, 마지막 요소>>첫번째 요소
        vertical:false//세로 슬라이드   
    });


    //3.Curation
    //3-1.(360~767px) 큐레이션 이미지 자동 슬라이드
    $('.cimgM').stop().slick({
        responsive:[
            {
                breakpoint : 20000,//768~
                settings : "unslick"
            },
            {
                breakpoint : 768,//360~767
                settings : {
                    slidesToShow:1,
                    slidesToScroll:1,
                    arrows:false,
                    dots:true,
                    speed:700,
                    autoplay:true,
                    autoplaySpeed:1200,
                    pauseOnhHover:false,
                    pauseOnFocus: false,
                    infinite:true,
                    vertical:false
                }
            }
        ]
    });
    
    //3-2.(768px~) 큐레이션 이미지 자동 슬라이드
    $('.cimgPC').stop().slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        dots:false,
        speed:700,
        autoplay:true,
        autoplaySpeed:1200,
        pauseOnhHover:false,
        pauseOnFocus: false,
        infinite:true,
        vertical:false, //1200~
        responsive:[
            {
                breakpoint : 768,//360~767
                settings : "unslick"
            }
        ]
    });

    //3-3.(768px~) 큐레이션 Pager 탭메뉴
    $('.curPager li').on('click', function(){
        let i = $(this).index();
        
        $(this).addClass('on').siblings().removeClass('on');
        $('.curR>li').eq(i).addClass('on').siblings().removeClass('on');
        $('.curL>li').eq(i).addClass('on').siblings().removeClass('on');
        $('.cimgPC').slick('setPosition'); //slick 대상의 자리를 다시 잡아줌
    });


    //4.Promotion
    //4-1.(all) 드라마 포스터 자동 슬라이드
    $('.dList').slick({
        slidesToShow:4,
        slidesToScroll:2,
        arrows:true,
        dots:false,
        speed:700,
        autoplay:true,
        autoplaySpeed:1200,
        pauseOnhHover:false,
        pauseOnFocus: false,
        infinite:false,
        vertical:false, //1200~
        responsive:[
            {
                breakpoint : 1200,//640~1199
                settings : {
                slidesToShow:3,
                slidesToScroll:2
                }
            },
            {
                breakpoint : 640,//360~639
                settings : {
                slidesToShow:2,
                slidesToScroll:1
                }
            }
        ]
    });

    //4-2.(360~767px) 셀러브리티 이미지 자동 슬라이드
    $('.celebM').stop().slick({
        responsive:[
            {
                breakpoint : 20000,//768~
                settings : "unslick"
            },
            {
                breakpoint : 768,//360~767
                settings : {
                    slidesToShow:2,
                    slidesToScroll:1,
                    arrows:true,
                    dots:false,
                    speed:700,
                    autoplay:true,
                    autoplaySpeed:1200,
                    pauseOnhHover:false,
                    pauseOnFocus: false,
                    infinite:true,
                    vertical:false
                }
            }
        ]
    });

    //4-3.셀러브리티 Pager 탭메뉴
    $('.clPager li').on('click', function(){
        let i = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $('.celebR>div').eq(i).addClass('on').siblings().removeClass('on');
        $('.celebL>li').eq(i).addClass('on').siblings().removeClass('on');
    });


    //5.Review
    //5-1. 리뷰 자동 슬라이드
    $('.rWrap').stop().slick({
        slidesToShow:4,
        slidesToScroll:4,
        arrows:false,
        dots:false,
        speed:700,
        autoplay:true,
        autoplaySpeed:1200,
        pauseOnhHover:false,
        pauseOnFocus: false,
        infinite:true,
        vertical:false,
        responsive:[
            {
                breakpoint : 1200,//640~1199
                settings : {
                    slidesToShow:3,
                    slidesToScroll:3
                }
            },
            {
                breakpoint : 640,//360~639
                settings : {
                    slidesToShow:2,
                    slidesToScroll:1
                }
            }
        ]
    });

    //타이틀 탭메뉴
    $('.tabM div').on('click', function(){
        let i = $(this).index();
        
        $(this).addClass('on').siblings().removeClass('on');
        $('.rList>li').eq(i).addClass('on').siblings().removeClass('on');
        $('.rWrap').slick('setPosition');
    });


    //6.(all) CS 영역 VR 이미지 수동 슬라이드
    $('.vrR').slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        dots:false,
        speed:700,
        autoplay:false,
        autoplaySpeed:1200,
        pauseOnhHover:false,
        pauseOnFocus: false,
        infinite:true,
        vertical:false
    });
    
    //7.window
    $(window).on('resize', function(){
        document.location.reload();
    });


    //8.goTop
    //8-1.일정값 이상 스크롤했을 때 goTop버튼 스르륵 나타나기
    $(window).on('scroll',function(){
        let scr = $('html, body').scrollTop();
        console.log(scr);

        if( scr > 1100 ){
            $('.goTop').addClass('on')
        } else{
            $('.goTop').removeClass('on')
        };
    });

    //8-2.goTop 버튼 클릭 시, 최상단으로 이동
    $('.goTop').on('click', function(){
        window.scrollTo({top:0, behavior:"smooth"});
    });

     



}); //opening