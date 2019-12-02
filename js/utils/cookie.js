setCookie = (key, val, expires = 0) => {
    if (expires !== 0 ) {      //设置cookie生存时间
        let date = new Date()
        date.setTime(date.getTime() + expires * 24 * 3600 * 1000)
        expires = date.toGMTString();

        document.cookie = `${key}=${val}; expires=${expires}`
    } else {
        document.cookie = `${key}=${val};`
    }
}

getCookie = (key) => {
    let strCookie = document.cookie
    strCookie = strCookie.replace(/\s/g, '')
    let arrCookie = strCookie.split(';')

    for (let i = 0; i < arrCookie.length; i++) {
        let arr = arrCookie[i].split('=');

        if(key === arr[0]) {
            return arr[1];
        } 
    }
    return ''
}