document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '');


$(document).ready(function() {

    // Placeholder Hide
    $("input, textarea").focus(function(){
       $(this).data("placeholder",$(this).attr("placeholder")).attr("placeholder","");
    }).blur(function(){
       $(this).attr("placeholder",$(this).data("placeholder"));
    });


    // Menu
    $(".nav .dropdown-toggle").dropdown("toggle");

    $(".navbar-toggle").on("click", function(){
        $(this).toggleClass("collapsed");
        $(".page-wrapper, .nav").toggleClass("move-right");
        $("body").toggleClass("menu-mob-open");
    });

    $(".page-wrapper").on("touchmove", function(e) {
        if ($("body").hasClass("menu-mob-open")){
            e.preventDefault();    
        }
    });

    $(".popup").on("click", function() {
       $(this).modal();
    });

    // Product Card Image
    $(".mini-img-list li").click(function(e){
        var url = $(this).attr("data-src");

        $(".mini-img-list li").removeClass("act");
        $(this).addClass("act");
        $(".main-img img").attr("src", url);
        e.preventDefault();
    });

    // Tabs
    $(function(){
        var $tab = $(".nav-tabs > li");
        var tabsItem = $tab.length;
        $tab.width(100/tabsItem + "%");
    });

    $("#tabs").length && $("#tabs").tabCollapse();

    // Table Mob
    var arr = $(".table .tr:first-child .td").not(":first-child").map(function(){
        return $(this).text();
    }).get();

    $(".table .tr").each(function(){
        if (!$(this).parents(".table").hasClass("table-img")){
            $(this).find(".td").not(":first-child").each(function(index){
                $(this).prepend("<span>" + arr[index] + "</span>");
            });
        }
    });


    


	windowSize();	
	$(window).resize(windowSize); 
});


var cachedWidth = window.innerWidth;

function windowSize(){
    var winWidth = window.innerWidth,
        docWidth = $(document).width();

    // Resize Mobile
    if (winWidth !== cachedWidth){
       $("body").removeClass("menu-mob-open");
       $(".page-wrapper, .nav").removeClass("move-right");
       $(".navbar-toggle").addClass("collapsed");

        cachedWidth = winWidth;
    }   

    // Mobile Viewport
    if (winWidth >= 1023){
        
    } 
        
};