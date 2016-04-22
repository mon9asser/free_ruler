$(document).ready(function (){
    
    
    
    
    window.increaseFreePosition = function (data){
          var targetPosition = data.value ;
         //'90deg'
         $('.ruler_container').css('-ms-transform' ,'rotate('+targetPosition+'deg)');
         $('.ruler_container').css('-webkit-transform','rotate('+targetPosition+'deg)');
         $('.ruler_container').css('transform','rotate('+targetPosition+'deg)');
     }
   window.locateThisRuler = function (data){
      var targetPosition = data.value ;
        $('.ruler_container').animate({
        left : targetPosition
     },200);
    
  }
  window.rulerDimensional = function (data){
     var targetPosition = data.value ; 
     var canvasRuler = $('#basic_ruler');
    
  createModule(targetPosition, '200' ,canvasRuler.attr('data-style') ,canvasRuler.attr('data-module')) ;
     $('#basic_ruler').attr('data-dimensional',targetPosition);
 }
 window.change_module = function (data){
     var moduleType = data.getAttribute('module-data');
      var canvasRuler = $('#basic_ruler');
      createModule(canvasRuler.attr('data-dimensional'), '200' ,canvasRuler.attr('data-style') ,moduleType ) ;
     $('#basic_ruler').attr('data-module',moduleType);
 }
 
 
 
 $('.Modules').click(function (){
       $('.v-module').slideToggle();
 });
 
 
    
  
   // $('.free-position').
    
    
    
    
    
    $('#mobile-navebar li').click(function (){
       $('.screen-dimens , .styles-menubar ,.moving-menubar , .module-menubar').fadeOut();
       var $targetElement = $(this).attr('data-get');
       $('.'+$targetElement).slideToggle();
    });
    
    $('.screen-dimens , .styles-menubar ,.moving-menubar , .module-menubar').click(function(){
        $(this).slideToggle();
    });
    
    
    
    
    
    //top_options
    $('.screen_dimen').click(function (){
        $('.top_options').slideToggle();
    });
    
    $('.ver-sions').click(function (){
        $('.v-rsit').slideToggle();
    });
    
    
    
    
    
    
    
    
    
    
    $('.options').click(function (){
        $('.options-data').slideToggle();
    });
    
    
    $("#menu-top li a").click(function (){
        $("#menu-top li a").css('background','teal');
        $(this).css('background','#000');
    });
    
     $('[data-toggle="tooltip"]').tooltip({
         html:true ,
         trigger:'hover focus'
         //,delay: { "show": 500, "hide": 500 }
     });
     
     
     $('#myTooltip').on('hidden.bs.tooltip', function () {
            // do something…
        //$(this).popover();
     })
});