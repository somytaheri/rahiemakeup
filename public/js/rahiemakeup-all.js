/**
 * Created by somi on 19/11/14.
 */

"use strict";
var map;
function initialize() {
    var myLatlng = new google.maps.LatLng(-37.8862,145.2824);
    var mapOptions = {
        center: myLatlng,
        zoom: 12,
        disableDefaultUI:true
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        animation: google.maps.Animation.DROP
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);


}
function toggleBounce() {

    if (marker.getAnimation() != null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
google.maps.event.addDomListener(window, 'load', initialize);
;$("#infoIcon").click(
	function toggle() {
		var winHeight=$( window ).height();
		var footerHeight=$( "#footer" ).outerHeight();
		if ( $("#info").css("display")=="none")
		{
			$("#info").css("display","block");
			$("#info").css("top",winHeight);
			$('#info').animate({
				top:footerHeight
			}, 2000, function()
			{
				$("#album").css("display","none");
			});

			$('#footer').animate(
			{
				bottom: winHeight - footerHeight,
				backgroundColor: 'rgba(47, 52,59,1)'
			}, 2000, function()
			{
				console.log($("#info").css("top"));
				console.log($("#footer").css("background-color"));
				$("#footer").css("position","absolute");
				$("#info").css("position","absolute");
				$( ".fa-info" ).removeClass( "fa-info" ).addClass( "fa-times" );
			});
			$('.showIcon').animate(
				{
				opacity:"0"
			}, 2000
			);
			return false;
		}
		else
		{
			$("#album").css("display","block");
			$('#info').animate({
				top:winHeight
			}, 2000, function(){
				$("#info").css("display","none");
			});
			$('#footer').animate({
				bottom: 0,
				backgroundColor: 'rgba(47, 52,59,0.9)'
			}, 2000, function(){
				$("#footer").css("position","fixed");
				$("#info").css("position","fixed");
				$( ".fa-times" ).removeClass( "fa-times" ).addClass( "fa-info" );
			});
			$('.showIcon').animate({
				opacity:"1"
			}, 2000
			);
		}
	});

$("#infoIcon").click( function () {
	var center = map.getCenter();
	google.maps.event.trigger(map, "resize");
	map.setCenter(center);

});

;/**
 * Created by somi on 19/11/14.
 */

jQuery(document).ready(function ($) {
    var options = {
        $AutoPlay: true,
        $AutoPlayInterval: 3000,
        $SlideDuration: 1000,
        $ArrowNavigatorOptions: {                           //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$,                  //[Requried] Class to create arrow navigator instance
            $ChanceToShow: 1,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
            $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
            $Steps: 1 ,                                     //[Optional] Steps to go for each navigation request, default value is 1

        }
    };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);
    var currentId;
    $('.imgModal').click(function() {
            currentId = $(this).attr('id');
            jssor_slider1.$GoTo(currentId);
            return currentId;
        }
    );

});

;
if (document.documentElement.clientWidth >768){
    var photoSrc = $('.imgModal').map(function () {
            return this.src;

        }).toArray(),
        photoId = $('.imgModal').map(function () {
            return this.id;
        }).toArray(),
        photoIndex = photoSrc.length,
        arrayme = $('ul').find(".imgModal");

    function shuffle() {
        var currentIndex = photoIndex, temporaryidValue,temporarysrcValue, randomIndex ;
        // While there remain elements to shuffle...
        for (var i = 0; i <= 1; i++)  {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryidValue = photoId[currentIndex];
            photoId[currentIndex] = photoId[randomIndex];
            photoId[randomIndex] = temporaryidValue;


            temporarysrcValue = photoSrc[currentIndex];
            photoSrc[currentIndex] = photoSrc[randomIndex];
            photoSrc[randomIndex] = temporarysrcValue;

        }

        return photoId,photoSrc;
    };


    setInterval(function() {
        shuffle();
        for (var i = 0; i <= photoIndex; i++) {
            //$(arrayme[i]).fadeOut(2000).attr( "src", photoSrc[i]).fadeIn("1000");

            $(arrayme[i]).attr("src", photoSrc[i]);
            $(arrayme[i]).attr("id", photoId[i]);


            //$(this).fadeOut("fast").attr("src", src).fadeIn("fast");
        };

    },5000)


};