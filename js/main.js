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
    //버튼을 먼저 클릭하고 스크롤 발생시 openM 버튼 남는 현상
    $(window).on('scroll', function(){
        let scr = $(this).scrollTop();
        if(scr > 0){
            $('#header, .gnb, .black, .openM, .closeM').addClass('on');
        }else{
            $('#header, .gnb, .black, .openM, .closeM').removeClass('on');
        };
    });

    //1-3.gnb 클릭시 scroll위치 변경
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
        $('html,body').animate({
            scrollTop:`${t1 - 50}`
        })
    });
    $(n2).on('click', function(){
        $('html,body').animate({
            scrollTop:`${t2 - 50}`
        })
    });
    $(n3).on('click', function(){
        $('html,body').animate({
            scrollTop:`${t3 - 50}`
        })
    });
    $(n4).on('click', function(){
        $('html,body').animate({
            scrollTop:`${t4 - 50}`
        })
    });
    $(n5).on('click', function(){
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
    
   

    //2.Mainvisual
    //load 했을 때, .double, mvTxt 가로방향으로 스르륵 나타나기
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
    //l5 icon 클릭 시
    //클릭한 icon 순서에 맞는 sTxt 텍스트가 나타나기
    $('.s1 .icon li').on('click', function(){
        let gi = $(this).index();
        $('.st1 li').eq(gi).show().siblings().hide().parent().siblings().find('li').hide();
    });
    $('.s2 .icon li').on('click', function(){
        let ei = $(this).index();
        $('.st2 li').eq(ei).show().siblings().hide().parent().siblings().find('li').hide();
    });


    //4.Container
    //특정 위치에 스크롤 됐을 때, text영역 나타나기
    

    $(window).on('scroll', function(){
        let scr = $(this).scrollTop();
        console.log(scr)

        if(scr >= 1200 && scr < 2000){
            $('.resp1 .right').stop().animate({
                marginRight: 0
            }, 400)
        } else if(scr >= 2000 && scr < 2800){
            $('.resp2 .left').stop().animate({
                marginLeft: 0
            }, 400)
        } else if(scr >= 2800 && scr < 3600){
            $('.stan1 .right').stop().animate({
                marginRight: 0
            }, 400)
        } else if(scr >= 3600 && scr < 4400){
            $('.stan2 .left').stop().animate({
                marginLeft: 0
            }, 400)
        } else if(scr >= 4400){
            $('.mob .right').stop().animate({
                marginRight: 0
            }, 400)
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