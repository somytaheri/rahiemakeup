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
