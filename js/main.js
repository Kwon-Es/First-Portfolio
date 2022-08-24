$(function(){ //opening
    
    
    //1.Modal
    //5.확인 버튼 클릭 시, modal 창 스르륵 사라지기
    //eXmodal 체크 후, 버튼 클릭 시, modal 창 뜨지 않게 하기
    //★★★★★모달창 잔상(쿠키 점멸 오류)
    if($.cookie('modal') == 'none'){
        $('.modal').hide();
        mainV();
    };

    function closeModal(){
        if($('#eXmodal').is(':checked')){
            $.cookie('modal','none',{expires:10000, path:'/'});
        };
        $('.modal').delay(400).fadeOut(300);

        return
    };

    function mainV(){
        $('.double').stop().animate({
            bottom:0
        }, 700)
        $('.mvTxt h2').fadeIn(1000);
        $('.mvTxt .bar').stop().animate({
            height:10
        },500);
        $('.mainWords').stop().animate({
            marginRight:0
        }, 700)
    };

    $('.closeMD').on('click', function(){
        $('.check').addClass('on');
        closeModal();
        /* $('.modal').delay(400).fadeOut(300); */
        setInterval(mainV, 700);
    });


    //2.Header
    //2-1.openM 버튼 클릭 시
    //#header bg-color 변경, border-btm, gnb, black 나타나기
    //openM 숨기고 closeM 나타나기, gnb right 변경
    //closeM 클릭 시 removeClass, gnb right 변경
    $('.openM').on('click', function(){
        $(this).addClass('on');
        $('#header, .gnb, .black, .closeM').addClass('on');
        $('.gnb').stop().animate({
            right:102
        });
    });
    $('.closeM').on('click', function(){
        $(this).removeClass('on')
        $('#header, .gnb, .black, .openM').removeClass('on');
        $('.gnb').stop().animate({
            right:0
        });
    });

    //2-2. 스크롤 발생 시 동작
    //메뉴영역 나타나고 사라지기
    $(window).on('scroll', function(){
        let scr = $(this).scrollTop();

        if(scr > 0){
            $('#header, .gnb, .black, .openM').addClass('on');
            $('.closeM').removeClass('on');
            $('.gnb').stop().animate({
                right:0
            });
        }else{
            $('#header, .gnb, .black, .openM, closeM').removeClass('on');
        };
    });
    
    //2-3.gnb li 클릭시 scroll위치 변경, color 변경
    let n1 = $('.gnb li:nth-child(1)')
    let n2 = $('.gnb li:nth-child(2)')
    let n3 = $('.gnb li:nth-child(3)')
    let n4 = $('.gnb li:nth-child(4)')
    let n5 = $('.gnb li:nth-child(5)')
    let winHeight = $(window).height();

    $(n1).on('click', function(){
        $(this).addClass('on').siblings().removeClass();
        $('html,body').animate({
            scrollTop:`${winHeight}`
        });
    });
    $(n2).on('click', function(){
        $(this).addClass('on').siblings().removeClass();
        $('html,body').animate({
            scrollTop:`${winHeight*2}`
        })
    });
    $(n3).on('click', function(){
        $(this).addClass('on').siblings().removeClass();
        $('html,body').animate({
            scrollTop:`${winHeight*4}`
        })
    });
    $(n4).on('click', function(){
        $(this).addClass('on').siblings().removeClass();
        $('html,body').animate({
            scrollTop:`${winHeight*6}`
        })
    });
    $(n5).on('click', function(){
        $(this).addClass('on').siblings().removeClass();
        $('html,body').animate({
            scrollTop:$(document).height()
        });
    })

    //2-4.스크롤 최상단일 때, 메인메뉴 color 변경
    $(window).on('scroll', function(){
        let scr = $('html, body').scrollTop();
        
        if(scr == 0){
            $('.gnb li').removeClass('on');
        };
    });

    //2-5.로고 클릭 시, 새로고침 되기
    $('.logo').on('click', function(e){
        e.preventDefault();
        location.reload();
    });


    //4.About
    //4-1.스크롤 되면 clickS, 스르륵 나타나기
    $(window).on('scroll',function(){
        let winHeight = $(this).height();
        let scr = $('html, body').scrollTop();

        if(scr == winHeight*1){
            $('.clickS').addClass('on')
        } else{
            $('.clickS').removeClass('on')
        };
    });

    //4-2.l5 icon li 클릭 시
    //클릭한 li opacity, 순서에 맞는 sTxt 텍스트 나타나기, clickS 숨기기
    //다시 클릭 시, opacity, sTxt 텍스트 숨기기
    let s1 = $('.s1 .icon li')
    let s2 = $('.s2 .icon li')
    let st1 = $('.st1 li')
    let st2 = $('.st2 li')

    $(s1).on('click', function(){
        let gi = $(this).index();

            $(this).toggleClass('on').siblings().removeClass('on');
            $(s2).removeClass('on');
            $(st1).eq(gi).toggle().siblings().hide();
            $(st2).hide();
            $('.clickS').removeClass('on')
    });

    $(s2).on('click', function(){
        let ei = $(this).index();

            $(this).toggleClass('on').siblings().removeClass('on');
            $(s1).removeClass('on');
            $(st2).eq(ei).toggle().siblings().hide();
            $(st1).hide();
            $('.clickS').removeClass('on')
    });


    //5.Container
    //5-1.특정 위치에 스크롤 됐을 때, text영역 나타나기
    //해당 위치를 벗어났을 때, text 영역 사라지기
    $(window).on('scroll', function(){
        let scr = $(this).scrollTop();
        let winHeight = $(this).height();
        i = 2;

        if(scr == winHeight*i){
            $('.resp1 .right').addClass('on');
        } else{
            $('.resp1 .right').removeClass('on');
        };

        if(scr == winHeight*(i+1)){
            $('.resp2 .left').addClass('on');
        } else{
            $('.resp2 .left').removeClass('on');
        };
        
        if(scr == winHeight*(i+2)){
            $('.stan1 .right').addClass('on');
        } else{
            $('.stan1 .right').removeClass('on');
        };

        if(scr == winHeight*(i+3)){
            $('.stan2 .left').addClass('on');
        } else{
            $('.stan2 .left').removeClass('on');
        };

        if(scr >= winHeight*(i+4)){
            $('.mob .right').addClass('on');
        } else{
            $('.mob .right').removeClass('on');
        };
    });


    //5-2.스크롤 되면 hoverS, 스르륵 나타나기
    $(window).on('scroll',function(){
        let winHeight = $(this).height();
        let scr = $('html, body').scrollTop();

        if(scr == winHeight*2){
            $('.hoverS').addClass('on')
        } else{
            $('.hoverS').removeClass('on')
        };
    });

    //5-3.screen에 mouseover 되었을 때, hoverS 스르륵 사라지기
    $('.screen').on('mouseenter', function(){
        $('.hoverS').removeClass('on')
    })


    //6.Window
    //6-1.마우스 휠 스크롤 시, 100vh 씩 이동
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
       
    //6-2.새로고침 시, 최상단으로 이동
    function top(){
        $('html, body').animate({
               scrollTop:0
           }, 500);
       };
       top();


    //7.Footer
    //slBox 구현
    //셀박 클릭 시, 스타일 변경, option 나타내기, 아이콘 변경
    $('.slBox').on('click', function(){
        $('.slBox').toggleClass('on');
        $('.sList').stop().toggleClass('on');
        $('.sIco').stop().toggleClass('on');
    });

    //선택한 li의 텍스트를 박스 안에 나타내기
    $('.sList li').on('click', function(){
        let sTxt = $(this).text();

        $('.selected').text(sTxt);
    });


    //8.Go
    //8-1.일정값 이상 스크롤했을 때 go버튼 스르륵 나타나기
    $(window).on('scroll',function(){
        let scr = $('html, body').scrollTop();

        if( scr > 500 ){
            $('.go').addClass('on')
        } else{
            $('.go').removeClass('on')
        };
    });

    //8-2.goTop 버튼 클릭 시, 최상단으로 이동
    $('.goTop').on('click', function(){
        window.scrollTo({top:0, behavior:"smooth"});
    });

    //8-3.goBtm 버튼 클릭 시, 최하단으로 이동
    $('.goBtm').on('click', function(){
        window.scrollTo({top:10000, behavior:"smooth"});
    });


}); //end