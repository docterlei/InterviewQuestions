// script 不遵循同源协议 优点兼容性好 但仅限于GET请求
const jsonp = ({url, params, callbackName}) => {
    const generateUrl = () => {
        let strParams = '';
        for(let key in params) {
            if(Object.prototype.hasOwnProperty.call(params, key)) {
                strParams += `&${key}=${params[key]}&`;
            }
        }
        strParams += `callback=${callbackName}`

        return `${url}?${strParams}`;
    }
    
    return new Promise((resolve, reject) => {
        const scriptEle = document.createElement('script');
        scriptEle.src = generateUrl();
        document.body.appendChild(scriptEle)

        window[callbackName] = data => {
            resolve(data);
            document.removeChild(scriptEle)
        }
    })
}