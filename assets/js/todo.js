$("input[type='text']").on("keypress", function(e){
    if(e.which===13){
        let todoTxt = $(this).val();
        $("ul").append("<li><span><i class=\"fas fa-trash\"></i></span> " + todoTxt + "</li>");
        $(this).val("");
    }
});


$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();//refers to a different "this" -> the parent
    });
    e.stopPropagation();
});

