$("#infoIcon").click(
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
			$("#footer").css("position","fixed");
			$("#info").css("position","fixed");
			$('#footer').animate({
				bottom: 0,
				backgroundColor: 'rgba(47, 52,59,0.9)'
			}, 2000, function(){
				$( ".fa-times" ).removeClass( "fa-times" ).addClass( "fa-info" );
			});
			$('#info').animate({
				top:winHeight
			}, 2000, function(){
				$("#info").css("display","none");
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

