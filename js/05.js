//侧边导航条点击事件
$('.side-nav li').click(function(){
	$(this).addClass('on');
	$(this).siblings().removeClass('on');
	var i = $(this).index();
	$(window).scrollTop($('.bgc').eq(i).offset().top);
})
$('.side-nav p').click(function(){
	$(window).scrollTop(0);
})

	//鼠标滚动鼠标事件
	function roll(i){
		$('.side-nav li').eq(i).addClass('on')
		$('.side-nav li').eq(i).siblings().removeClass('on')
	}
	$(window).scroll(function(){
		var h = $(window).scrollTop()
		if (h>=$('.bgc').eq(1).offset().top) {
			roll(1)
		}else if (h>=$('.bgc').eq(0).offset().top) {
			roll(0)
		}
	})