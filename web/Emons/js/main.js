$(function(){
        /////[2]mainvisual
        //1.슬라이드
        $('.simg').slick({
            slidesToShow:1,//화면에서 보여질 이미지 개수
            slidesToScroll:1, //스크를시 이동할 이미지 개수
            arrows:false,//기본값, 사용함
            dots:true, //pager 사용 여부, 기본값:false
            speed:800,//다음페이지로 넘어가는 시간
            autoplay:true, //자동재생 여부, 포트폴리오에서는 항상 켜놓기
            autoplaySpeed:1200, //자동재생시 이미지가 유지되는 시간
            pauseOnhHover:true,//기본값, 마우스 hover시 자동재생 멈춤 여부
            infinite:true,//무한반복 여부, 마지막 요소>>첫번째 요소
            vertical:false//세로 슬라이드   
        });
        $('.dList').slick({
            slidesToShow:4,
            slidesToScroll:3,
            arrows:true,
            dots:false,
            speed:800,
            autoplay:true,
            autoplaySpeed:1200,
            pauseOnhHover:true,
            infinite:false,
            vertical:false,
            responsive:[
                {
                    breakpoint : 1200,
                    settings : {
                    slidesToShow:3,
                    slidesToScroll:2
                    }
                },
                {
                    breakpoint : 480,
                    settings : {
                    slidesToShow:2,
                    slidesToScroll:1
                    }
                }
            ]
        });
        $('.vrR').slick({
            slidesToShow:1,
            slidesToScroll:1,
            arrows:true,
            dots:false,
            speed:800,
            autoplay:false,
            autoplaySpeed:1200,
            pauseOnhHover:true,
            infinite:true,
            vertical:false 
        });

    let winWidth = $(window).width();
    if(winWidth >= 360 && winWidth < 768){
        $('.curL').slick({
            slidesToShow:1,
            slidesToScroll:1,
            arrows:false,
            dots:true,
            speed:800,
            autoplay:false,
            autoplaySpeed:1200,
            pauseOnhHover:true,
            infinite:true,
            vertical:false 
        });
        
        $('.celebR').slick({
            slidesToShow:2,
            slidesToScroll:2,
            arrows:true,
            dots:false,
            speed:800,
            autoplay:false,
            autoplaySpeed:1200,
            pauseOnhHover:true,
            infinite:true,
            vertical:false 
        });
    }else if(winWidth >= 360 && winWidth < 640){
        $('.rWrap').slick({
            slidesToShow:2,
            slidesToScroll:1,
            arrows:false,
            dots:true,
            speed:800,
            autoplay:true,
            autoplaySpeed:1200,
            pauseOnhHover:true,
            infinite:true,
            vertical:false 
        });
    }else if(winWidth >= 768){
        $('.cimgPC').slick({
            slidesToShow:1,
            slidesToScroll:1,
            arrows:true,
            dots:false,
            speed:800,
            autoplay:false,
            autoplaySpeed:1200,
            pauseOnhHover:true,
            infinite:true,
            vertical:false 
        });
    }
    
    else if(winWidth < 1200){
        /////[1]header
        //1. 버튼 클릭 시 메뉴영역 나타내기
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

        //2. 메인메뉴 클릭 시, 서브메뉴1 나타내기
        $('.depth1 h3').on('click', function(){
            $(this).siblings().stop().slideToggle();
            $(this).parent().siblings().find('.depth2').stop().slideUp(400);
        });
        //2-1. 서브메뉴1 클릭 시, 서브메뉴2 나타내기
        let onOff = true;
        $('.depth2>li p').on('click', function(){
            $(this).siblings().stop().slideToggle();
            $(this).parent().siblings().find('.depth3').stop().slideUp(400);
        //아이콘 회전/////////////////////////////////////////////////////////
            $(this).toggleClass('on').parent().siblings().find('.p').removeClass('on');
        
            /* onOff = !onOff;
            if(onOff == false){
                $(this).toggleClass('on').parent().siblings().find('.p').removeClass('on');
            } else {
                $(this).children('.isub').css({
                    $(this).removeClass('on')
                });
            }; */
        });
    }else{
         ////////// web ver.
         /////[1]header
         //1. 메인메뉴 hover 시, 서브메뉴1 나타내기
        $('.depth1 h3').on('mouseenter', function(){
            $(this).siblings().stop().show();
            $(this).parent().siblings().find('.depth2').stop();
            $('.subBg').stop().show();
        });
        $('.depth1').on('mouseleave', function(){
            $(this).find('.depth2').stop().hide();
            $('.subBg').stop().hide();
        });
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
            $(this).find('.isub').css({
                transform : `rotate(90deg)`,
                paddingRight : `2px`
            });
        });


        //2. 아이콘 클릭 시, 써치박스 나타내기
        $('.isc').on('click', function(){
            $('.scBox').stop().toggle();
        });
    };

        
        
    $(window).on('resize', function(){
        document.location.reload();
    });


     













}); //opening