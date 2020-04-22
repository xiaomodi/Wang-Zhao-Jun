const t1 = document.getElementById('t1')
const t2 = document.getElementById('t2')
const t3 = document.getElementById('t3')
window.onload = () => {
    setTimeout(() => {
        t1.style.opacity = 1
        t1.style.transition = 'all .6s linear'
    }, 1000)
    setTimeout(() => {
        t2.style.opacity = 1
        t2.style.transition = 'all .6s linear'
    }, 1800)
    setTimeout(() => {
        t3.style.opacity = 1
        t3.style.transition = 'all .6s linear'
    }, 2600)
}

// showT2 = () => {
//     t2.style.opacity = 1
//     t2.style.transition = 'all .6s linear'
//     setTimeout(showT3, 800)
// }

const content1 = document.getElementById('content1')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
content1.onclick = () => {
    setTimeout(changStyle, 1000)
}

const index = 1
changStyle = () =>{
    p1.style.visibility = 'visible'
    p1.style.opacity = 1
    p1.style.transition = 'opacity 1s linear'
    setTimeout(change, 1500)
}

change = () => {
    p2.style.visibility = 'visible'
    p2.style.visibility = 'visible'
    p2.style.opacity = 1
    p2.style.transition = 'opacity 1s linear'
}