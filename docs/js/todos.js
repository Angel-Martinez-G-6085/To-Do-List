$("ul").on("click", "li", function () {
  $(this).toggleClass("complete");
});

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input").keypress(function ({ which }) {
  if (which === 13) {
    var todoText = $(this).val();
    $(this).val("");

    $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
  }
});

$('.fa-plus').click(function(){
  $("input").fadeToggle();
});