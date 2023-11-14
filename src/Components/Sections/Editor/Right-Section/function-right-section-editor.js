

export function tagColor() {
    let valueSelect = document.getElementById('select-label-backgraund').value;
    let right = document.getElementById('container-right');
    if (right.style.backgroundColor === 'rgb(23, 111, 215)') {
        document.getElementById('label-borders').style.backgroundImage = `url("../../../SVG/label-color/label-${valueSelect}.svg")`;
    } else {
        document.getElementById('label-borders').style.backgroundImage = `url("../../../SVG/label-color/label-${valueSelect}-2.svg")`;
    };
};