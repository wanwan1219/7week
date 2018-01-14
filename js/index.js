/**
 * Created by 000 on 2017/9/5.
 */
//banner和头部加载部分
(function(){
    var lis=$(".banner ul li"),
        ul=$(".banner ul"),
        olLis=$('.banner ol li'),
        wid=$(window).width(),
        len=lis.length,
        lt=$(".banner .click .left .lt"),
        rt=$(".banner .click .right .rt"),
        timer=setInterval(right,5000),
        index= 0,
        k=0;
    $("#header").load("header.html");
    lis.css({width:wid});
    olLis.eq(0).find("p").addClass("cli");
    function right(){
        index++;
        if(index>len-1){
            index=1;
            ul.css({left:0},0)
        }
        ul.stop().animate({left:-wid*index},1500);
        k++;
        if(k>len-2){
            k=0
        }
        olLis.eq(k).find("p").addClass("cli").closest("li").siblings().find("p").removeClass("cli");
    }
    lt.click(function(){
        index--;
        if(index<0){
            index=len-2;
            ul.css({left:-(index+1)*wid},0)
        }
        ul.stop().animate({left:-index*wid},1500);
        k--;
        if(k<0){
            k=len-2;
        }
        olLis.eq(k).find("p").addClass("cli").closest("li").siblings().find("p").removeClass("cli");
    });
    rt.click(function(){
        right();
    });
    $(".banner").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(right,5000)
    });
})();
//优势和展开部分
(function(){
    $(".advantage .more>div").click(function(){
        $(".advantage .more").toggleClass("close");
        $(".advantage-box").slideToggle();
    });
    $(window).scroll(function(){
        var top=$(".advantage").offset().top-$(document).scrollTop();
        //console.log(top);
        if(top<300){
            ani(".advantage");
            $(".advantage .pic_wrap .title").addClass("animated fadeInLeft")
        }
        var top1=$(".selection1").offset().top-$(document).scrollTop();
        //console.log(top1);
        if(top1<300){
            ani(".selection1");
        }
        //var top2=$(".selection2").offset().top-$(document).scrollTop();
        //console.log(top2);
        //if(top2<300){
        //    ani(".selection2");
        //}
        //var top3=$(".selection3").offset().top-$(document).scrollTop();
        //if(top3<300){
        //    ani(".selection3");
        //}
        //var top4=$(".selection4").offset().top-$(document).scrollTop();
        //if(top4<300){
        //    ani(".selection4");
        //}
        var top5=$(".template").offset().top-$(document).scrollTop();
        if(top5<300){
            ani(".template");
        }
        var top6=$(".select").offset().top-$(document).scrollTop();
        if(top6<300){
            ani(".select");
        }
        var top7=$(".join").offset().top-$(document).scrollTop();
        if(top7<300){
            ani(".join");
        }




        function ani(i){
            $(i).find("span").addClass("animated fadeInLeft");
            $(i).find("h1").addClass("animated fadeInLeft");
            $(i).find("p").addClass("animated fadeInLeft");
        }
    })


})();
//banner2部分
(function(){
    var ulLis=$(".banner2 ul li"),
        arr=['p1','p2','p3','p4','p5'],
        len=ulLis.length;
    ulLis.click(function(){
        var k=3,
            j=3;
        var index=$(this).index();
        arr[index]="p3";

        for(var i=index-1;i>-1;i--){
            k--;
            if (k<1){
                k=len;
            }
            arr[i]="p"+k;
        }
        for(var q=index+1;q<len;q++){
            j++;
            if(j>len){
                j=1;
            }
            arr[q]="p"+j;
        }
        ulLis.each(function(i){
            ulLis.eq(i).attr("class",arr[i])
        });
    });
//向右自动轮播
    var right=function(){
        arr.unshift(arr.pop());
        //pop()删除并返回最后一个元素
        //unshift()添加到元素的最前面
        ulLis.each(function(i){
            ulLis.eq(i).attr("class",arr[i])
        });
    };
    var timer=setInterval(right,2000);
    $(".banner2").hover(function(){
        clearInterval(timer);
    },function (){
        timer=setInterval(right,2000);
    })

})();
//底部加载
(function(){
    $("#footer").load("footer.html");
    $("#scroll").load("scroll.html")
})();