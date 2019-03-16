var one=$('.sea2').offset().top;
var two=$('.sea3').offset().top;
var three=$('.sea4').offset().top;
var four=$('.sea5').offset().top;
var h=$('.control').offset().top;
var lifix=$('.control ul').children();
 var value=new Array(one,two,three,four); 
$(window).scroll(function(e) {
    var s=$(window).scrollTop();
    if(s>h){
        $('.control>ul').css({'position': 'fixed','top':'-120px','left':'50%','transform':'translateX(-500px)'});
    if (s<value[3]&&s>=value[2]) {
lifix.eq(2).addClass('current')
lifix.eq(2).siblings().removeClass('current')
  }
  else if (s<value[2]&&s>=value[1]) {
    lifix.eq(1).addClass('current')
lifix.eq(1).siblings().removeClass('current')
  }
  else if (s<value[1]&&s>=value[0]) {
    lifix.eq(0).addClass('current')
lifix.eq(0).siblings().removeClass('current')
  }
  else if(s>=value[3]){
    lifix.eq(3).addClass('current')
lifix.eq(3).siblings().removeClass('current')
  }

    }
    if(s<h)
    {
         $('.control>ul').css({'position': 'relative','top':'0px','left':'0px','transform':'translateX(0px)'});
    }

});

$('#one').click(function(event) {
// 设置滚动坐标
// $(window).scrollTop(0)
// 带有动画滚动，标签选择html,body
 $('html,body').animate({'scrollTop':one})
 $(this).addClass('current');
 $(this).siblings('current');

});
$('#two').click(function(event) {
// 设置滚动坐标
// $(window).scrollTop(0)
// 带有动画滚动，标签选择html,body
$(this).addClass('current');
$(this).siblings('current');

 $('html,body').animate({'scrollTop':two})
});
$('#three').click(function(event) {
// 设置滚动坐标
// $(window).scrollTop(0)
// 带有动画滚动，标签选择html,body
 $('html,body').animate({'scrollTop':three})
$(this).addClass('current');
$(this).siblings('current');
});
$('#four').click(function(event) {
// 设置滚动坐标
// $(window).scrollTop(0)
// 带有动画滚动，标签选择html,body
 $('html,body').animate({'scrollTop':four})
$(this).addClass('current');
 $(this).siblings('current');
});
