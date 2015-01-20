$(".scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
              console.log("hello");
         }else{
              dest=$(this.hash).offset().top;
              console.log("world");
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
         console.log("hello world");
     })