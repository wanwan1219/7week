(function(){
    $("#header").load("header.html");
    $(".list ul li").click(function(){
        $(this).find("span").addClass("on").parent().siblings().find("span").removeClass("on");
    });
    $(".list ul .cli").click(function(){
        $(".list ul .lis1").toggleClass("lis");
        $(this).find("em").toggleClass("lis");
        $(this).find("i").toggleClass("up2");
    });
    $(".pic ul li>h1 i").hover(function(){
        $(this).parent().siblings(".box").css({opacity:1})
    },function(){
        $(this).parent().siblings(".box").css({opacity:0})
    });
    $("#footer").load("footer.html");
    $("#scroll").load("scroll.html");
})();