/**
 * Created by 000 on 2017/9/11.
 */
(function(){
    var timer=setInterval(animation,1000);
    var top=0;
    function animation(){
        $(".animated-circles").toggleClass("animated");
    }
    $(".scroll .scroll-top").hover(function(){
        if(top<500){
            $(".scroll-box").show().css({top: "-440px"});
        }else{
            $(".scroll-box").show().css({top: "-130px"});
        }

    },function(){
        $(".scroll-box").hide();
    });

    $(window).scroll(function(){
        top=$(window).scrollTop();
        //$(".animated-circles").removeClass("animated");

        if(top>500){
            //alert(1);
            setInterval(animation,1000);
            $(".scroll_wrap").css({bottom:"50%"});
        }else{
            $(".scroll_wrap").css({bottom:"-30px"});
        }
        $(".go-top").hover(function(){
            $(".go-top-title").show();
        },function(){
            $(".go-top-title").hide();
        });

    })

})();