$(document).ready(function() {
  $(".paris").click(function() {
    $(".center").css("background-image", "url(bg-1.jpeg)");
  });

  $(".tattoo").click(function() {
    $(".center").css("background-image", "url(bg-2.jpeg)");
  });

  $(".concert").click(function() {
    $(".center").css("background-image", "url(bg-3.jpeg)");
  });

  $(".bedroom").click(function() {
    $(".center").css("background-image", "url(bg-4.jpeg)");
  });

  $(".beach").click(function() {
    $(".center").css("background-image", "url(bg-5.jpeg)");
  });

  $(".classroom").click(function() {
    $(".center").css("background-image", "url(bg-6.jpeg)");
  });
});

$( ".draggable" ).draggable();

// this adds an active class to the clicked item that forces the item's position to be fixed, which allows it to exit the container
$( ".draggable" ).mousedown(function() {
  $( this ).addClass('active');
});
