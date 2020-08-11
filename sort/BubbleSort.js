/*
 * @Author: Guohui Lei 
 * @Date: 2020-08-11 21:38:31 
 * @Last Modified by: Guohui Lei
 * @Last Modified time: 2020-08-11 21:56:59
 */
// 冒泡排序
var arr = [8,4,6,9,6,3,2,1,0];

const bubbleSort = arr => {
    let temp = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr))
console.log(arr)