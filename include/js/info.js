$("#infoIcon").click(

	function toggle() {
		var winHeight=$( window ).height();
		//var windowOffset=$(window).height()+$(window).scrollTop()
		//var windowOffset=$(window).scrollTop()
		var footerHeight=$( "#footer" ).outerHeight();
		if ( $("#info").css("display")=="none") {
			$("#info").css("display","block");

			$("#info").css("top",winHeight);
			//console.log($("#info").css("top"))
			$('#info').animate({
				top:footerHeight,

				//
			}, 2000, function(){
				//$("#info").css("margin-top","150px");
				$("#album").css("display","none");
				console.log($("#info").css("top"));
			});

			$('#footer').animate({
				bottom: winHeight - footerHeight,
				backgroundColor: 'rgba(47, 52,59,1)',
			}, 2000, function(){
console.log($("#footer").css("bottom"));
				console.log($("#info").css("top"));
				console.log($("#footer").css("background-color"));
				$("#footer").css("position","absolute");
				$("#info").css("position","absolute");
				$( ".fa-info" ).removeClass( "fa-info" ).addClass( "fa-times" );


			});
			$('.showIcon').animate({
				opacity:"0",
			}, 2000, function(){
			});






			return false;
		}
		else {
			$("#album").css("display","block");
			// $("#info").css("top",winHeight);
			$('#info').animate({
				top:winHeight
			}, 2000, function(){
				$("#info").css("display","none");
			});
			$('#footer').animate({
				bottom: 0,
				backgroundColor: 'rgba(47, 52,59,0.9)',
			}, 2000, function(){
				$("#footer").css("position","fixed");
				$("#info").css("position","fixed");
				$( ".fa-times" ).removeClass( "fa-times" ).addClass( "fa-info" );
			});
			$('.showIcon').animate({
				opacity:"1",
			}, 2000, function(){
			});

		}
	});

$("#infoIcon").click( function () {
	google.maps.event.trigger(map, 'resize');

});

