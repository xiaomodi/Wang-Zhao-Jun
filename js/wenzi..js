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
const SevenImg = document.getElementById('seven-Img')
const SEP1 = document.getElementById('seven-p1')
const SEP2 = document.getElementById('seven-p2')

content6.onclick = () => {
    SevenImg.className = 'seven-pic active7'
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
const NP = document.getElementById('nine-pic')

content8.onclick = () => {
    setTimeout(() => {
        NP.className = 'nine-pic active9'
        setTimeout(() => {
            NP1.style.opacity = 1
            NP1.style.transition = 'all 2s linear'
        }, 2000)
    }, 1200)
}

const b = document.getElementById('content9')
const CNSPAN = document.getElementById('CNSPAN')
b.onclick = () => {
    setTimeout(() => {
        CNSPAN.style.display = 'block'
        CNSPAN.className = 'active'
    }, 1300)
}
// 场景十二
const ten = document.getElementById('contentNine')
const TenP1 = document.getElementById('ten-p1')
const TenP2 = document.getElementById('ten-p2')
ten.onclick = () => {
    TenP1.style.opacity = 1
    TenP1.style.transition = 'all 2s linear'
    setTimeout(() => {
        TenP2.style.opacity = 1
        TenP2.style.transition = 'all 2s linear'
    }, 2000)
}
// 场景十三
const eleven = document.getElementById('content10')
const ELP1 = document.getElementById('EP1')
const ELP2 = document.getElementById('EP2')
eleven.onclick = () => {
    setTimeout(() => {
        ELP1.style.opacity = 1
        ELP1.style.transition = 'all 2s linear'
        setTimeout(() => {
            ELP2.style.opacity = 1
            ELP2.style.transition = 'all 2s linear'
        }, 1000)
    },1000)
}
// 场景十四
const tweleve = document.getElementById('content11')
const TWP1 = document.getElementById('TWP1')
tweleve.onclick = () => {
    setTimeout(() => {
        TWP1.style.opacity = 1
        TWP1.style.transition = 'all 2s linear'
    }, 1000);
}
// 场景十五
const fourteen = document.getElementById('content12')
const FTP1 = document.getElementById('FTP1')
const FTP2 = document.getElementById('FTP2')
fourteen.onclick = () => {
    setTimeout(() => {
        FTP1.style.opacity = 1
        FTP1.style.transition = 'all 2s linear'
        setTimeout(() => {
            FTP2.style.opacity = 1
            FTP2.style.transition = 'all 2s linear'
        }, 1000)
    }, 1000)
}
// 场景十六
const fivteen = document.getElementById('content13')
const FIT1 = document.getElementById('FIT1')
const FIT2 = document.getElementById('FIT2')
fivteen.onclick = () => {
    setTimeout(() => {
        FIT1.style.opacity = 1
        FIT1.style.transition = 'all 2s linear'
        setTimeout(() => {
            FIT2.style.opacity = 1
            FIT2.style.transition = 'all 2s linear'
        },1000)
    }, 1000)
}
// 场景十七
const sixteen = document.getElementById('content14')
const SIT1 = document.getElementById('SIT1')
const SIT2 = document.getElementById('SIT2')
sixteen.onclick = () => {
    setTimeout(() => {
        SIT1.style.opacity = 1
        SIT1.style.transition = 'all 2s linear'
        setTimeout(() => {
            SIT2.style.opacity = 1
            SIT2.style.transition = 'all 2s linear'
        },1000)
    }, 1000)
}
// 场景十八
const seventeen = document.getElementById('content15')
const SCNSPAN = document.getElementById('SCNSPAN')
seventeen.onclick = () => {
    setTimeout(() => {
        SCNSPAN.style.display = 'block'
        SCNSPAN.className = 'active'
    }, 1000)
}

// 场景十九
const eighteen = document.getElementById('content16')
const EIP1 = document.getElementById('EIP1')
const EIP2 = document.getElementById('EIP2')
const EIP3 = document.getElementById('EIP3')
eighteen.onclick = () => {
    setTimeout(() => {
        EIP1.style.opacity = 1
        EIP1.style.transition = 'all 2s linear'
        setTimeout(() => {
            EIP2.style.opacity = 1
            EIP2.style.transition = 'all 2s linear'
            setTimeout(() => {
                EIP3.style.opacity = 1
                EIP3.style.transition = 'all 2s linear'
            }, 1000)
        }, 1000)
    }, 1000)
}
