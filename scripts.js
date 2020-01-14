//Click on list
$("ul").on("click", "li", function () {
    $(this).toggleClass("gray");
});
//Click on Delete
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});
//Click on Enter
$(".text-input").keydown(function (e) {
    if (e.which === 13) {
        var todotext = $(this).val();
        $(this).val("");
        $("ul").append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todotext + "</li>");

    }
});
//fadeout textinput
$("h1").on("click", "i", function () {
    $(".text-input").fadeToggle();
})
