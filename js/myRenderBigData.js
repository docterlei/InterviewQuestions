// 渲染几万条数据不卡住页面
// 合理利用createDocumentFragment 和 requestAnimationFrame

setTimeout(() => {
    const total = 100000;
    // 一次插入的数据 
    const once = 20;
    //插入所有数据需要的次数
    const loopCount = Math.ceil(total / once);
    let conuntOfRender = 0;
    const ul = document.querySelector('ul');

    function add() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 20; i++) {
            const li = document.createElement('li');
            li.innerText = Math.floor(Math.random() * total);
            fragment.appendChild(li)
        }
        ul.appendChild(fragment);

        conuntOfRender++;

        loop()

    }

    function loop() {
        if(conuntOfRender < loopCount) {
            window.requestAnimationFrame(add)
        }
    }

    loop()
    
}, 0);