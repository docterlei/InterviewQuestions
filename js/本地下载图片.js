var a = document.createElement('a');
a.href = window.URL.createObjectURL(res.res); // 返回的是一个blob 因为图片不同源不能下载
// window.URL.RevokeObjectURL(img.src); 释放对象
a.download = `${this.state.qrname}.png`;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);