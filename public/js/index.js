// navi-bar
$(".navi > li").mouseover(function(){
	switch($(this).index()) {
		case 0:
		case 3:
			$(this).find(".navi-subs").css({"display":"flex"});
			break;
		case 1:
		case 2:
		case 4:
			$(this).find(".navi-subs").css({"display":"block"});
			break;
	}
	$(this).find(".navi-bar").addClass("navi-bar-hover");
	$(this).find(".navi-subs").stop().animate({"top":"2.5rem", "opacity":1}, 500);
});
$(".navi > li").mouseleave(function(){
	$(this).find(".navi-bar").removeClass("navi-bar-hover");
	$(this).find(".navi-subs").stop().animate({"top":"5rem", "opacity":0}, 500, function(){
		$(this).css({"display":"none"});
	});
});

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