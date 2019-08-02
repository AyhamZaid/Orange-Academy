


function initGrid() {
    var first = document.getElementById('colors');

    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    for (var i = 0; i< colors.length;i++){
        var dividsion = document.createElement('div');
        dividsion.className='choice';
        dividsion.style.backgroundColor=colors[i];
        dividsion.setAttribute('onclick','test('+"'"+colors[i]+"'"+')');
        first.appendChild(dividsion)
    }
}

function test(color)
{
    document.getElementById('selected').innerHTML = color;
    document.getElementById('selected').style.backgroundColor=color;
}

window.onload = function () {
    initGrid();
}
