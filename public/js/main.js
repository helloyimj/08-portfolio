 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAjoB-_7N4brn8pULoXBlqE_HZoXn8nSzE",
    authDomain: "portfolio-7012f.firebaseapp.com",
    databaseURL: "https://portfolio-7012f.firebaseio.com",
    projectId: "portfolio-7012f",
    storageBucket: "portfolio-7012f.appspot.com",
    messagingSenderId: "80725144175",
    appId: "1:80725144175:web:54945613d8acb17a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


// ghost button

$(".ghost").click(function () {
	$(this).toggleClass("active");
	if ($("#main_nav").width() === 0) {
		$("#main_nav").stop().animate({"width": "100%"}, 100, function () {

		});
	} else {
		$("#main_nav").stop().animate({"width": "0"}, 100, function () {

		});
	}
});




// $(".menus").click(function () {
// 	$(this).find(li).toggleClass("active");
// 	if ($("#main_nav").width() === 0) {

// 		$("#main_nav").stop().animate({"width": "100%"}, 100, function () {

// 		});
// 	} else {
// 		$("#main_nav").stop().animate({"width": "0"}, 100, function () {

// 		});
// 	}
// });

// $('.menus li').bind('mouseenter keyup', function() { // 메뉴바의 각 메뉴들에 마우스를 올리거나 키보드로 이동하면,
// 	$(this).addClass('active').siblings().removeClass(); // 해당 메뉴에 클래스 on을 추가하고, 다른 메뉴의 클래스를 제거합니다.
//   });





// scroll
$(function () {
	$("#bt_down").click(function () {
		$('html, body').animate({
			scrollTop: 750
		}, 500);
	});
	$("#bt_top").click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
	
});


// 네비게이션 호버 애니메이션 끝난 후 페이지이동 [없어도될것같음 a링크로 변환후 addclass 해줄예정]
// $(".link-bt").click(function(){
// 	var src = $(this).data("src");
// 	setTimeout(function(){
// 		location.href = src;
// 	}, 100);
// });


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


$("#bt_pf").click(function() {
	$(location).attr("href", "https://naver.com");
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
//     $("#main_nav").find(li).addClass('active');
// });

// $(".menus").find(li).click(function(){
// 	$(this).toggleClass("active");
//   });

$(function(){
	var $page = jQuery.url.attr("file");
	$("ul.menus li h5 span").each(function(){
		var $href = $(this).attr('href');
		if ( ($href == $page) || ($href == '') ) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});
});

// $(function(){

//     var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);

//     $('.menus li').each(function() {
//     if ($(this).attr('href') == pathname)
//     {
//         $(this).addClass('active');
//     }
//     });
// });