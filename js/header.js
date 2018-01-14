/**
 * Created by 000 on 2017/9/4.
 */
(function(){
    var lis=$(".header ul li");
    $(".header").hover(function(){
        $(this).addClass("col1")
    },function(){
        $(this).removeClass("col1")
    });
    lis.hover(function(){
        $(this).addClass("on")
    },function(){
        $(this).removeClass("on")
    });
    lis.click(function(){
        $(this).addClass("cli").siblings().removeClass("cli");
    });

    //哈希传参
    var k= window.location.hash.substring(1);/*k定义为哈希参数 并截取后面的那个数字1*/
    if(k){
        $(".header ul li").eq(k).addClass("cli").siblings().removeClass("cli");
        $(".header").addClass("col");
    }else{
        $(window).scroll(function(){
            var top=$(this).scrollTop();
            if(top>300){
                $(".header").addClass("col");

            }else{
                $(".header").removeClass("col");

            }
        });
    }
})();