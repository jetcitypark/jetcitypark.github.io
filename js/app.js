$(document).ready(function(){

    $(".hamburger-nav").on("click", function(){

        // $(".menu").fadeToggle("slow").toggleClass("menu-hide");
        $(".menu").animate({
          height: "toggle"
        });

    });

    // Collapse toggle menu after click 

    $(".nav-link-mobile").each(function () {
        
        $(this).on("click", function(){
            
            $(".hamburger-nav").click();
        })
    })

    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = ($(".menu").css("display") == "block");
        if (_opened === true && !clickover.hasClass("hamburger-nav")) {
            $(".hamburger-nav").click();
        }
    });

});

