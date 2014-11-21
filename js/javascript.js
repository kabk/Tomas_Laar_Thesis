var gridWidth = function() {
    return $( ".columns" ).width() + 100;
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
    var colHeight = $(window).height()-((40+20+20)+$("#header").height());
    $( "h6" ).css( "line-height" , colHeight+"px" );
};

$( window ).ready(function(){
    //console.log($(".columns").width());
    var colHeight = $(window).height()-((40+20+20)+$("#header").height());
    $( ".columns" ).css( "height" , colHeight );
    $( "h6" ).css( "line-height" , colHeight+"px" );
});

$( window ).resize(function(){
    //console.log( $(".columns").width() );
        var colHeight = $(window).height()-((40+20+20)+$("#header").height());
    $( ".columns" ).css( "height" , colHeight );
    $( "h6" ).css( "line-height" , colHeight+"px" );
    snap();
});

$( window ).on( "scrollstop" , function() {
    snap();
    // console.log('Scrollstop' + $(window).scrollLeft() % gridWidth());
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




