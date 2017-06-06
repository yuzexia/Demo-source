// 通过File Api 获取图片
var input = document.createElement('input'),
    body = document.getElementsByTagName('body')[0],
    file;
input.type = 'file';
body.appendChild(input);
input.addEventListener('change', function () {
    file = this.files[0];
    /*
     * 预览图片
     * 使用 createObjectURL() 或者 FileReader预览图片
     * */
    /*var img = document.createElement('img');
    img.src = URL.createObjectURL(file);*/

    var img = document.createElement('img');
    var reader = new FileReader();
        reader.onload = function (e) {
        img.src = e.target.result;
    }
    reader.readAsDataURL(file);
    console.log(img.src.length);
    // 使用canvas做缩略图
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        MAX_WIDTH = 800,
        MAX_HEIGHT = 600,
        width = img.width,
        height = img.height;

    if(width > height){
        if(width > MAX_WIDTH){
            width = MAX_WIDTH;
            height *= MAX_WIDTH / width;
        }
    } else {
        if(height > MAX_HEIGHT){
            height = MAX_HEIGHT;
            width *= MAX_HEIGHT / height;
        }
    }
    canvas.width = MAX_WIDTH;
    canvas.height = MAX_HEIGHT;
    var imUpload = new Image();
    imUpload.onload = function () {
        ctx.drawImage(imUpload, 0, 0, width, height);
    }
    imUpload.src = img.src;
    var a = canvas.toDataURL('image/png');
    console.log(a,a.length)
    img.src = a;
    img.width = MAX_WIDTH;
    img.height = MAX_HEIGHT;
    body.append(img);
});
input.click();








