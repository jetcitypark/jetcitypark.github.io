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
            
            $(".menu").animate({
                height: "toggle"
            })
        })
    })

});

