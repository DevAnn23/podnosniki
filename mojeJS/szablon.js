$(function() {
    var div = $(".glyphicon-leaf");
    div.animate({opacity: 1});
div.animate({height: '+=100px', width: '+=100px', top: '+=100px'}, 500);
div.animate({height: '-=100px', width: '-=100px', left: '+=100px'}, 500);
div.animate({height: '+=100px', width: '+=100px', top: '-=100px'}, 500);
div.animate({height: '-=100px', width: '-=100px', left: '-=100px'}, 500);
div.animate({opacity: 0.5});
}); 
$(function() {
    $("sub").click(function() {
        $("sub").animate({
            fontSize: '28px'
        }, 1000);
    });
});