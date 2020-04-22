const text1 = '时光一晃而过，昭君逐渐长成';

console.log(text1.split(''));
const item = text1.split('');
item.forEach(i => {
    console.log(i)
});

const descWrapper = document.getElementById('desc-wrapper')

descWrapper.onclick = () => {
    showDiv()
}
var p1 = document.getElementById('desc1-p')
function showDiv () {
    n++;
    if (n <= 2) {
        p1.style.visibility = 'visible'
        setTimeout('showDiv', 1000)
    }   
}
