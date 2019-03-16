/*
* @Author: john
* @Date:   2019-02-20 03:29:47
* @Last Modified by:   john
* @Last Modified time: 2019-02-20 03:30:01
*/
$('.hhead>li').hover(function() {
	$(this).children('a').css('color','#c49c5f');
}, function() {
	$('.hhead>li').eq(1).siblings().children('a').css('color','#666');
});
$('.mdd').hover(function() {
	$('.hide').fadeToggle();
});