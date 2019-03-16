    //我的春秋下拉框
	$('#chose>li').hover(function(){
		$('#chose>li ul').toggle()
	})
	var timer;
	var n=0;
	function go(){
	timer = setInterval(function(){
		n++
		if (n>2) {
			n=0
		}
		$('.ppt-box>ul li').eq(n).css('opacity',1).siblings().css('opacity',0)
		$('.ol-btn span').eq(n).addClass('on')
		$('.ol-btn span').eq(n).siblings().removeClass('on')
	},5000)
	}
	go();
	//鼠标移入停止轮播
	$('.ppt-box').hover(function(){
		clearInterval(timer)
	},function(){
		go()
	})
		//鼠标移入事件
	$('.ol-btn span').mouseenter(function(){
		n = $(this).index();
		$('.ppt-box>ul li').eq(n).css('opacity',1).siblings().css('opacity',0)
		$('.ol-btn span').eq(n).addClass('on')
		$('.ol-btn span').eq(n).siblings().removeClass('on')
	})


	//PPT侧边导航鼠标移入事件
	$('.box').hover(function(){
		var i = $(this).index()
		$('.nav_content div').eq(i) .css('display','block').siblings().css('display','none')
	},function(){
		$('.nav_content div').css('display','none')
	})
	//鼠标移入图片滑动
	$('.sli-pimg ul li').mouseenter(function(){
		$(this).addClass('on')
		$(this).siblings().removeClass('on')
		
	})
	$(window).scroll(function(){
		var h = $(window).scrollTop()
		if(h<$('nav .home').offset().top){
			$('.head.fix').css('display','none')
		}else if(h>$('nav .home').offset().top) {
			$('.head.fix').css('display','block')
		}
	})