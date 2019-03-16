//侧边导航条点击事件
$('.side-nav li').click(function(){
	$(this).addClass('on');
	$(this).siblings().removeClass('on');
	var i = $(this).index();
	$(window).scrollTop($('.nav1').eq(i).offset().top);
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
		if (h>=$('.nav1').eq(6).offset().top) {
			roll(6)
		}else if (h>=$('.nav1').eq(5).offset().top) {
			roll(5)
		}else if(h>=$('.nav1').eq(4).offset().top){
			roll(4)
		}else if(h>=$('.nav1').eq(3).offset().top){
			roll(3)
		}else if(h>=$('.nav1').eq(2).offset().top){
			roll(2)
		}else if(h>=$('.nav1').eq(1).offset().top){
			roll(1)
		}else if(h>=$('.nav1').eq(0).offset().top){
			roll(0)
		}
	})
	
	//底部轮播图
	var n = 0;
	var timer;
	timer = setInterval(function(){
		n = n+1
		if(n>4){
			n=0;
//			$('.container').css('transform',`translateX(${-790*n}px)`).css('transition','0s');
			$('.container').css('left',-790*n+'px')
			n=1
		}
//		$('.container').css('left',-790*n+'px').css('transition','0.5s')
		$('.container').css('transform',`translateX(${-790*n}px)`).css('transition','0.5s')
//		$('.container').animate({'left',-790*n+'px'},500)
	},4000)