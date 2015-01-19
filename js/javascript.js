var gridWidth = function() {
    return $( ".columns" ).width() + 100;
};

var addExtraPages = function() {
    console.log("adding extra pages");
    if ($(window).width() > 768) {
        var colHeight = $(window).height()-40-20-20;
        $( ".columns" ).css( "height" , colHeight );
        $( "h6" ).css( "line-height" , colHeight+"px" );
    } else {
        $( "h6" ).css( "line-height" , 0 );
    }
};

var snap = function() {
    // what is the width of half a column
    var half = gridWidth() / 2;
    // how many columns have we scrolled by completely
    var n = parseInt( $(window).scrollLeft() / gridWidth() );
    // how many pixels into the next column
    var rest = $(window).scrollLeft() % gridWidth();
    if (rest > half) {
        $(window).scrollLeft( (n + 1) *  gridWidth() )
    } else {
       $(window).scrollLeft( n *  gridWidth() ) 
    }
    var colHeight = $(window).height()-40-20-20;
    $( "h6" ).css( "line-height" , colHeight+"px" );
};

$( window ).ready(function(){
    //console.log($(".columns").width());
    addExtraPages();
});

$( window ).resize(function(){
    // console.log( "resize", $(".columns").width() );
    addExtraPages();
    snap();
});

$( window ).on( "scrollstop" , function() {
    snap();
    console.log('Scrollstop' + $(window).scrollLeft() % gridWidth());
});

$( "#right" ).click(function(e) {
	e.preventDefault();
    scrollamount = $(window).scrollLeft() + gridWidth();
    //console.log(scrollamount);
	//console.log('clicked! right! ' + scrollamount);
    $(window).scrollLeft(parseInt(scrollamount));
});

$( "#left" ).click(function(e) {
	e.preventDefault();
    scrollamount = $(window).scrollLeft() - gridWidth();
    //console.log(scrollamount);
	//console.log('clicked! left! ' - scrollamount);
    $(window).scrollLeft(parseInt(scrollamount));
});


// Tomasbox

var boxHTML = '<div style="width: auto; height: auto; display: block;" class="fancybox-overlay fancybox-overlay-fixed"><div style="" class="fancybox-wrap fancybox-desktop fancybox-type-image fancybox-opened" tabindex="-1"><div style="padding: 27px; width: auto; height: auto;" class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"><img class="fancybox-image" alt=""><div class="fancybox-title fancybox-title-over-wrap"></div></div></div><a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a></div></div></div>';

$("body").on("click", "#single_3", function(e) {
    e.preventDefault();
    var caption = $(this).attr('title');
    var imgURL = $(this).attr('href');
    var $box = $(boxHTML);
    if (imgURL) {
        $box.find("img").attr("src", imgURL);
    }
    $box.find(".fancybox-title").text(caption);
    $("body").append($box);
})

$("body").on("click", ".fancybox-overlay", function(e) {
    $(this).remove();
})
