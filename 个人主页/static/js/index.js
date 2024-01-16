/*页面第一次加载时根据时间确定主题*/
window.onload = init;
var flag;
/*主题随时间*/
function time(){
    let data = new Date();
    let hour = data.getHours();
    let theme = document.getElementById('theme')
    /*太阳或月亮的图标*/
    let img = document.getElementsByClassName('change')[0];
    let work = document.getElementById('work');
    /*6点到18点为日间模式*/
    if (6<=Number(hour)&&Number(hour)<18){
        /*light模式*/
        img.id = "sun";
        img.src = "static/img/sun.png";
        work.src = "static/img/work_light.svg"
        theme.href = "static/css/light.css";
    }
    else {
        /*dark模式*/
        img.id = "moon";
        img.src = "static/img/moon.png";
        work.src = "static/img/work_dark.svg"
        theme.href = "static/css/dark.css";
    }
}
function init(){
    time();
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    let equipment = document.getElementById('equipment')
    if (width<height){
        equipment.href = 'static/css/mobile.css';
        flag = 1;
    }
    else {
        equipment.href = 'static/css/web.css';
        flag = 0;
    }
}
/*主题切换*/
function theme(){
    let theme = document.getElementById('theme');
    let work = document.getElementById('work');

    /*切换到dark模式*/
    if (document.getElementById("sun")){
        let sun = document.getElementById("sun");
        sun.id = "moon";
        sun.src = "static/img/moon.png";
        theme.href = "static/css/dark.css";
        work.src = "static/img/work_dark.svg"

    }
    /*切换到light模式*/
    else if (document.getElementById("moon")){
        let moon = document.getElementById("moon");
        moon.id = "sun";
        moon.src = "static/img/sun.png";
        theme.href = "static/css/light.css";
        work.src = "static/img/work_light.svg"
    }
    else {}
}

/*窗口适应*/
let c = () =>{
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    let equipment = document.getElementById('equipment')
    if (width<height){
        equipment.href = 'static/css/mobile.css';
        if (flag === 1){
            animation_index();
            dish();
            flag = 0;
        }
            }
    else {
        equipment.href = 'static/css/web.css';
        if (flag === 0){
            animation_index();
            dish();
            flag = 1;
        }
    }
    adapt(width, height);
}
window.addEventListener("load", c);
window.addEventListener("resize", c);

function adapt(w, h) {
    let html = document.documentElement;
    html.style.fontSize = ((w*h)/20000)**0.5 + 'px';
}
/*动作*/
function animation_index(){
    let anim = document.getElementById('animation');
    anim.href = ''
    let scroll = document.getElementById('scroll')
    scroll.style.transform = 'rotateY(0deg) rotateX(0deg)';
}
function animation_unwind(){
    let anim = document.getElementById('animation');
    anim.href = 'static/css/animation.css'
}