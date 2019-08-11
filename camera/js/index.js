/**
 * Created by shangcc on 2019/8/5.
 */
$(function(){
    $(".nav-text .home_btn .app-btn").hover(
        function(){
            $(this).css({border:"2px solid #fff",
               backgroundColor:"transparent",color:" #fff" ,width:""})
        },
        function(){
            $(this).css({border:"",
                backgroundColor:"",color:" " })
            $(".home_btn_color_one").css({color:"#333"})
        }
    )
    $(window).scroll(function(){
        var i=$(this).scrollTop();
        if(i>=720){
            $("#title").css({position:"fixed",top:"0",width:"100%",backgroundColor:"rgba(255,255,255,0.8)"})
            //$("#topcontrol").css({display:"block"})
        }
        else{
            $("#title").css({position:"",top:"",backgroundColor:""})
            //$("#topcontrol").css({display:"none"})
        }
    })
    $(window).scroll(function(){
        var i=$(this).scrollTop();
        if(i>=300){
            $("#topcontrol").fadeIn(500)
        }
        else{
            $("#topcontrol").fadeOut(500)
        }
    })
    $("#list1-index div").hover(
        function(){
            $(this).css({boxShadow:" 0 0 40px rgba(136,136,136,0.7)",border:"none",zIndex:"50"})
            $(this).find("i").css({transform:"scale(1.1)"})
        },
        function(){
            $(this).css({boxShadow:"",border:"",zIndex:""})
            $(this).find("i").css({transform:"scale(1)"})
        }
    )
    $("#list2-index>div").hover(function(){
        $(this).find(".list2-all").stop(true,true).fadeToggle(500)
    });
    $(".list2-all a").hover(function(){
        $(this).css({color:"#2b81b9"})
    },
        function(){
            $(this).css({color:"#fff"})
        });
    $("#service-left>div").hover(function(){
            $(this).css({backgroundColor:"#2b81b9"});
            $(this).find("i").css({color:"#2b81b9",backgroundColor:" #fff"})
            $(this).find("p").css({color:"#fff"})
            $(this).find("h4").css({color:"#fff"})
        },function(){
            $(this).css({backgroundColor:"#fff"});
            $(this).find("i").css({color:"",backgroundColor:""})
            $(this).find("p").css({color:""})
            $(this).find("h4").css({color:""})
        }
    )
    $("#service-right>div").hover(function(){
            $(this).css({backgroundColor:"#2b81b9"});
            $(this).find("i").css({color:"#2b81b9",backgroundColor:" #fff"})
            $(this).find("p").css({color:"#fff"})
            $(this).find("h4").css({color:"#fff"})
        },function(){
            $(this).css({backgroundColor:"#fff"});
            $(this).find("i").css({color:"",backgroundColor:""})
            $(this).find("p").css({color:""})
            $(this).find("h4").css({color:""})
        }
    )
    $("#team>div .list5-img .img ").hover(function(){
        $(this).find(".social_link").stop(true,true).fadeToggle(200)
    })
    $(function(){
        $(".carousel").carousel();// 自动轮播
    })
    $("#customer-img ol li:nth-of-type(2)").click(function(){
        $(this).css({width:"20px"})
            $("#customer-img ol li:nth-of-type(1)").css({width:"10px"})

    })
    $("#customer-img ol li:nth-of-type(1)").click(function(){
        $(this).css({width:"20px"})
        $("#customer-img ol li:nth-of-type(2)").css({width:"10px"})

    })
})
//滚动条嗷嗷嗷
$(function(){
    var h=$(window).height();
    $("#wrap").height(h);
    var h1=$("#header").innerHeight();
    var h2=$("#list1").innerHeight();
    var h3=$("#projects").innerHeight();
    var h4=$("#service").innerHeight();
    var h5=$("#team").innerHeight();
    var h6=$("#customer").innerHeight();
    var h7=$("#contact").innerHeight();
    $("#li1").click(function(){
        $("#wrap").animate({scrollTop:0+"px"},600)
    })
    $("#li2").click(function(){
        $("#wrap").animate({scrollTop:(h1+600)+"px"},600)
    })
    $("#li3").click(function(){
        $("#wrap").animate({scrollTop:(h1+h2)+"px"},600)
    })
    $("#li4").click(function(){
        $("#wrap").animate({scrollTop:(h1+h2+h3)+"px"},600)
    })
    $("#li5").click(function(){
        $("#wrap").animate({scrollTop:(h1+h2+h3+h4)+"px"},600)
    })
    $("#li6").click(function(){
        $("#wrap").animate({scrollTop:(h1+h2+h3+h4+h5)+"px"},600)
    })
    $("#li7").click(function(){
        $("#wrap").animate({scrollTop:(h1+h2+h3+h4+h5+h6)+"px"},600)
    })
})