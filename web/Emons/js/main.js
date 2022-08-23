$(function(){
    //2mainvisual
    //2-1.슬라이드
    //메인비주얼 이미지 자동 슬라이드
    $('.simg').slick({
        slidesToShow:1,//화면에서 보여질 이미지 개수
        slidesToScroll:1, //스크를시 이동할 이미지 개수
        arrows:false,//기본값, 사용함
        dots:true, //pager 사용 여부, 기본값:false
        speed:800,//다음페이지로 넘어가는 시간
        autoplay:true, //자동재생 여부, 포트폴리오에서는 항상 켜놓기
        autoplaySpeed:1200, //자동재생시 이미지가 유지되는 시간
        pauseOnhHover:false,//기본값, 마우스 hover시 자동재생 멈춤 여부
        pauseOnFocus: false,
        infinite:true,//무한반복 여부, 마지막 요소>>첫번째 요소
        vertical:false//세로 슬라이드   
    });

    //큐레이션 영역 자동 슬라이드
 /*    $('.cimgPC').slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        dots:false,
        speed:800,
        autoplay:false,
        autoplaySpeed:1200,
        pauseOnhHover:false,
        pauseOnFocus: false,
        infinite:true,
        vertical:false 
    }); */

    //프로모션 영역 드라마 자동 슬라이드
    $('.dList').slick({
        slidesToShow:4,
        slidesToScroll:2,
        arrows:true,
        dots:false,
        speed:800,
        autoplay:true,
        autoplaySpeed:1200,
        pauseOnhHover:false,
        pauseOnFocus: false,
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
    //CS 영역 VR 이미지 수동 슬라이드
    $('.vrR').slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        dots:false,
        speed:800,
        autoplay:false,
        autoplaySpeed:1200,
        pauseOnhHover:false,
        pauseOnFocus: false,
        infinite:true,
        vertical:false 
    });

 

        
    /*     
    $(window).on('resize', function(){
        document.location.reload();
    });
 */

     













}); //opening