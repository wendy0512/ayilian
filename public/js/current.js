$(function(){
    var i=1;
    // 轮播导航
    function shake(){
        if(i==5)i=1
        else i++;
        var j=0;
        var arr=[0,1,2,3,4,5,6,7];
        setInterval(()=>{
            $(`#box>div:eq(${arr[j++]})`).css("backgroundImage",`url(img/current/banner/banner${i}.jpg)`).addClass("shake");
        },50);
        setTimeout(()=>{
            $("#box>div").removeClass("shake");
            $("#box>img").attr("src",`img/current/banner/banner${i}.jpg`);
        },1000);
    }
    /***鼠标进入事件 */
    setInterval(shake,3000);
    $(".desc").on("mouseenter",function(){
        $(this).children(":last").children("a").show(1000).parent().prev().children("img").css("transform","scale(1.1)");
    }).on("mouseleave",function(){
        $(this).children(":last").children("a").hide(1000).parent().prev().children("img").css("transform","scale(1)");
    })
})