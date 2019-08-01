function getAmPm(hour) {
	if(hour < 10) return "오전 0" + hour;
	else if(hour == 10 || hour == 11) return "오전 " + hour;
	else if(hour == 12) return "오후 " + hour;
	else if(hour >= 13 && hour < 22) return "오후 0" + (hour - 12);
	else return "오후 " + (hour - 12);
}

function zeroPlus(n) {
	if(n < 10) return "0" + n;
	else return n;
}

$(".img_hover").mouseover(function(){
	$(this).attr("src", $(this).data("hover"));
});
$(".img_hover").mouseleave(function(){
	$(this).attr("src", $(this).data("src"));
});

$(document).ready(function(){

});
