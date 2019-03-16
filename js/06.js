/*
* @Author: john
* @Date:   2019-02-22 22:54:22
* @Last Modified by:   john
* @Last Modified time: 2019-02-22 23:03:36
*/
$(function(){
	$w=$('.l_left>img').width();
	$h=$('.l_left>img').height();
	$w2=$w+30;
	$h2=$h+30;
	$('.l_left').hover(function() {	
    $(this).children('img').stop().animate({width:$w2,height:$h2,left:'-15px',top:'-15px'},500);
    }, function() {	
    $(this).children('img').stop().animate({width:$w,height:$h,left:'0px',top:'0px'},500);
	});
})
$('.hhead>li').hover(function() {
	$(this).children('a').css('color','#c49c5f');
}, function() {
	$('.hhead>li').eq(3).siblings().children('a').css('color','#666');
});
$('.mdd').hover(function() {
	$('.hide').fadeToggle();
});