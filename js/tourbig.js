/*
* @Author: hp
* @Date:   2019-02-23 10:03:40
* @Last Modified by:   hp
* @Last Modified time: 2019-02-23 10:04:18
*/

 var lid=$('#ul1').children('li');
    var lid2=$('#ul2').children('li');
    var lid3=$('#ul3').children('li');
    var ulnr1=$('#ulnr1').children('ul');
    var ulnr2=$('#ulnr2').children('ul');
    var ulnr3=$('#ulnr3').children('ul');
    /* 同类替换 class的css*/
    /*a按钮 b 对应的内容页*/
    function adclass(a,b){
    	for (var i = 0; i < a.length; i++) {
    		a.eq(i).index(i);
    		a.eq(i).click(function(event) {
    			$(this).addClass('on')
    			$(this).siblings('li').removeClass('on')
    			/*对应内容*/
    			/*这里的i 已经改变了  在循环添加序号*/
    			b.eq($(this).index()).css({'display':'block'});
    			b.eq($(this).index()).siblings().css('display', 'none');
    		});
    		
    	}
    }
    adclass(lid,ulnr1);
    adclass(lid2,ulnr2);
    adclass(lid3,ulnr3);

    /*窗口滚动*/
    
    var one=$('.biaoti1').offset().top;
    var two=$('.biaoti2').offset().top;
    var three=$('.biaoti3').offset().top;
    var four=$('.biaoti4').offset().top;
    var value=new Array(one,two,three,four);
    var lifix=$('.fax1 ul').children('li');
    $(window).scroll(function(e) {
               var s=$(window).scrollTop();
              if (s<value[3]&&s>value[2]) {
              	lifix.eq(2).addClass('current')
              	lifix.eq(2).siblings().removeClass('current')
              }
              else if (s<value[2]&&s>value[1]) {
              	lifix.eq(1).addClass('current')
              	lifix.eq(1).siblings().removeClass('current')
              }
              else if (s<value[1]&&s>value[0]) {
              	lifix.eq(0).addClass('current')
              	lifix.eq(0).siblings().removeClass('current')
              }
              else if(s>value[3]){
              	lifix.eq(3).addClass('current')
              	lifix.eq(3).siblings().removeClass('current')
              }
            });
    for (var i = 0; i < lifix.length; i++) {
    	lifix.eq(i).index(i);
    	lifix.eq(i).click(function() {
    		$('html,body').scrollTop(value[$(this).index()]);
             $(this).addClass('current');
             $(this).siblings().removeClass('current');
             
    	});
    }
    $(".back").click(function(event) {
    	$('html,body').scrollTop('0');
    });