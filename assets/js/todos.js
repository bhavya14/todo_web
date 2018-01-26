// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128,128,128)"){
// 		// $(this).css("text-decoration","none");
// 		// $(this).css("color","black");
// 		$(this).css({
// 			color:"black",
// 			textDecoration : "none"
// 		})
// 		alert("clicked again");
// 	}
// 	else{
// 		$(this).css({
// 			color:"white",
// 			textDecoration : "line-through"
// 		})
// 	}

// });

$("li").click(function(){
	$(this).toggleClass("completed");
});

$("span").click(function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation(); // to stop the listeners of parent tags to function i.e. to stop bubbling
});