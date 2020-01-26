// checkoff item by clicking on item
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

// remove item when pressing X
$('ul').on('click', 'span', function(e){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    e.stopPropagation();
});

// add new items pressing enter
$('input').keypress(function(e){
    if (e.which === 13){
        var text = $(this).val();
        $('ul').append('<li> <span><i class="fa fa-trash"></i></span>'+text+'</li>');
        $(this).val('') 
    }
});

$('.fa.fa-plus').on('click', function(){
    $('input').fadeToggle();
});