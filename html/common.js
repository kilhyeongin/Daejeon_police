$(function(){
    // 텝메뉴
    $('.bodo').click(function(){
        $('.gong, .gong_ul').removeClass('on')
        $('.bodo, .bodo_ul').addClass('on')
    })
    $('.gong').click(function(){
        $('.bodo, .bodo_ul').removeClass('on')
        $('.gong, .gong_ul').addClass('on')
    })
    $('.oh').click(function(){
        $('.ch, .ch_ul').removeClass('on')
        $('.oh, .oh_ul').addClass('on')
    })
    $('.ch').click(function(){
        $('.oh, .oh_ul').removeClass('on')
        $('.ch, .ch_ul').addClass('on')
    })


    // 햄버거 버튼
    $('.ham').click(function(){
        $(this).hide()
        $('.close').show()
        $('.gnb').fadeIn()
    })
    $('.close').click(function(){
        $(this).hide()
        $('.ham').show()
        $('.gnb').fadeOut()
    })

    // 퀵메뉴 따라오기
    $(document).ready(function(){
        var currentPosition = parseInt($(".quickmenu").css("top"));
        $(window).scroll(function() {
          var position = $(window).scrollTop(); 
          $(".quickmenu").stop().animate({"top":position+currentPosition+"px"},1000);
        });
      });

    //   슬라이드 배너
      $(function(){
        setInterval( function(){ nextAni()}, 3000)

        $('.next').click(function(){
            nextAni()
        })
        function nextAni(){
            $('.C_slide').not(':animated').animate({marginLeft:-100+'%'}, 1500, function(){
                $('.C_slide li').eq(0).appendTo('.C_slide')
            })
        }
    })

    $(function(){
        $('.youbut').click(function(){
            $(this).css("transform","ScaleX","-1")
        })
    })
    $('.youbut').on('click', function(){
        $(this).removeClass('on')
        $('.gt').addClass('on')
        $('.youtube').width('40%')
        $('.radio').width('50%')
    })
    $('.gt').on('click', function(){
        $(this).removeClass('on')
        $('.lt').addClass('on')
        $('.youtube').width('75%')
        $('.radio').width('20%')
    })
})