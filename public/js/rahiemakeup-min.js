"use strict";function initialize(){var a=new google.maps.LatLng(-37.8862,145.2824),b={center:a,zoom:12,disableDefaultUI:!0};map=new google.maps.Map(document.getElementById("map-canvas"),b);var c=new google.maps.Marker({position:a,map:map,animation:google.maps.Animation.DROP});google.maps.event.addListener(c,"click",toggleBounce)}function toggleBounce(){marker.setAnimation(null!=marker.getAnimation()?null:google.maps.Animation.BOUNCE)}function shuffle(){for(var a,b,c,d=photoIndex;0!==d;)c=Math.floor(Math.random()*d),d-=1,a=photoId[d],photoId[d]=photoId[c],photoId[c]=a,b=photoSrc[d],photoSrc[d]=photoSrc[c],photoSrc[c]=b;return photoSrc}var map;if(google.maps.event.addDomListener(window,"load",initialize),$("#infoIcon").click(function(){var a=$(window).height(),b=$("#footer").outerHeight();return"none"==$("#info").css("display")?($("#info").css("display","block"),$("#info").css("top",a),$("#info").animate({top:b},2e3,function(){$("#album").css("display","none"),console.log($("#info").css("top"))}),$("#footer").animate({bottom:a-b,backgroundColor:"rgba(47, 52,59,1)"},2e3,function(){console.log($("#footer").css("bottom")),console.log($("#info").css("top")),console.log($("#footer").css("background-color")),$("#footer").css("position","absolute"),$("#info").css("position","absolute"),$(".fa-info").removeClass("fa-info").addClass("fa-times")}),$(".showIcon").animate({opacity:"0"},2e3,function(){}),!1):($("#album").css("display","block"),$("#info").animate({top:a},2e3,function(){$("#info").css("display","none")}),$("#footer").animate({bottom:0,backgroundColor:"rgba(47, 52,59,0.9)"},2e3,function(){$("#footer").css("position","fixed"),$("#info").css("position","fixed"),$(".fa-times").removeClass("fa-times").addClass("fa-info")}),$(".showIcon").animate({opacity:"1"},2e3,function(){}),void 0)}),$("#infoIcon").click(function(){google.maps.event.trigger(map,"resize")}),jQuery(document).ready(function(a){var b,c={$AutoPlay:!0,$AutoPlayInterval:3e3,$SlideDuration:1e3,$ArrowNavigatorOptions:{$Class:$JssorArrowNavigator$,$ChanceToShow:1,$AutoCenter:2,$Steps:1}},d=new $JssorSlider$("slider1_container",c);a(".imgModal").click(function(){return b=a(this).attr("id"),d.$GoTo(b),b})}),document.documentElement.clientWidth>768){var photoSrc=$(".imgModal").map(function(){return this.src}).toArray(),photoId=$(".imgModal").map(function(){return this.id}).toArray(),photoIndex=photoSrc.length,arrayme=$("ul").find(".imgModal");setInterval(function(){shuffle();for(var a=0;photoIndex>=a;a++)$(arrayme[a]).attr("src",photoSrc[a]),$(arrayme[a]).attr("id",photoId[a])},5e3)}