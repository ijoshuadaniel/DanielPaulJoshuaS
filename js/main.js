$(document).ready(function(){
    
$('.good').hide();
$('.experience').hide();
$('.works').hide();
$('.contact').hide();

$('#good').click(function(e){
    e.preventDefault();
    $('.good').show();

    $('.about').hide();
    $('.works').hide();
    $('.experience').hide();
    $('.contact').hide();
});

$('#about').click(function(e){
    e.preventDefault();
    $('.about').show();

    $('.good').hide();
    $('.works').hide();
    $('.experience').hide();
    $('.contact').hide();
});

$('#experience').click(function(e){
    e.preventDefault();
    $('.experience').show();

    $('.good').hide();
    $('.works').hide();
    $('.about').hide();
    $('.contact').hide();

});

$('#works').click(function(e){
    e.preventDefault();
    $('.works').show();

    $('.good').hide();
    $('.experience').hide();
    $('.about').hide();
    $('.contact').hide();

});

$('#contact').click(function(e){
    e.preventDefault();
    $('.contact').show();

    $('.good').hide();
    $('.experience').hide();
    $('.about').hide();
    $('.works').hide();

});

});