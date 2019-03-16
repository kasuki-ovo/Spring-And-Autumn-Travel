/*
* @Author: hp
* @Date:   2019-02-18 11:05:39
* @Last Modified by:   john
* @Last Modified time: 2019-02-20 03:22:35
*/

$('.m_bottom li').hover(function() {
	$(this).children().children('img').stop().animate({'width': '414px', 'height': '288px','left':'-15px','top':'-15px'}, 500);
}, function() {
$(this).children().children('img').stop().animate({'width': '384px', 'height': '258px','left':'0px','top':'0px'}, 500);
});
$(function(){
	$w=$('section li').width();
	$h=$('section li').height();
	$w2=$w+30;
	$h2=$h+30;
	$('section li').hover(function() {	
    $(this).children().children('img').stop().animate({width:$w2,height:$h2,left:'-15px',top:'-15px'},500);
    }, function() {	
    $(this).children().children('img').stop().animate({width:$w,height:$h,left:'0px',top:'0px'},500);
});
})
$('.m_top li').hover(function(){
	$(this).children().children('img').stop().animate({'width': '299px', 'height': '394px','left':'-15px','top':'-15px'}, 500);
	$(this).children().children('.msg').hide();
	$(this).children().children('.msg1').slideDown();
},function(){
	$(this).children().children('img').stop().animate({'width': '269px', 'height': '364px','left':'0px','top':'0px'}, 500);
	$(this).children().children('.msg').show();
	$(this).children().children('.msg1').slideUp();
})
$('.more').hover(function() {
	$(this).css({'color':'#c49c5f','background':'#fff'});
}, function() {
	$(this).css({'color':'#fff','background':'none'});
});
$('nav li').hover(function() {
	$(this).children('a').css('color','#c49c5f');
}, function() {
	$('nav li').eq(0).siblings().children('a').css('color','#fff');

});
$('.mdd1').hover(function() {
	$('.hide').fadeToggle();
});

