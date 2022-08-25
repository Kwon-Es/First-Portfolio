$(function(){ //opening


    //1.Header
    //1-1.header 영역에 마우스 올리면 header bg-color change
    //css hover로 변경함

    //1-2.mainmenu 영역에 마우스 올리면 submenu slide
    //siblings, slideup할 필요없음
    $('.depth1').on('mouseenter', function(){
        $(this).find('.depth2').stop().slideDown(200)
    }).on('mouseleave', function(){
        $(this).find('.depth2').stop().slideUp(100)
    });

    //1-3.스크롤 발생 시, header bg-color change
    $(window).on('scroll', function(){
        let scr = $(this).scrollTop();
        /* console.log(scr); */
        if(scr > 0){
            $('#header').addClass('on')
        }else{
            $('#header').removeClass('on')
        };
    });

    
    //2.Mainvisual
    //2-1.자동 슬라이드, 페이저 설정
    $('.simg').slick({
        slidesToShow:1,//화면에서 보여질 이미지 개수
        slidesToScroll:1, //스크를시 이동할 이미지 개수
        arrows:false,//기본값, 사용함
        dots:true, //pager 사용 여부, 기본값:false
        speed:600,//다음페이지로 넘어가는 시간
        autoplay:true, //자동재생 여부, 포트폴리오에서는 항상 켜놓기
        autoplaySpeed:1100, //자동재생시 이미지가 유지되는 시간
        pauseOnHover:false,//기본값, 마우스 hover시 자동재생 멈춤 여부
        pauseOnFocus: false,
        infinite:true,//무한반복 여부, 마지막 요소>>첫번째 요소
        vertical:false,//세로 슬라이드
    });
    
    //2-2.scrDown 스크롤 아이콘 애니메이트
    function down(){
        $('.wheel').animate({
            top:'9px'
        }).animate({
            top:`15px`
        });
    };
    setInterval(function(){down()}, 1000);
    /* down(); */
    //animate delay 방지 : 함수 먼저 저장,
    //setInterval에서 불러온 다음 한 번 더 함수 호출
    

    //3. Product
    //이미지 자동슬라이드, 버튼 설정
    $('.slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        dots:false,
        speed:600,
        autoplay:true,
        autoplaySpeed:1100,
        pauseOnHover:false,
        pauseOnFocus: false,
        infinite:true,
        vertical:false,
    });


    //4. Brand
    //탭메뉴 클릭 이벤트, 버튼-이미지 연결
    $('.titin li').on('click', function(){
        let bi = $(this).index();
        
        //titin li 클릭 시, bpager width 변경
        if(bi != 3){
            $('.bpager').css({
                width: `calc((100% - 1200px)/2 + (300px*${bi + 1}))`
            });
        } else{
            $('.bpager').css({
                width: `100%`
            });
        }

        //클릭한 li 순서에 맞는 .cont div 보여주기
        $('.cont>div').eq(bi).show().siblings().hide();
    });


    //5. Window
    //5-1.스크롤 시, 100vh 씩 이동
    $('section').on('mousewheel', function(e, d){
        e.preventDefault();
         if(d > 0){
             let prv = $(this).prev().offset().top;
             $('html, body').stop().animate({
                 scrollTop:prv
             });
         } else if(d < 0){
             let nxt = $(this).next().offset().top;
             $('html, body').stop().animate({
                 scrollTop:nxt
             })
         }
    });

    //5-2.새로고침 시, 스크롤 최상단으로 이동
    function top(){
     $('html, body').animate({
            scrollTop:0
        }, 500);
    };
    top();


    //6.Footer
    //slBox 구현
    //셀박 클릭 시, option 나타내기, 아이콘 변경
    $('.slBox').on('click', function(){
        $('.sList').stop().toggleClass('on');
        $('.sIco').stop().toggleClass('on');
    });

    //선택한 li의 텍스트를 박스 안에 나타내기
    $('.sList li').on('click', function(e){
        e.preventDefault();

        let sTxt = $(this).text();
        $('.selected').text(sTxt);
    });
    

    //7. Floating
    //7-1.플로팅바 버튼 클릭 시, 100vh 만큼 상하 이동
    //버튼 클릭 횟수에 따라 순서에 맞는 section 보여주기
    $('.up').on('click', function(){
        let winHeight = $(window).height();
        let s = $('html, body').scrollTop();
        let i = s - winHeight;
        /* console.log(i);
        console.log(s);
        console.log(winHeight); */

        $('html, body').animate({
            scrollTop:`${i}`
        })
    });

    $('.down').on('click', function(){
        let winHeight = $(window).height();
        let s = $('html, body').scrollTop();
        let i = s + winHeight ;

        $('html, body').animate({
            scrollTop:`${i}`
        })
    });
    
    //7-2.일정값 이상 스크롤했을 때 플로팅바 나타나기
    $(window).on('scroll',function(){
        let scr = $('html, body').scrollTop();
        if( scr > 900 ){
            $('.float').addClass('on')
        } else{
            $('.float').removeClass('on')
        };
    });

    //7-3.goTop 버튼 설정
    $('.goTop').on('click', function(){
        window.scrollTo({top:0, behavior:"smooth"});
    });
    


}); //end