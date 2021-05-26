$(function(){
    $('rect').hide();
    $('path').css('position','relative');
    let pathFill = $('path').css('fill');
    $('path').on('click', function() {
        $('path').css('fill', pathFill);
        console.log(this.id);
        $(this).css('fill','yellow');
        $("animateMotion#second").attr('path', $("#cesta").attr('d'));
        $(this).animate({opacity:.25, width: "+=5"}, 5000);
    });

})