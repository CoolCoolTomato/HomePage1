/*3^0.5/2 = 0.866*/

function anchor(it){
    let ds = document.getElementsByClassName('d');
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let scroll = document.getElementById('scroll')
    if (width > height) {
        if (it.textContent === '简介') {
            scroll.style.transform = 'translateX(0)';
            ds[0].style.transform = 'rotateZ(0)'
            ds[1].style.transform = 'rotateZ(90deg)'
            ds[2].style.transform = 'rotateZ(90deg)'
            animation_unwind();
        }
        else if (it.textContent === '文章') {
            scroll.style.transform = 'translateX(-100%)';
            ds[0].style.transform = 'rotateZ(90deg)'
            ds[1].style.transform = 'rotateZ(0)'
            ds[2].style.transform = 'rotateZ(90deg)'
            animation_unwind();
        }
        else if (it.textContent === '作品') {
            scroll.style.transform = 'translateX(-200%)';
            ds[0].style.transform = 'rotateZ(90deg)'
            ds[1].style.transform = 'rotateZ(90deg)'
            ds[2].style.transform = 'rotateZ(0)'
            animation_unwind();
        }
        else {
            animation_index();
        }
    }
    else {
        if (it.textContent === '简介') {
            scroll.style.transform = 'translateY(0)';
            ds[0].style.transform = 'rotateZ(0)'
            ds[1].style.transform = 'rotateZ(90deg)'
            ds[2].style.transform = 'rotateZ(90deg)'
            animation_unwind();
        }
        else if (it.textContent === '文章') {
            scroll.style.transform = 'translateY(-100%)';
            ds[0].style.transform = 'rotateZ(90deg)'
            ds[1].style.transform = 'rotateZ(0)'
            ds[2].style.transform = 'rotateZ(90deg)'
            animation_unwind();
        }
        else if (it.textContent === '作品') {
            scroll.style.transform = 'translateY(-200%)';
            ds[0].style.transform = 'rotateZ(90deg)'
            ds[1].style.transform = 'rotateZ(90deg)'
            ds[2].style.transform = 'rotateZ(0)'
            animation_unwind();
        }
        else {
            animation_index();
        }
    }
}

function dish(){
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let dish = document.getElementById('dish');
    let trans = dish.style.transform;
    if (width > height) {
        if (trans === 'translateX(50%) translateY(-45%) rotateZ(0)') {
            dish.style.transform = 'translateX(50%) translateY(-45%) rotateZ(-30deg)'
        } else if (trans === 'translateX(50%) translateY(-45%) rotateZ(-30deg)') {
            dish.style.transform = 'translateX(50%) translateY(-45%) rotateZ(-60deg)'
        } else if (trans === 'translateX(50%) translateY(-45%) rotateZ(-60deg)') {
            dish.style.transform = 'translateX(50%) translateY(-45%) rotateZ(-90deg)'
        } else if (trans === 'translateX(50%) translateY(-45%) rotateZ(-90deg)') {
            dish.style.transform = 'translateX(50%) translateY(-45%) rotateZ(0deg)'
        } else {
            dish.style.transform = 'translateX(50%) translateY(-45%) rotateZ(-30deg)'
        }
    }
    else {
        if (trans === 'translateX(-50%) translateY(-50%) rotateZ(-45deg)') {
            dish.style.transform = 'translateX(-50%) translateY(-50%) rotateZ(90deg)'
        } else if (trans === 'translateX(-50%) translateY(-50%) rotateZ(0deg)') {
            dish.style.transform = 'translateX(-50%) translateY(-50%) rotateZ(-45deg)'
        } else if (trans === 'translateX(-50%) translateY(-50%) rotateZ(45deg)') {
            dish.style.transform = 'translateX(-50%) translateY(-50%) rotateZ(0deg)'
        } else if (trans === 'translateX(-50%) translateY(-50%) rotateZ(90deg)') {
            dish.style.transform = 'translateX(-50%) translateY(-50%) rotateZ(45deg)'
        } else {
            dish.style.transform = 'translateX(-50%) translateY(-50%) rotateZ(45deg)'
        }
    }
}

