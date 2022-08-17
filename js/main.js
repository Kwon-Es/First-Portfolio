$(function(){ //opening

    //1.Header
    //1-1.openM 버튼 클릭 시
    //#header bg-color 변경, border-btm, gnb, black 나타나기
    //openM 숨기고 closeM 나타나기
    //closeM 클릭 시 removeClass
    $('.openM').on('click', function(){
        $(this).addClass('on');
        $('#header, .gnb, .black, .closeM').addClass('on');
    });
    $('.closeM').on('click', function(){
        $(this).removeClass('on')
        $('#header, .gnb, .black, .openM').removeClass('on');
    });

    //1-2. 스크롤 발생 시 동작
    //★★★버튼을 먼저 클릭하고 스크롤 발생시 openM 버튼 남는 현상
    $(window).on('scroll', function(){
        let scr = $(this).scrollTop();
        if(scr > 0){
            $('#header, .gnb, .black, .openM, .closeM').addClass('on');
        }else{
            $('#header, .gnb, .black, .openM, .closeM').removeClass('on');
        };
    });
    
    //1-3.gnb li 클릭시 scroll위치 변경, color 변경
    //★★변수+변수 호출
    let n1 = $('.gnb li:nth-child(1)')
    let n2 = $('.gnb li:nth-child(2)')
    let n3 = $('.gnb li:nth-child(3)')
    let n4 = $('.gnb li:nth-child(4)')
    let n5 = $('.gnb li:nth-child(5)')

    let t1 = $('#about').offset().top;
    let t2 = $('.cont1').offset().top;
    let t3 = $('.cont2').offset().top;
    let t4 = $('.cont3').offset().top;

    $(n1).on('click', function(){
        $(this).addClass('on').siblings().removeClass();
        $('html,body').animate({
            scrollTop:`${t1 - 50}`
        });
    });
    $(n2).on('click', function(){
        $(this).addClass('on').siblings().removeClass();
        $('html,body').animate({
            scrollTop:`${t2 - 50}`
        })
    });
    $(n3).on('click', function(){
        $(this).addClass('on').siblings().removeClass();
        $('html,body').animate({
            scrollTop:`${t3 - 50}`
        })
    });
    $(n4).on('click', function(){
        $(this).addClass('on').siblings().removeClass();
        $('html,body').animate({
            scrollTop:`${t4 - 50}`
        })
    });
    $(n5).on('click', function(){
        $(this).addClass('on').siblings().removeClass();
        $('html,body').animate({
            scrollTop:$(document).height()
        });
    })

/*     $('.gnb li').on('click', function(){
        let n = $(this).index();

        $('html,body').animate({
            scrollTop: window['t'+(n+1)]
        });
    })
 */

    //1-4.스크롤 최상단일 때, 메인메뉴 color 변경
    $(window).on('scroll', function(){
        let scr = $('html, body').scrollTop();
        
        if(scr == 0){
            $('.gnb li').removeClass('on');
        };
    });

    
    //1-5.로고 클릭 시, 새로고침 되기
    $('.logo').on('click', function(e){
        e.preventDefault();
        location.reload();
    });

    
    //2.Mainvisual
    //load 했을 때, .double, mvTxt 스르륵 나타나기
    $(window).on('load', function(){
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
    });
    

    //3.About
    //3-1.스크롤 되면 clickS,  스르륵 나타나기
    $(window).on('scroll',function(){
        let scr = $('html, body').scrollTop();

        if( scr > 700 && scr < 1500 ){
            $('.clickS').addClass('on')
        } else{
            $('.clickS').removeClass('on')
        };
    });

    //3-2.l5 icon li 클릭 시
    //클릭한 li opacity, 클릭한 li 순서에 맞는 sTxt 텍스트 나타나기
    //다시 클릭 시, opacity, sTxt 텍스트 숨기기
    //★★★두 번 클릭해야 다음 동작 실행됨
    let s1 = $('.s1 .icon li')
    let s2 = $('.s2 .icon li')
    let st1 = $('.st1 li')
    let st2 = $('.st2 li')
    let onOff = true;

    $(s1).on('click', function(){
        let gi = $(this).index();
        onOff = !onOff;

        if(onOff == false){
            $(this).addClass('on').siblings().removeClass('on');
            $(s2).removeClass('on');
            $(st1).eq(gi).show().siblings().hide();
            $(st2).hide();
        } else {
            $(this).removeClass('on');
            $(st1).eq(gi).hide();
        }
    });

    $(s2).on('click', function(){
        let ei = $(this).index();
        onOff = !onOff;

        if(onOff == false){
            $(this).addClass('on').siblings().removeClass('on');
            $(s1).removeClass('on');
            $(st2).eq(ei).show().siblings().hide();
            $(st1).hide();
        } else {
            $(this).removeClass('on');
            $(st2).eq(ei).hide();
        }
    });



    //4.Container
    //4-1.특정 위치에 스크롤 됐을 때, text영역 나타나기
    //★해당 위치를 벗어났을 때, text 영역 사라지기
    $(window).on('scroll', function(){
        let scr = $(this).scrollTop();
        console.log(scr)

        if(scr >= 1200 && scr < 2000){
            $('.resp1 .right').stop().animate({
                marginRight: 0
            }, 300)
        } else if(scr >= 2000 && scr < 2800){
            $('.resp2 .left').stop().animate({
                marginLeft: 0
            }, 300)
        } else if(scr >= 2800 && scr < 3600){
            $('.stan1 .right').stop().animate({
                marginRight: 0
            }, 300)
        } else if(scr >= 3600 && scr < 4400){
            $('.stan2 .left').stop().animate({
                marginLeft: 0
            }, 300)
        } else if(scr >= 4400 && scr < 5390){
            $('.mob .right').stop().animate({
                marginRight: 0
            }, 300)
        } else{ $('.right').stop().animate({
            marginRight: -282
        }, 'fast').parents('#container').find('.left').stop().animate({
            marginLeft: -282
        });
        };

    });


    //5.Window
    //5-1.스크롤 시, 100vh 씩 이동
  /*    $('section').on('mousewheel', function(e, d){
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
    }); */
       
    //새로고침 시, 최상단으로 이동
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
    $('.sList li').on('click', function(){
        let sTxt = $(this).text();
        $('.selected').text(sTxt);
    });


    //7.Go
    //7-1.일정값 이상 스크롤했을 때 go버튼 나타나기
    $(window).on('scroll',function(){
        let scr = $('html, body').scrollTop();

        if( scr > 500 ){
            $('.go').addClass('on')
        } else{
            $('.go').removeClass('on')
        };
    });

    //7-2.goTop 버튼 설정
    $('.goTop').on('click', function(){
        window.scrollTo({top:0, behavior:"smooth"});
    });
    //7-2.goBtm 버튼 설정
    $('.goBtm').on('click', function(){
        window.scrollTo({top:10000, behavior:"smooth"});
    });


}); //end