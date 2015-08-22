$(document).ready(function() {
    // Image swap on hover
    $("#gallery li img").hover(function(){
        $('#main-img').attr('src',$(this).attr('src').replace('thumb/', ''));
    });
    // Image preload
    var imgSwap = [];
     $("#gallery li img").each(function(){
        imgUrl = this.src.replace('thumb/', '');
        imgSwap.push(imgUrl);
    });
    $(imgSwap).preload();
});
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$(document).ready(function() {
    // Image swap on hover
    $("#gallery2 li img").hover(function(){
        $('#main-img2').attr('src',$(this).attr('src').replace('thumb/', ''));
    });
    // Image preload
    var imgSwap = [];
     $("#gallery2 li img").each(function(){
        imgUrl = this.src.replace('thumb/', '');
        imgSwap.push(imgUrl);
    });
    $(imgSwap).preload();
});
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$(document).ready(function() {
    // Image swap on hover
    $("#gallery3 li img").hover(function(){
        $('#main-img3').attr('src',$(this).attr('src').replace('thumb/', ''));
    });
    // Image preload
    var imgSwap = [];
     $("#gallery3 li img").each(function(){
        imgUrl = this.src.replace('thumb/', '');
        imgSwap.push(imgUrl);
    });
    $(imgSwap).preload();
});
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}