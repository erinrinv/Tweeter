$(document).ready(function() {
  console.log("composer-char-counter.js loaded successfully");

  $(".new-tweet textarea").on("input", function() {
    var charCount = $(this).val().length;
    var remainingChars = 140 - charCount;
    $(".counter").text(remainingChars);
    
    // Adjust counter color
    if (remainingChars < 0) {
      $(".counter").addClass("over-limit");
    } else {
      $(".counter").removeClass("over-limit");
    }
  });
});