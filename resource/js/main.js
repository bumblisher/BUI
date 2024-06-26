$(document).ready(function() {

    $('.nav_menu >li>a').on('click',function(){
        var indexG = $(this).parent().index();
        var hasC = $(this).parent().hasClass("nodep");
		var sub_menu = $(".nav_menu").children().eq(indexG).children('ul');

		if(sub_menu.is(":visible")){
			sub_menu.css("display","block");
            sub_menu.slideUp();
            $(".nav_menu").children().eq(indexG).removeClass("active");
        }else if(hasC){
            $('.nav_menu li ').removeClass("on");
            $(this).parent().addClass("on")
        }
        else{
            sub_menu.slideDown();
            $(".nav_menu").children().eq(indexG).addClass("active");
        }
        
    });
    $('.nav_menu > li > ul > li >  a').on('click',function(){
        
        var sub_menu2 = $(this).siblings("ul");

        $('.nav_menu li ').removeClass("on");
        $(this).parent().addClass("on")
    
        if(sub_menu2.is(":visible")){
            $('.nav_menu ul ul ').slideUp();
        }
        else{
            $('.nav_menu ul ul ').slideUp();
            sub_menu2.slideDown();
        }
    });
    $('.nav_menu > li > ul > li > ul  a').on('click',function(){
        
        $('.nav_menu ul ul > li ').removeClass("on");
        $(this).parent().addClass("on")
    
    });
    $('.btn_menu').on('click',function(){
        
        $('aside').toggleClass("hide");
    });

});

