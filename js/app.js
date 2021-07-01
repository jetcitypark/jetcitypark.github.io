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
        if (_opened === true 
            && !clickover.hasClass("hamburger-nav") 
            && !clickover.hasClass("nav-link-mobile")
            && !clickover.hasClass("nav-item-mobile")) {
            $(".hamburger-nav").click();
        }
    });

});

