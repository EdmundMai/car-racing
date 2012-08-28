$(document).ready(function(){

	$('#button').click(function(){
		$('p').css({
			'opacity': '0',
			'width': "0px",
			'height': "0px"
		});
		$('#ready').css({"opacity": "1"}).delay(300).fadeOut("slow");
		setTimeout(function(){
			$('#go').css({"opacity": "1"}).delay(300).fadeOut("slow")
		}, 800);
		setTimeout(function(){
			$('#car1').animate({
				left:"600px",
			}, Math.random() * 3800);
			$('#car2').animate({
				left:"600px",
			}, Math.random() * 5000);
			$('#car3').animate({
				left:"600px",
			}, Math.random() * 3000);
			$('#car4').animate({
				left:"600px",
			}, Math.random() * 4000);
			$('#car5').animate({
				left:"600px",
			}, Math.random() * 10000);
		}, 1400);
	});


	$('#reset').click(function(){
		$('#car1, #car2, #car3, #car4, #car5').stop().animate({
			left:"0"
		})
	});


	$('img').click(function(){
		var pic = $('img').index(this);
		$('p').animate({
			opacity: '0',
			width: "0px",
			height: "0px"
		});
		$('p').eq(pic).animate({
			opacity: '1',
			width: "500px",
			height:"1em"
		}, 200);
		});



});