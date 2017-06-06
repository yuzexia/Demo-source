// 通过File Api 获取图片
var input = document.createElement('input'),
    body = document.getElementsByTagName('body')[0],
    file;
input.type = 'file';
body.appendChild(input);
input.addEventListener('change', function () {
    file = this.files[0];

    var img = document.createElement('img');
    img.src = window.URL.createObjectURL(file);

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var MAX_WIDTH = 800;
    var MAX_HEIGHT = 600;
    var width = img.width;
    var height = img.height;

    if (width > height) {
        if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
        }
    }
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(img, 0, 0, width, height);
    canvas.toBlob(function(blob) {
        var form = new FormData();
        form.append('file', blob);
    });
})
input.click();
body.append(input);


