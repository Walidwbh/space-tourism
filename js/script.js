$(document).ready(
    function () { 
        // hamburger menu
        $(".hamburger").click(function(){
            $(".hamburger").toggleClass("active");
            $(".navbar").toggleClass("active");
        })
    }
)