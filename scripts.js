$(document).ready(function(){
  $("button#white").click(function(){
    $("body").removeClass();
    $("body").addClass("white-background");
    $("p").css("color", "#56bc8a");
    $("h2").css("color", "#56bc8a");
    $("hr").css("border", "2px solid #56bc8a");
    $("button#green").show();
    $("button#white").hide();
  });



  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
    $("p").css("color", "#fff");
    $("h2").css("color", "#fff");
    $("hr").css("border", "2px solid #fff");
    $("button#white").show();
    $("button#green").hide();
  });

});
