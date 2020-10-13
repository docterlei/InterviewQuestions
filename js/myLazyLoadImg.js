
// 可以给img标签统一自定义属性data-src='default.png'，当检测到图片出现在窗口之后再补充src属性，此时才会进行图片资源加载。
const imgsArr = document.getElementsByTagName("img")
let n = 0;

function lazyLoad() {
    const viewHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
    for(let i = n; i < imgsArr.length; i++) {
        if(imgsArr[i].offsetHeight < viewHeight + scrollHeight) {
            const src = imgsArr[i].dataset.src;
            imgsArr[i].src = src;
            n = i + 1;
        }
    }

}

// 可以使用节流优化一下
window.addEventListener('scroll', lazyload);


if (IntersectionObserver) {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        let lazyImage = entry.target;
        // 如果元素可见            
        if (entry.intersectionRatio > 0) {
          lazyImage.src = lazyImage.getAttribute("data-src");
          lazyImageObserver.unobserve(lazyImage)
        }
      })
    })
    for (let i = 0; i < img.length; i++) {
      lazyImageObserver.observe(img[i]);
    }
  }