(function() {
    var win = window;
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;
  
    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        var height = docEl.getBoundingClientRect().height;
        // 横屏以高度来适配
        if (width > height) {
          width = height;
        } 
        var rem = width / (750 / 50);
        docEl.style.fontSize = rem + 'px';
    }
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    win.addEventListener(evt, function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);
  
    refreshRem();
  }());