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

$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation(); // to stop the listeners of parent tags to function i.e. to stop bubbling
});

$("input[type='text'").on("keypress",function(event){

	if(event.which === 13){
		var text =  $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span>" + text + "</li>");
	}

});