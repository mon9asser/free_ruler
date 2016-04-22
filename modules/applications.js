/*

var blueprint_background = new Image();
blueprint_background.src = 'images/blueprint_background.png'; 
blueprint_background.onload = function(){
    var pattern = context.createPattern(this, "repeat");
    context.fillStyle = pattern;
    context.fill();
};

*/


$(document).ready(function (){
  var background = new Image();   
    window.check_screen_resolutions = function (currentWidth ,currentHeight  )
        {
            var screen_height = currentHeight ; 
            var screen_width = currentWidth ;
             
            // allow some padding and margin from left and Right 
            var screen_width_with_margin_for_two_side = screen_width - 20 ;
            var ruler_canvas = document.getElementById('basic_ruler');
             ruler_canvas.setAttribute('width' , screen_width_with_margin_for_two_side);
            
        }
        
        
        
  
    window.createModule = function (free_width , free_height,srcD,module){
        
        check_screen_resolutions (free_width , free_height);
        var rulerContainer =  document.getElementsByClassName('ruler_container')[0];
        
        /************************************************************/
               /*****************    Canvas Options    *********************/
               /************************************************************/
               // canvas Size 
               var canvasWidth = $('canvas').width() ;
               var canvasHieght = $('canvas').height() ;
                // Start Dimensional (x , y)
                var fixedx = 0 ;
                var fixedY = 0; 
                var centimetre_from_pixel = 37.8 ; // PX
                var mile_from_pixel =   centimetre_from_pixel / 10   ;
                var inches_from_pixel = 96; // PX
                var inches_from_centimetre =   2.54 ; // CM
                
                
                
                //converting width from pixel to centimetre 
                var ruler_width_by_centimetre = parseInt( canvasWidth / centimetre_from_pixel);
               // alert(ruler_width_by_centimetre);
               // size of ruler and adjust this width to the parent Element
               rulerContainer.style.width = canvasWidth +'px';
               rulerContainer.style.height = canvasHieght +'px'; 
               
               
               
                var ruler = document.getElementById('basic_ruler');
                var contextRuler = ruler.getContext('2d');
                
                
          
                  background.src = "images/"+srcD ;
                  
              
                 for (var i=0; i< ruler_width_by_centimetre ; i++){ 
                 
                 contextRuler.drawImage(background,0,0,(i * centimetre_from_pixel   *2 ),130); 
                }
                
                 
                 
               // $('#basic_ruler').css("background-image", "url(http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg)"); 
                    
                    
              
                
                
                /*start from here*/
                contextRuler.beginPath();
                    contextRuler.lineWidth = .6;
                 
                 
                 if(module == 0 ){
                     for (var i=0; i< ruler_width_by_centimetre ; i++){
                         if(   i != 0 )
                            {
                                // Per Centimetre
                                contextRuler.moveTo(i * centimetre_from_pixel  , 10);
                                contextRuler.lineTo(i * centimetre_from_pixel   , 60);
                                  //alert(i * centimetre_from_pixel);
                                  
                                 contextRuler.font="15px tahoma"; 
                              contextRuler.fillText(i-1, i * centimetre_from_pixel -5  , 78); 
                              
                            }  
                         }   
                        
                        for (var cmhalf=0; cmhalf< ruler_width_by_centimetre *2 ; cmhalf++){
                         if(   cmhalf != 0  && cmhalf != (ruler_width_by_centimetre *2 )   )
                            {
                                // Per Centimetre
                                contextRuler.moveTo((cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2)   , 10);
                                contextRuler.lineTo((cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2)   , 45);
                                  //alert(i * centimetre_from_pixel);
                                  contextRuler.font="8px tahoma";
                                   contextRuler.fillText("1/2", (cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2) -6  , 55); 
                             }
                           
                         if(cmhalf == i-2 )
                             break ;
                    }
                    for(var mle=0; mle< ((ruler_width_by_centimetre - 2) * 10 ) ; mle++){
                            if((mle / 10) != parseInt(mle / 10) && ((mle / 10) + 0.5) !=  parseInt((mle / 10)+0.5) )
                               {
                          contextRuler.moveTo(mle   * mile_from_pixel  +38   , 10);
                          contextRuler.lineTo(mle  * mile_from_pixel   +38, 30 );
                               }
                     }
                     
                     
                     
                       contextRuler.font="15px arial"; 
                         contextRuler.fillText("Freeruler.com", (canvasWidth/2) , 105); 
                    
              }else if(module == 1) {
                        for (var i=0; i< ruler_width_by_centimetre ; i++){



                               if(   i != 0 )
                                   {
                                       // Per Centimetre
                                       contextRuler.moveTo(i * centimetre_from_pixel  , 30);
                                       contextRuler.lineTo(i * centimetre_from_pixel   , 90);
                                         //alert(i * centimetre_from_pixel);

                                        contextRuler.font="12px tahoma"; 
                                        contextRuler.strokeStyle = '#333';
                                      contextRuler.fillText(i-1, i * centimetre_from_pixel -5  , 106); 
                                      contextRuler.fillText(i-1, i * centimetre_from_pixel -5  , 25); 
                                   }  




                           }




                          for (var cmhalf=0; cmhalf< ruler_width_by_centimetre *2 ; cmhalf++){



                               if(   cmhalf != 0  && cmhalf != (ruler_width_by_centimetre *2 )   )
                                   {
                                       // Per Centimetre
                                       contextRuler.moveTo((cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2)   , 45);
                                       contextRuler.lineTo((cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2)   , 75);
                                         //alert(i * centimetre_from_pixel);
                                         contextRuler.font="8px tahoma";
                                        contextRuler.fillText("1/2", (cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2) -6  , 40); 
                                         contextRuler.fillText("1/2", (cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2) -6  , 85); 


                                   }
                                if(cmhalf == i-2 )
                                    break ;
                           }


                           /*

                           for (var i=0; i< ruler_width_by_centimetre * 2 ; i++){
                               if(i != 1 && i != ((ruler_width_by_centimetre * 2)-1  ) ){
                                   contextRuler.moveTo((i * centimetre_from_pixel / 2 ) , 10);
                                contextRuler.lineTo((i * centimetre_from_pixel / 2 )   , 40);   
                               }

                           }

                       */

                          for(var mle=0; mle< ((ruler_width_by_centimetre - 2) * 10 ) ; mle++){


                                      if((mle / 10) != parseInt(mle / 10) && ((mle / 10) + 0.5) !=  parseInt((mle / 10)+0.5) )
                                      {
                                         contextRuler.moveTo(mle   * mile_from_pixel  +38   , 50);
                                       contextRuler.lineTo(mle  * mile_from_pixel   +38, 70 );

                                      }



                           }
                           
                           
                             contextRuler.font="15px arial"; 
                         contextRuler.rotate(Math.PI/2);
                        contextRuler.fillText("Freeruler.com", 20 , -15); 
                        
                        
              }else if (module == 2){
                     for (var i=0; i< ruler_width_by_centimetre ; i++){
                         if(   i != 0 )
                            {
                                // Per Centimetre
                                contextRuler.moveTo(i * centimetre_from_pixel  , 0);
                                contextRuler.lineTo(i * centimetre_from_pixel   , 40);
                                
                                
                                contextRuler.moveTo(i * centimetre_from_pixel  , 80);
                                contextRuler.lineTo(i * centimetre_from_pixel   , 120);
                                
                                  //alert(i * centimetre_from_pixel);
                                  
                                 contextRuler.font="15px tahoma"; 
                              contextRuler.fillText(i-1, i * centimetre_from_pixel -5  , 65); 
                              
                              
                              
                              
                            }  
                         }   
                       
                        
                        
                        
                        for (var cmhalf=0; cmhalf< ruler_width_by_centimetre *2 ; cmhalf++){
                         if(   cmhalf != 0  && cmhalf != (ruler_width_by_centimetre *2 )   )
                            {
                                // Per Centimetre
                                contextRuler.moveTo((cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2)   , 0);
                                contextRuler.lineTo((cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2)   , 35);
                                
                                 contextRuler.moveTo((cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2)   , 85);
                                contextRuler.lineTo((cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2)   , 120);
                                  //alert(i * centimetre_from_pixel);
                                 contextRuler.font="8px tahoma";
                                 contextRuler.fillText("1/2", (cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2) -6  , 45);
                                 
                                  contextRuler.fillText("1/2", (cmhalf * (centimetre_from_pixel ))+ (centimetre_from_pixel/2) -6  , 75);
                             }
                           
                         if(cmhalf == i-2 )
                             break ;
                    }
                    for(var mle=0; mle< ((ruler_width_by_centimetre - 2) * 10 ) ; mle++){
                            if((mle / 10) != parseInt(mle / 10) && ((mle / 10) + 0.5) !=  parseInt((mle / 10)+0.5) )
                               {
                          contextRuler.moveTo(mle   * mile_from_pixel  +38   , 0);
                          contextRuler.lineTo(mle  * mile_from_pixel   +38, 20 );
                          
                          
                          contextRuler.moveTo(mle   * mile_from_pixel  +38   , 100);
                          contextRuler.lineTo(mle  * mile_from_pixel   +38, 120 );
                               }
                     }
                     
                     
                       contextRuler.font="15px arial"; 
                         contextRuler.rotate(Math.PI/2);
                        contextRuler.fillText("Freeruler.com", 20 , -15); 
              }
              
              
              
                
                        
                /*end here*/
                contextRuler.stroke();
                
               
                
              
                
    }
    
    
});

