//头部搜索出发点击显示隐藏
$('.forms').click(function(){
	$('.go-list').toggle()
})
//A-Z点击增加类其它删除类
$('.A-Z li a').click(function(){
	$(this).addClass('on');
	$(this).siblings().removeClass('on');
})
//hover显示二维码
$('.right i').hover(function(){
	$('.i-qrcode').toggle()
})
$('.right u').hover(function(){
	$('.u-qrcode').toggle()
})
//我的春秋下拉框
$('#chose>li').hover(function(){
	$('#chose>li ul').toggle()
})

//轮播图
var timer;
var n=0;
function go(){
timer = setInterval(function() {
	n++
	if(n > 5) {
		n = 0
	}
	//		$('.ppt>ul').css('top',-360*n+'px').fadeIn()
	//		$('.ppt>ul li').eq(n).fadeIn().siblings('').fadeOut(); //淡入淡出轮播
	$('.ppt>ul li').eq(n).css('opacity', 1).siblings().css('opacity', 0)
	$('ol li').eq(n).addClass('on')
	$('ol li').eq(n).siblings().removeClass('on')
}, 5000)
}
go();
//鼠标移入事件
$('ol li').mouseenter(function(){
	n = $(this).index();
//		$('.ppt>ul').css('top',-360*n+'px')
//		$('.ppt>ul li').eq(n).fadeIn().siblings('').fadeOut()
	$('.ppt>ul li').eq(n).css('opacity',1).siblings().css('opacity',0)
	$('ol li').eq(n).addClass('on')
	$('ol li').eq(n).siblings().removeClass('on')
})
$('.ppt').hover(function(){
	clearInterval(timer)
},function(){
	go()
})
//文字轮播
var t=0;
var timer2;
function run(){
	timer2 = setInterval(function(){
	t++
	if (t>4) {
		t=0
	}
	$('.sp_ppt>p').css('top',-44*t+'px')
//		$('.sp_ppt>p').css('transform',`translateY(${-44*t}px)`)
},4000)
}
run();
$('.sp_ppt>p a').hover(function(){
	clearInterval(timer2)
},function(){
	run()
})

//PPT轮播图侧边导航鼠标移入事件
$('.box').hover(function(){
	var i = $(this).index()
	$('.box1').eq(i).toggle()
})
//侧边栏点击事件
$('.nav_s>ul li').click(function(){
	$(this).toggleClass('cor')
	var n = $(this).index()
	var local;
	if(n == 0){
		local = $('.favor').offset().top
	}else if (n>0) {
		local = $('section').eq(n-1).offset().top
	}	
	$('html,body').animate({'scrollTop':local})
})
//点击回到顶部
$('body>span').click(function(){
	$('html,body').animate({'scrollTop':'0px'},200)
})

//鼠标滚动鼠标事件
function roll(n){
	$('.nav_s>ul li').eq(n).addClass('cor')
	$('.nav_s>ul li').eq(n).siblings().removeClass('cor')
}
$(window).scroll(function(){
	var h = $(window).scrollTop()
	if (h>=$('section').eq(4).offset().top) {
		roll(5)
	}else if (h>=$('section').eq(3).offset().top) {
		roll(4)
	}else if(h>=$('section').eq(2).offset().top){
		roll(3)
	}else if(h>=$('section').eq(1).offset().top){
		roll(2)
	}else if(h>=$('section').eq(0).offset().top){
		roll(1)
	}else if(h>=$('.favor').offset().top){
		roll(0)
	}
	if(h<$('nav .home').offset().top){
		$('.head.fix').css('display','none')
	}else if(h>$('nav .home').offset().top) {
		$('.head.fix').css('display','block')
	}
	if(h<$('.favor').offset().top){
		$('.nav_s').css('display','none')
		$('body>span').css('display','none')
	}else if(h>$('.favor').offset().top){
		$('.nav_s').css('display','block')
		$('body>span').css('display','block')
		}
})

//底部图片点击事件
$('.click_box').click(function(){
	$(this).css('left','-100%').css('transition','0.75s')
	$('.weixin_bg').css('left','0').css('transition','0.75s')
})
//X鼠标移入旋转90°
$('.weixin_qr_down i').hover(function(){
	$(this).css('transform','rotate(90deg)')
},function(){
	$('.weixin_qr_down i').css('transform','rotate(-90deg)')
})
//
$('.weixin_qr_down i').click(function(){
	$('.weixin_bg').css('left','-200%').css('transition','1s')
	$('.click_box').css('left','0px').css('transition','0.75s')
})

setTimeout(function(){
	$('.weixin_bg').removeClass('hidden')
},2)
