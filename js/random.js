var image_count = 12;
var min = 1;
var max = 1;
var fmt = ".png";

function RandomNum() {
    return Math.random()*(max - min) + min;
}

function RandomImg(where, sub) {
    var img_spec = "./images/" + where + "/";
    var rand_img = img_spec + sub + "/" + RandomNum() + fmt;
    return rand_img;
}

for (var i = 1; i <= image_count; i++) {
    for (var j = 1; j <= 2; j++) {
        img = RandomImg(i, j);
        box = 'box'+i+'-'+ j;
        div = document.getElementById(box);
        div.style.background = "url(" + img + ")";
    };
};

//document.getElementById('box1').style.background = "url(./images/1/1/1.png)";
