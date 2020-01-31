$(document).ready(function(){
   

    // custom Functions

    //Logo 
    var logo  = $('#logo');
    console.dir(logo);
    
    // show logo 
    if(location.href.indexOf('#') != -1){
        logo.show();
    }

    //show logo
    $('.menu .tabs a').click(function(){
          logo.fadeIn('slow');
    });

    // Hide logo 
    $('.tab-profile').click(function(){
       logo.fadeOut('slow');
    });

    $("#yellow-color").click(function(e){
         $(".main-wrapper-resume").attr("id","yellow")
    });

    $("#yellow-color").click(function(e){
        $(".main-wrapper-resume").attr("id","yellow");
        // console.log($(".main-wrapper-resume").attr("id","yellow"));
   });

   $("#blue-color").click(function(e){
       $(".main-wrapper-resume").attr("id","blue");
    });

   $("#red-color").click(function(e){
        $(".main-wrapper-resume").attr("id","red");
    });

    $("#green-color").click(function(e){
        $(".main-wrapper-resume").attr("id","green");
    });

    $("#setting-icon").click(function(){
         $(".color-box").toggleClass('main');
    });


    let content = $("#content");

    content.easytabs({
         animate        : true,
         updateHash     : false,
         transitionIn   : 'slideDown',
         transitionOut  : 'slideUp',
         animationSpeed : 600,
         tabs           : ".tmenu",
         tabActiveClass : "active"
    });
    
    //Hover menu effect
    content.find('.tabs li a').hover(
        function(){
            $(this).stop().animate({marginTop: "-7px"},200);
        },
        function(){
            $(this).stop().animate({marginTop:"0px"},300);
        }
    );


  //show and hide button 
   $("#setting-icon").click(function(){
        let buttons = document.querySelectorAll(".color-box button");
        buttons.forEach((e,index)=>{
             if(e.classList.contains('button_show'))
             {
                e.classList.remove('button_show');
             }
             else{
                e.classList.add('button_show');
             }
        });
   });

});