$(document).ready(
    function () { 
        // hamburger menu
        $(".hamburger").click(function(){
            $(".hamburger").toggleClass("active");
            $(".navbar").toggleClass("active");
        })
        //active class for ham menu
        $(".navbar li").each(function(){
            if($(this).data("class") == $("body").attr("class")){
                $(this).addClass("active")
            }            
        })
        //destination tabs
        $(".tab-content").hide();
        $(".tab-content:first").show();
        $(".tabs li:first").addClass("active");
        $(".tabs li").click(function(event){
            $(".tabs li").removeClass("active");
            $(this).addClass("active")
            $(".tab-content").hide();
            var selectedTab = $(this).find('a').attr("href");
            $(selectedTab).fadeIn();
        })
        // slider
    }
)