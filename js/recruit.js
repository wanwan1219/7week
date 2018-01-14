/**
 * Created by 000 on 2017/9/8.
 */
(function(){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $("#scroll").load("scroll.html");
    $(".banner img").hover(function(){
        $(this).addClass("animated tada");
    },function(){
        $(this).removeClass("animated tada");
    });
    $(".join_wrap .box .img1").hover(function(){
        $(this).addClass("animated tada");
    },function(){
        $(this).removeClass("animated tada");
    });
    $(".agent .list-con").hover(function(){
        $(this).addClass("animated pulse");
    },function(){
        $(this).removeClass("animated pulse");
    });
    $(".sale_wrap .lt .lt-con img").hover(function(){
        $(this).addClass("animated tada");
    },function(){
        $(this).removeClass("animated tada");
    });
    $(".strength .con .con-img").hover(function(){
        $(this).addClass("animated tada");
    },function(){
        $(this).removeClass("animated tada");
    });

    $(window).scroll(function(){
        var top=$(".sale_wrap").offset().top-$(document).scrollTop();
        console.log(top);
        if(top<300){
            $(".sale_wrap h1").css({display:"block"}).addClass("animated fadeInRight");
            $(".sale_wrap .sale .lt .lt-con>div").css({display:"block"}).addClass("animated fadeInLeft");
        }
    })

})();
(function(){
    $(window).scroll(function(){
        var top=$(".strength_wrap").offset().top-$(document).scrollTop();
        console.log(top);
        if(top<300){
            $(".strength_wrap .con").css({display:"block"}).addClass("animated fadeInRight");
            $(".strength_wrap .bg").css({display:"block"}).addClass("animated fadeInLeft");
        }
    })
})();
(function(){
    $(window).scroll(function(){
        var top=$(".apply_wrap").offset().top-$(document).scrollTop();
        console.log(top);
        if(top<300){
            $(".apply_wrap .apply .con").css({display:"block"}).addClass("animated fadeInDown");
        }
    })
})();