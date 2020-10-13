setCookie = (key, val, expires = 0) => {
    if (expires !== 0 ) {      //设置cookie生存时间
        let date = new Date()
        date.setTime(date.getTime() + expires * 24 * 3600 * 1000)
        expires = date.toUTCString();

        document.cookie = `${key}=${val}; expires=${expires}`
    } else {
        document.cookie = `${key}=${val};`
    }
}

getCookie1 = key => {
    const ojbCookie = {}
    cookies = document.cookie.split('; ').forEach(item => {
       ojbCookie[item.substring(0, item.indexOf('='))] = item.substring(item.indexOf('=') + 1, item.length)
    })
    return ojbCookie[key]
}