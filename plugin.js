// jQuery Plugin: Jquery-Before-After-Slider
// source: https://github.com/hanumanum/jquery-before-after-slider?tab=readme-ov-file
var config = {
    "width": "800px",
    "height": "700px",
    "start": "25%",
    // Images used were taken by me (Nick Fitzpatrick)
    // "firstImage": "images/wallDay.jpeg",
    // "secondImage": "images/wallNight.jpeg"

    "firstImage": "images/PageLight.png",
    "secondImage": "images/PageDark.png"
}

$(document).ready(function() {
$("#slider").hanBeforeAfterSlider(config);
});



// jQuery Plugin: Button
// source: https://jqueryui.com/button/
$( function() {
    $( ".widget button" ).button();
    $( "button" ).on( "click", function( event ) {
        window.location.href = "https://github.com/hanumanum/jquery-before-after-slider?tab=readme-ov-file";
    } );
  } );