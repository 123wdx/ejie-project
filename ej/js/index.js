$(function(){
	// 为栏目绑定事件
	$("ul.left_nav").on("click","li",function(){
		// this = event.currentTarget;
		$("ul.left_nav > li").removeClass("current");
		$(this).addClass("current");
		var url = $(this).attr("url");
		$("#wrapper").load(url)
	})

	// 默认选中第一个li
	$("ul.left_nav > li:first-child").trigger("click");


	});
$(function(){
	$("div.mb_nav").on("click","a",function(){
		$("div.mb_nav>a").removeClass("current");
		$(this).addClass("current");
		var url=$(this).attr("url");
		$("#wrapper").load(url);
		$("div.mb_nav > a:first-child").trigger("click");
	})
})