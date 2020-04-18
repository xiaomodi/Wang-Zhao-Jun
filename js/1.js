function changeOrientation($content) {  
    var width = document.documentElement.clientWidth;
    var height =  document.documentElement.clientHeight;
    if(width < height) {
        $content.width(height);
        $content.height(width);
        $content.css('top',  (height - width) / 2 );
        $content.css('left',  0-(height - width) / 2 );
        // $content.css('top', 0);
        // $content.css('left', 0);
        $content.css('transform', 'rotate(90deg)');
        $content.css('transform-origin', '50% 50%');
    } 
   
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
        
      window.addEventListener(evt, function() {
  
          setTimeout(function() {
              var width = document.documentElement.clientWidth;
              var height =  document.documentElement.clientHeight;
  
              if( width > height ){
                  $content.width(width);
                  $content.height(height);
                  $content.css('top',  0 );
                  $content.css('left',  0 );
                  $content.css('transform' , 'none');
                  $content.css('transform-origin' , '50% 50%');
               }
               else {
                  $content.width(height);
                  $content.height(width);
                  $content.css('top',  (height - width) / 2 );
                  $content.css('left',  0-(height - width) / 2 );
                  $content.css('transform' , 'rotate(90deg)');
                  $content.css('transform-origin' , '50% 50%');
               }
          }, 300);	
      }, false);
  }
  
  changeOrientation($('.content'));
