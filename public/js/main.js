$(".ghost").click(function () {
	$(this).toggleClass("active");
	if ($("#main_nav").width() === 0) {
		$("#main_nav").stop().animate({"width": "100%"}, 300, function () {

		});
	} else {
		$("#main_nav").stop().animate({"width": "0"}, 300, function () {

		});
	}
});

$(function () {
	$("#bt_top").click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
});

$(".link-bt").click(function(){
	var src = $(this).data("src");
	setTimeout(function(){
		location.href = src;
	}, 200);
});




$(".skill-per").find("p").each(function(){
	var $tar = $(this);
	var pct = Number($(this).data("pct"));

	var datas = {
		 datasets: [{data: [pct, (100-pct)], backgroundColor: ['#506fd4', '#ddd']}]
	};
	var options = {
		 cutoutPercentage: 75,
		 circumference: 2 * Math.PI,
		 tooltips: false
	};
	new Chart($(this).prev().find("canvas"), {
		 type: 'doughnut',
		 data: datas,
		 options: options
	});

	var std = 0;
	var interval = setInterval(function(){
		 if(std <= pct) {
				$tar.html(std+"%");
				std++;
		 }
		 else clearInterval(interval);
	},10);
});
