
			$(function(){
				var index = 0;
        	   setInterval(move,3000);
        	   function move(){
        	   	index++;
        	   	if(index==$("#banner #box .pic li").length){
        	   		index=0;
        	   	}
        	   	$(".pic li").eq(index).fadeIn(300).siblings().fadeOut(300);
        	   	$(".nav li").eq(index).addClass("active").siblings().removeClass("active");
        	   }
        	  
        	 


			})
