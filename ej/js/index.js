$(function(){
	// Ϊ��Ŀ���¼�
	$("ul.left_nav").on("click","li",function(){
		// this = event.currentTarget;
		$("ul.left_nav > li").removeClass("current");
		$(this).addClass("current");
		var url = $(this).attr("url");
		$("#wrapper").load(url)
	})

	// Ĭ��ѡ�е�һ��li
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