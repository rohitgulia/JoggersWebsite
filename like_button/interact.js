/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jshint strict: true */



var x=950;

function scroll_down(){
    
  if(x<5000)
  {
      $('html,body').animate({scrollTop: x},'slow');
  x=x+950;
  }
    else{
        $(".scroller").css("transform","rotate(180deg)");
    }

}




// like js
    

 function likeadd()
    {
        $.post('ajax/like_add.php');
        likeget();
        
    }
    
    function likeget()
    {
        
        $.post('ajax/like_get.php' , function(data){
            
            $("#number").text(data);
            
        });
        
        
    }



// graph options js
var op1,op2,op3,op4,op5,op6;

function likeaddoption1()
    {    $.post('ajax/like_add_option1.php');
        likegetoption1();}
    
    function likegetoption1()
       { $.post('ajax/like_get_option1.php' , function(data){op1= data;});   
    }

function likeaddoption2()
    {    $.post('ajax/like_add_option2.php');
        likegetoption2();}
    
    function likegetoption2()
       { $.post('ajax/like_get_option2.php' , function(data){ op2= data;});   
    }

function likeaddoption3()
    {    $.post('ajax/like_add_option3.php');
        likegetoption3();}
    
    function likegetoption3()
       { $.post('ajax/like_get_option3.php' , function(data){ op3= data;});   
    }

function likeaddoption4()
    {    $.post('ajax/like_add_option4.php');
        likegetoption4();}
    
    function likegetoption4()
       { $.post('ajax/like_get_option4.php' , function(data){ op4= data;});   
    }

function likeaddoption5()
    {    $.post('ajax/like_add_option5.php');
        likegetoption5();}
    
    function likegetoption5()
       { $.post('ajax/like_get_option5.php' , function(data){ op5= data;});   
    }

function likeaddoption6()
    {    $.post('ajax/like_add_option6.php');
        likegetoption6();}
    
    function likegetoption6()
       { $.post('ajax/like_get_option6.php' , function(data){op6= data;});   
    }


 var counters=0;


// html page js

$(function () {
    
    
    
var Controller = new ScrollMagic.Controller();
    //var tween0 =TweenLite.to("#head", 5, { ease: Power4.easeIn, y:320 });
    
var tween2= TweenLite.to("#tur", 6, { ease: Power4.easeInOut, x: "450%" });
var scene2= new ScrollMagic.Scene({triggerElement: '.page1',offset: 5})
.setTween(tween2)
.addTo(Controller);

var tween0 = TweenMax.to("#head", 7, { ease: Bounce.easeInOut, y:550 });
TweenLite.to(".arrow", 5, { ease: SteppedEase.config(40), y: 430 });
var scene0= new ScrollMagic.Scene({triggerElement: '#head',offset: 100})
.setTween(tween0)
.addTo(Controller);


var tween6= TweenLite.to(".super", 3, { ease: Power4.easeInOut, y: "-400%" });
var tween3= TweenMax.staggerFrom(".btn", 4, {scale:0.9, opacity:1, delay:0.5, ease:Elastic.easeOut}, 0.2);
var scene3= new ScrollMagic.Scene({triggerElement:'.page1',offset:50})

.setTween(tween3)
.setTween(tween6)
.addTo(Controller);

    $("#btnclk ").click(function(){
      TweenMax.staggerTo(".btn",0.7,{opacity:0, y:-1000,delay:0.1, ease:Back.easeIn},0.1);
        $('.btn2').css({"opacity":1});
    })
    
     $("#btnclk2 ").click(function(){
      TweenMax.staggerTo(".btn",0.7,{scale:0.9, opacity:1, y:50,delay:0.3, ease:Elastic.easeOut},0.2);
         $('.btn2').css({"opacity":0});
        
    })
     
     
    
   
    
    
var y = $('#container');
    
    var tween4,arr;
    
    
    function high_chart(){
        tween4 = $('#container').highcharts({
    chart:{
        type: 'column',
        margin: 150,
        options3d:{
            enabled: true,
            alpha: 10,
            beta: 25,
            depth: 70,
            viewDistance: 25
        }
    },
    title:{
        text: 'Joggers Poll'
    },
    subtitle:{
        text:''
    },
    plotOptions:{
        column:{
            depth: 25
        }
    },
     xAxis: {
            categories:['For Fun','To Take Pets Out','To Make New Friends','To See Girls/Boys','To Stay Healthy','I Do Not Know']
        },
    yAxis: {
        title: {
            text: null
        }
    },
    series: [{
        name: "Number of Votes",
            data: [op1,op2,op3,op4,op5,op6]
        }]
    
    
}) 
    
var tween5= TweenMax.fromTo(tween4, 4, {scale:0, opacity:0.2, ease:Bounce.easeIn},{scale:1.5, opacity:1, ease:Bounce.easeOut});
var scene4= new ScrollMagic.Scene({triggerElement:'#container',offset:0.1})
.setTween(tween5)    
.addTo(Controller);
    };
    
    $.post('ajax/like_get_option1.php' , function(data){
        op1= parseInt(data);
        $.post('ajax/like_get_option2.php' , function(data){op2= parseInt(data);
            $.post('ajax/like_get_option3.php' , function(data){op3= parseInt(data);
            $.post('ajax/like_get_option4.php' , function(data){op4=parseInt(data);
            $.post('ajax/like_get_option5.php' , function(data){op5= parseInt(data);
            $.post('ajax/like_get_option6.php' , function(data){op6= parseInt(data);
            high_chart() ;
            })       
            })                                                                                                                                
            })
            })
            })
            });
    
    
    
var tween9= TweenMax.staggerTo(".shoe1", 1, {scale:0.9, opacity:1, delay:0.5,y:-240,ease:Elastic.easeOut}, 0.2);
var scene7= new ScrollMagic.Scene({triggerElement:'.top',offset:1})
.setTween(tween9)
.addTo(Controller);
    
    
var tween7= TweenLite.fromTo(".board", 1, { scale:0.5, opacity:1, ease: Circ.easeOut },{scale:1, opacity:1, ease: Circ.easeIn });    
    
var scene5= new ScrollMagic.Scene({triggerElement:'.top',offset:0.1})
.setTween(tween7)
.addTo(Controller);
    
    var tween8= TweenLite.fromTo(".tree", 1, { scale:0.5, opacity:1, ease: Elastic.easeOut.config(1, 0.3)},{scale:1, opacity:1, ease: Elastic.easeIn.config(1.5, 0.5) });
    
    var scene6= new ScrollMagic.Scene({triggerElement:'.top',offset:1})
.setTween(tween8)
.addTo(Controller);
    
    
    
TweenLite.fromTo(".info", 2.5, { scale:0, opacity:0, ease: Circ.easeOut, y: -300 },{scale:1, opacity:1, ease: Circ.easeIn });

    
    var quotes= document.getElementById("quotes"), count=0;
    
var tween11= TweenMax.staggerTo(".last", 1.5, {scale:0.5, rotation:10, repeat:500,yoyo:true,opacity:1, delay:0.5,y:40,ease:Elastic.easeOut, onRepeat:onRepeat}, 0.3);
var scene11= new ScrollMagic.Scene({triggerElement:'.super',offset:0.5})
.setTween(tween11)
.addTo(Controller);
    
    function onRepeat(){count++;
                        if(count==12)
                        { quotes.innerHTML="One Run Can Change Your Day. Many Runs Can Change Your Life"; 
                         $("#quotes").css("color","red");
                        
                        }
                        if(count==36)
                        { quotes.innerHTML="Run Often Run Long. But Never Outrun Your Joy Of Running";
                        $("#quotes").css("color","#6697ff");}
                        if(count==60)
                           { quotes.innerHTML="Run While You Can";  
                           $("#quotes").css("color","#cccc00");
                           }
                        if(count==84)
                           { quotes.innerHTML="A Good Laugh And A Long Run Are The Two Best Cures For Anything";
                       $("#quotes").css("color","#00e5e6"); }
                        
                         if(count==108)
                           { quotes.innerHTML="Liked my website? Click the Thumbs Up button";
                       $("#quotes").css("color","#59b300"); count=0;}
                        
    }
    
    
    
    
     $("#thumbs_up").mouseenter(function(){
         
         $(this).css('cursor', 'pointer');
        
         $("#number").css("opacity","1");
         
         $.post('ajax/like_get.php' , function(data){
            
       $("#number").text(data);
            
        });
                 
    }).mouseleave(function(){
          $("#number").css("opacity","0");
      })
    
    
     
     
    
  //clockpicker
     
     $('.clockpicker').clockpicker();
    
    
    
    $(".phone").change(function(){
        $("#line").css("opacity","1");
    });
    
    $(".email").change(function(){
        $("#line").css("opacity","0");
    })
  
    
    // form submit
    
   
   
    
    $('#submit').click( function(e){
         var phone1 = $('.phone').val();
       var email1 = $('.email').val();
        
        var isValid = true;
            $('.name,.place,.time,.email,.phone').each(function () {
                if ($.trim($(this).val()) == '') {
                    isValid = false;
                    $(this).css({
                        "border": "1px solid red",
                        "background": "#FFCECE"
                    });
                }
                else {
                    isValid= true;
                    $(this).css({
                        "border": "",
                        "background": ""
                    });
                
                
                }
            });
        
         if($.trim($(".phone").val())==''){
                        if($.trim($(".email").val())==''){
                            $(".msg_alert_fail").css("opacity","1");
                        isValid = false;
                            e.preventDefault()
                        }
                    }
        
                
           if (isValid == true){     
               $(".msg_alert_fail").css("opacity","0");
        e.preventDefault() //this prevents the form from submitting normally, but still allows the click to 'bubble up'.
       $(".waiting_circle").css("opacity","1");
       //lets get our values from the form....
        $(".msg_alert_success").css("opacity","0");
        
       var name1 = $('.name').val();
        var phone1 = $('.phone').val();
       var email1 = $('.email').val();
       var place1 = $('.place').val();
     var time1 = $('.time').val();
               
       //now lets make our ajax call
        $.post('mail.php',{name:name1, phone:phone1, email:email1, place:place1, time:time1}, function(data){
           
            
            if (data='success'){
                $(".waiting_circle").css("opacity","0");
            tween20 = $(".msg_alert_success").css("opacity","1");
                TweenLite.fromTo(tween20, 30, { ease:Bounce.easeIn, scale:1}, { ease:Bounce.easeOut,opacity:0 ,scale:0});
                }
            else{
                 var tween21 = $(".msg_alert_fail").css("opacity","1");
                TweenLite.fromTo(tween21, 30, { ease:Bounce.easeIn, scale:1}, { ease:Bounce.easeOut,opacity:0 ,scale:0});
            }
        });
               
           }
         } ); 
    
    
    
    
//new stuff
     
 $(".radio_outside").click( function(){
     $('.phone').prop('disabled', true);
   
})
                              

$(".radio_usa").click(function(){
    $('.phone').prop('disabled',false);
    
})  


     
                                                                     //new stuff
     $(".scroller").mouseenter(function(){
         $(this).css('cursor','pointer');
     })




   
    
});


