
// 브라우저 리프레쉬시 스크롤 최상단 이동
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

// top_nav
$(function(){
	var $page = jQuery.url.attr("file");
	$("ul.menus li a").each(function(){
		var $href = $(this).attr('href');
		if ( ($href == $page) || ($href == '') ) {
			$("ul.menus li").addClass('active');
		} else {
			$("ul.menus li").removeClass('active');
		}
	});
});

// ghost button toggle event

$(".ghost").click(function () {
	$(this).toggleClass("on");
	if ($("#nav_sub").width() === 0) {
		$("#nav_sub").stop().animate({"width": "100%"}, 100, function () {

		});
	} else {
		$("#nav_sub").stop().animate({"width": "0"}, 100, function () {

		});
	}
});

///메뉴 애드칼라스 지울예정 

// $(function(){
// 	var $page = jQuery.url.attr("file");
// 	$("ul.menus li h5 span").each(function(){
// 		var $href = $(this).attr('href');
// 		if ( ($href == $page) || ($href == '') ) {
// 			$(this).addClass('active');
// 		} else {
// 			$(this).removeClass('active');
// 		}
// 	});
// });


// 화면 최상단 이동 이벤트
// $('li > a, #bt_top').on('click', function(e){
// 	e.preventDefault();
// 	window.scroll(0, 0);
// })


// 상단메뉴


$(".menus>.menu li").click(function () {
	$(this).find(li).addClass("active");
	if ($("#nav_sub").width() === 0) {

		$("#nav_sub").stop().animate({"width": "100%"}, 100, function () {

		});
	} else {
		$("#nav_sub").stop().animate({"width": "0"}, 100, function () {

		});
	}
});






// $('.menus li').bind('mouseenter keyup', function() { // 메뉴바의 각 메뉴들에 마우스를 올리거나 키보드로 이동하면,
// 	$(this).addClass('active').siblings().removeClass(); // 해당 메뉴에 클래스 on을 추가하고, 다른 메뉴의 클래스를 제거합니다.
//   }); 올리면  호버상태 





// scroll
$(function () {
	$("#bt_down").click(function () {
		$('html, body').animate({
			scrollTop: 900
		}, 300);
	});
	$("#bt_top").click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 300);
	});
	
});


// // 네비게이션 호버 애니메이션 끝난 후 페이지이동 [없어도될것같음 a링크로 변환후 addclass 해줄예정]
// $(".link-bt").click(function(){
// 	var src = $(this).data("src");
// 	setTimeout(function(){
// 		location.href = src;
// 	}, 0);
// });
{/* <span data-src="../html/works.html" class="link-bt">WORKS</span */}


// Chart


$(".skill-per").find("p").each(function(){
	var $tar = $(this);
	var pct = Number($(this).data("pct"));

	var datas = {
		 datasets: [{data: [pct, (100-pct)], backgroundColor: ['#c07cfc4f', '#ddd']}]

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

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
		$(".skill-per").addClass("skill-per2");
	
});


// $(window).scroll(function(){
// 	if($(this).scrollTop() > 500) {
// 		$(".skills").show();
// 	}
// 	else {
// 		$(".skills").hide();
// 	}
// });

new WOW().init();


//포트폴리오 바로가기 버튼 링크
$("#bt_pf").click(function() {
	$(location).attr("href", "../html/works.html");
});




//navi

// $(function(){
//     var subPage = new Array;
//     subPage[0] = "ABOUT ME";
//     subPage[1] = "SKILLS";
//     subPage[2] = "WORKS";
//     subPage[3] = "CONTACT";
//     var url = location.href;
//     var getAr0 = url.indexOf(subPage[0]);
//     var getAr1 = url.indexOf(subPage[1]);
//     var getAr2 = url.indexOf(subPage[2]);
//     var getAr2 = url.indexOf(subPage[2]);
//     if(getAr0 != -1){
//         $("li:eq(1) a").addClass("menu-active")
//     };
//     if(getAr1 != -1){
//         $("li:eq(2) a").addClass("menu-active")
//     };
//     if(getAr2 != -1){
//         $("li:eq(3) a").addClass("menu-active")
// 	};
// 	if(getAr3 != -1){
//         $("li:eq(4) a").addClass("menu-active")
//     };
// });


// $(function(){
//     $("#nav_sub").find(li).addClass('active');
// });

// $(".menus").find(li).click(function(){
// 	$(this).toggleClass("active");
//   });




// $(function(){

//     var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);

//     $('.menus li').each(function() {
//     if ($(this).attr('href') == pathname)
//     {
//         $(this).addClass('active');
//     }
//     });
// });

