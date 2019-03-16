/*
* @Author: hp
* @Date:   2019-02-23 09:42:10
* @Last Modified by:   hp
* @Last Modified time: 2019-02-27 17:29:51
*/

    var n1=0;
    var n2=0;
    var d=184;
    var d2=275;
    var t=6;
    var t2=2;
    function move(num,a,b,c,d,e){

            a.click(function() {
            num=num+1;
            var h=-num*d+"px";
            c.css('left', h);

           if (num==e){
                a.hide();
            }
            else if(num==0){
                b.hide();
            }
            else{
                b.show();
                a.show();
            }
            
        });

        b.click(function() {

            num=num-1;
            var h=-num*d+"px";
           c.css('left', h);
           if (num==0){
               b.hide();
            }
            else{
                b.show();
                a.show();
            }
            
        });
    }
    move(n1,$('#right'),$('#left'),$('#ul1'),d,t);
    move(n2,$('#right2'),$('#left2'),$('#ul2'),d2,t2);


    $('.b2').click(function(event) {
        $('.tanchu').toggle()
     })
