$(document).ready(function(){
    //progress bar animation
    //initialize elements and window height
    var elements = $(".progress-bar");
    var window_height = window.innerHeight;
    //check condition every scroll events
    $(".content").scroll(function(){
        for(var i = 0 ; i < elements.length ; i++){
            var element = elements[i];
            var bottom_pos = element.getBoundingClientRect().bottom;
            if(bottom_pos - window_height <= 0){
                element.classList.add("expand-progress");
            }else if(bottom_pos - window_height > 0){
                element.classList.remove("expand-progress");
            }
        }
    });
    //re initialize every resize event
    $(window).resize(function(){
        elements = $(".progress-bar");
        window_height = window.innerHeight;
        console.log("re initialize window height");
    });

    //scroll navbar
    $(".nav-option a").click(function(e){
        e.preventDefault();
        var target = $(this).attr("data-target");
        var content = document.querySelector(".content");
        var panel = document.querySelector("."+target)
        var panel_top = panel.offsetTop;
        if(panel_top > 0){
            panel_top -= window.innerHeight / 2 - (panel.offsetHeight / 2);
        }
        $(".content").stop().animate({
            'scrollTop' : panel_top
        },500,'swing');
    });
    $(".contact-btn").click(function(){
        var contact_panel = document.querySelector(".contact-panel");
        target_top = contact_panel.offsetTop;
        target_top -= (window.innerHeight / 2) - (contact_panel.offsetHeight/2);
        $(".content").stop().animate({
            'scrollTop' : target_top
        },500,'swing');
    });
    //navbar active
    $(".content").scroll(function(){
        $(".nav-option a").each(function(){
            var link = $(this);
            var target_panel = $("." + link.attr("data-target"));
            var panel_top = target_panel.position().top;
            if(panel_top  <= window.innerHeight/2){
                $(".nav-option a").removeClass("link-active");
                link.addClass("link-active");
            }
            // else{
            //     link.removeClass("link-active");
            // }
        });
    });

    //image slide
    new Splide(".splide",{
        type:'loop',
        padding: {
            right:"10%",
            left:"10%"
        }
    }).mount();

    //refresh project-detail
    $(".slide-container").click(function(){
        setTimeout(function(){
            var active_image = $(".splide__list .is-active");
            var active_num = active_image.attr("data-detail");
            $(".project-detail").removeClass("detail-active");
            $(".project-detail[data-detail="+ active_num +"]").addClass("detail-active");
        },500);
    });
});
