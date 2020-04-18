var width = document.documentElement.clientWidth
var height = document.documentElement.clientHeight
var _content = document.getElementById('content')
// console.log(width, height)
function changeOrientation (_content) {
    var width = document.documentElement.clientWidth;
    var height =  document.documentElement.clientHeight;
    if(width < height) {
        _content.width(height);
        _content.height(width);
        _content.css('top',  (height - width) / 2 );
        _content.css('left',  0-(height - width) / 2 );
        // _content.css('top', 0);
        // _content.css('left', 0);
        _content.css('transform', 'rotate(90deg)');
        _content.css('transform-origin', '50% 50%');
    } 
    var evt ="onorientationchange" in window ? "orientationchange" : "resize"
    console.log(evt)
    window.addEventListener(evt, function() {
        var width = document.documentElement.clientWidth
        var height = document.documentElement.clientHeight
        setTimeout(function () {
            if( width > height ){
                var w = _content.clientWidth
                var h = _content.clientHeight
                h = height
                w = width
                console.log(w, h)
                _content.style.top = 0
                _content.style.left = 0
                _content.style.transform = 'none'
                _content.style.transform-origin == '50%, 50%'
            }
            else {
                var w = _content.clientWidth
                var h = _content.clientHeight
                w = this.height
                h = this.width
                console.log(w, h)
                _content.css('top',  (height - width) / 2 );
                _content.css('left',  0-(height - width) / 2 );
                _content.style.transform = 'rotate(90deg)'
                _content.style.transform-origin == '50%, 50%'
            }
        }, 300)
    }, false)
}

changeOrientation(_content)