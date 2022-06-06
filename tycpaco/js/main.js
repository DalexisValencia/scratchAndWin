jQuery(document).ready(function(){
    /*tyc-page__list*/
    jQuery(".tyc-page .tyc-page__list ul li").click(function(e){
        jQuery(".tyc-page .tyc-page__list ul li").removeClass("active");
        jQuery(this).addClass("active");

        /*jQuery(".tyc-page .tyc-page__results .tyc-page__resultsItems").hide();
        jQuery(".tyc-page .tyc-page__results .tyc-page__resultsItems[data-id='" + jQuery(this).data("id") + "']").css("display", "flex").hide().fadeIn();*/
    });

    /*tyc-page__list*/
    jQuery(".tyc-page .tyc-page__resultsItems ul li").click(function(e){
        jQuery(".tyc-page .tyc-page__resultsItems ul li").removeClass("active");
        jQuery(this).addClass("active");
    });

    /*tyc-internal__top*/
    jQuery(".tyc-internal__top").click(function(){
        console.log("click");
		jQuery('html, body').animate({
            scrollTop: 0
        }, 'slow');
	});
});
