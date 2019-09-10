new WOW().init();
var wowChk = [];
var pageChk = true;
$(document).ready(function(){
	for(var i=0; i<$(".pages").length; i++) {
		if(i == 0) $(".pagers").append('<div class="pager_sel"></div>');
		else $(".pagers").append('<div class="pager_def"></div>');
		wowChk[i] = true;
	}
	wheelPrevent(".pages");
	$(".pages").mousewheel(pageWheel);
	function pageWheel(e){
		e.preventDefault();
		//console.log(e.deltaX, e.deltaY, e.deltaFactor);
		//console.log(e.pageY);
		if(pageChk == true) {
			pageChk = false;
			var len = $(".pages").length;		//4
			var now = len - 1;							//3
			var pos = [];
			for (var i = 0; i < len; i++) {
				pos[i] = $(".pages").eq(i).offset().top;
			}
			for (var i = 0; i < len; i++) {
				if (pos[i + 1] > e.pageY) {
					now = i;
					break;
				}
			}
			if (e.deltaY == -1) {
				// 휠을 밑으로 페이지는 위로
				if (now < len - 1) {
					$("html, body").stop().animate({"scrollTop": pos[now + 1] + "px"}, 600, function () {
						$(".pagers > div").attr("class", "");
						$(".pagers > div").not($(".pagers > div").eq(now + 1)).addClass("pager_def");
						$(".pagers > div").eq(now + 1).addClass("pager_sel");
						pageChk = true;
					});
				}
			} else {
				// 휠을 위로 페이지는 밑으로
				if (now > 0) {
					$("html, body").stop().animate({"scrollTop": pos[now - 1] + "px"}, 600, function () {
						$(".pagers > div").attr("class", "");
						$(".pagers > div").not($(".pagers > div").eq(now - 1)).addClass("pager_def");
						$(".pagers > div").eq(now - 1).addClass("pager_sel");
						pageChk = true;
					});
				}
			}
		}
	}
});