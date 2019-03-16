    //我的春秋下拉框
	$('#chose>li').hover(function(){
		$('#chose>li ul').toggle()
	})
	//回到顶部
	$('.fix-box .b-top').click(function(){
		$('html,body').animate({'scrollTop':'0px'},500)
	})
	//点击
	$('.click-pic li').click(function(){
		$(this).addClass('domes-tk')
		$(this).siblings().removeClass('domes-tk')
	})
	$('.radio a').click(function(){
		$(this).addClass('on')
		$(this).siblings().removeClass('on')
	})
