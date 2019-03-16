/*
* @Author: john
* @Date:   2019-02-20 02:26:57
* @Last Modified by:   hp
* @Last Modified time: 2019-02-20 12:54:23
*/
$('.hhead>li').hover(function() {
	$(this).children('a').css('color','#c49c5f');
}, function() {
	$('.hhead>li').eq(4).siblings().children('a').css('color','#666');
});
$('.mdd').hover(function() {
	$('.hide').fadeToggle();
});
$('.dzs>li').hover(function() {
	$(this).css({'box-shadow':'0px 5px 12px 1px #ccc','top':'-10px'});
}, function() {
	$(this).css({'box-shadow':'none','top':'0px'});
});
