const t1 = document.getElementById('t1')
const t2 = document.getElementById('t2')
const t3 = document.getElementById('t3')
const audio = document.getElementById('audio1')
window.onload = () => {
    setTimeout(() => {
        t1.style.visibility = 'visible'
        t1.style.transition = 'all .6s linear'
    }, 1000)
    setTimeout(() => {
        t2.style.visibility = 'visible'
        t2.style.transition = 'all .6s linear'
    }, 1800)
    setTimeout(() => {
        t3.style.visibility = 'visible'
        t3.style.transition = 'all .6s linear'
    }, 2600)
    audio.defaultMuted = true
    console.log(audio)
}

const content1 = document.getElementById('content1')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
content1.onclick = () => {
    setTimeout(changStyle, 2000)
}

const index = 1
changStyle = () =>{
    p1.style.visibility = 'visible'
    p1.style.opacity = 1
    p1.style.transition = 'all 1s linear'
    setTimeout(change, 2000)
}

change = () => {
    p2.style.visibility = 'visible'
    p2.style.visibility = 'visible'
    p2.style.opacity = 1
    p2.style.transition = 'opacity 1s linear'
}

const content2 = document.getElementById('content2')
const TP1 = document.getElementById('third-p1')
const TP2 = document.getElementById('third-p2')

content2.onclick = () => {
    setTimeout(() => {
        TP1.style.opacity = 1
        TP1.style.transition = 'all 2s linear'
        setTimeout(TPShow, 2000)
    }, 1500)
}
TPShow = () => {
    TP2.style.opacity = 1
    TP2.style.transition = 'all 2s linear'
}

const content3 = document.getElementById('content3')
const FP1 = document.getElementById('fivth-p1')
const FP2 = document.getElementById('fivth-p2')

content3.onclick = () => {
    setTimeout(() => {
        FP1.style.opacity = 1
        FP1.style.transition = 'all 2s linear'
        setTimeout(FPShow, 2000)
    }, 1500)
}

FPShow = () => {
    FP2.style.opacity = 1
    FP2.style.transition = 'all 2s linear'
}


const content5 = document.getElementById('content5')
const SP1 = document.getElementById('sixth-p1')
const SP2 = document.getElementById('sixth-p2')

content5.onclick = () => {
    setTimeout(() => {
        SP1.style.opacity = 1
        SP1.style.transition = 'all 2s linear'
        setTimeout(SPShow, 2000)
    }, 1500)
}

SPShow = () => {
    SP2.style.opacity = 1
    SP2.style.transition = 'all 2s linear'
}

const content6 = document.getElementById('content6')
const SEP1 = document.getElementById('seven-p1')
const SEP2 = document.getElementById('seven-p2')

content6.onclick = () => {
    setTimeout(() => {
        SEP1.style.opacity = 1
        SEP1.style.transition = 'all 2s linear'
        setTimeout(SEPShow, 2000)
    }, 1500)
}

SEPShow = () => {
    SEP2.style.opacity = 1
    SEP2.style.transition = 'all 2s linear'
}

const content7 = document.getElementById('content7')
const EP1 = document.getElementById('eight-p1')

content7.onclick = () => {
    setTimeout(() => {
        EP1.style.opacity = 1
        EP1.style.transition = 'all 2s linear'
    }, 1800)
}

const content8 = document.getElementById('content8')
const NP1 = document.getElementById('nine-p1')

content8.onclick = () => {
    setTimeout(() => {
        NP1.style.opacity = 1
        NP1.style.transition = 'all 2s linear'
    }, 1800)
}

const b = document.getElementById('content9')
const CNSPAN = document.getElementById('CNSPAN')
b.onclick = () => {
    setTimeout(() => {
        CNSPAN.style.display = 'block'
        CNSPAN.className = 'active'
    }, 1300)
}