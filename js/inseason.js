    //我的春秋下拉框
	$('#chose>li').hover(function(){
		$('#chose>li ul').toggle()
	})
	//回到顶部
	$('.fix-box>a.b-top').click(function(){
		$('html,body').animate({'scrollTop':'0px'},0)
	})
	//表格日期点击事件
	$('.date-select li').click(function(){
		$(this).addClass('on')
		$(this).siblings().removeClass('on')
	})
