/*
 * @Author: Guohui Lei 
 * @Date: 2020-08-11 21:38:31 
 * @Last Modified by: Guohui Lei
 * @Last Modified time: 2020-08-12 21:59:19
 */
// 冒泡排序 输入稳定排序

// ----------------------------------------- 第一版 -----------------------------------------
/* -------------- 第一轮排序 内圈循环7次 --------------
* 首先让5和8比较 发现5比8小 因此元素位置不变 [5,8,6,3,9,2,1,7]
* 接下来让8和6比较 发现8比6要大 所以8和6交换位置 [5,6,8,3,9,2,1,7]
* 继续让8和3比较 发现8比3大1 所以8和3交换位置 [5,6,3,8,9,2,1,7]
* 接下来让8和9比较 发现8比9要小 所以元素位置不变 [5,6,3,8,9,2,1,7]
* 接下来让9和2比较 发现9比2大 所以9和2交换位置 [5,6,3,8,2,9,1,7]
* 接下来让9和1比较 发现9比1大 所以9和1交换位置 [5,6,3,8,2,1,9,7]
* 接下来让9和7比较 发现9比7大 所以9和7交换位置 [5,6,3,8,2,1,7,9]
   -------------- 第二轮 内圈循环6次--------------
* 首先让5和6比较 发现5比6小 因此元素位置不变 [5,6,3,8,2,1,7,9]
* 接下来让6和3比较 发现6比3大 所以6和3交换位置 [5,3,6,8,2,1,7,9]
* 接下来让6和8比较 发现6比8小 因此元素位置不变 [5,3,6,8,2,1,7,9]
* 接下来让8和2比较 发现8比2大 所以8和2交换位置 [5,3,6,2,8,1,7,9]
* 接下来让8和1比较 发现8比1大 所以8和1交换位置 [5,3,6,2,1,8,7,9]
* 接下来让8和7比较 发现8比7大 所以8和7交换位置 [5,3,6,2,1,7,8,9]
*   
* ----第三第四...以此类推...
*
* -------------- 第六轮 -------------- [1,2,3,5,6,7,8,9]
* -------------- 第七轮 -------------- [1,2,3,5,6,7,8,9]
* -------------- 第八轮 -------------- [1,2,3,5,6,7,8,9]
*
* 可以看出自从经过第六轮排序 整个数列已然是有序的了 可是算法还是继续执行第七 第八轮 
*/

var arr1 = [5,8,6,3,9,2,1,7];
const bubbleSort1 = arr => {
    let temp = 0, countFirst = 0, countSecond = 0;
    for(let i = 0; i < arr.length; i++) {
        countFirst++;
        for(let j = 0; j < arr.length - i - 1; j++) {
            countSecond++;
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return `第一版 arr=${arr}, countFirst=${countFirst}, countSecond=${countSecond}`
}
console.log(bubbleSort1(arr1))

// ----------------------------------------- 第二版 关于外圈的优化-----------------------------------------
var arr2 = [5,8,6,3,9,2,1,7];
const bubbleSort2 = arr => {
    let temp = 0, countFirst = 0, countSecond = 0;
    for(let i = 0; i < arr.length; i++) {
        let isSorted = true;
        countFirst++;
        for(let j = 0; j < arr.length - i - 1; j++) {
            countSecond++;
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                // 有元素交换 所以不是有序 标记为false
                isSorted = false;
            }
        }
        if(isSorted) {
            break;
        }
    }
    return `第二版 arr=${arr}, countFirst=${countFirst}, countSecond=${countSecond}`
}
console.log(bubbleSort2(arr2))

// ----------------------------------------- 第三版 关于内圈的优化-----------------------------------------
// 假如一个数列【3,2,1,4,5,6,7,8] 前半部分是无序 后半部分是有序 每轮循环都会把后面的有序序列给循环一部分 对此进行优化

var arr3 = [3,4,2,1,5,6,7,8];
var arr33 = [3,4,2,1,5,6,7,8];
var arr333 = [3,4,2,1,5,6,7,8];
const bubbleSort3 = arr => {
    let temp = 0, countFirst = 0, countSecond = 0;
    let lastExchangeIndex = 0; // 记录最后一次交换的位置
    let sortBorder = arr.length - 1; // 无序数列的边界 每次只需要比到这里
    for(let i = 0; i < arr.length; i++) {
        let isSorted = true;
        countFirst++;
        for(let j = 0; j < sortBorder; j++) {
            countSecond++;
            if(arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                // 有元素交换 所以不是有序 标记为false
                isSorted = false;
                // 把无序数列的边界更新为最后一次交换元素的位置
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;
        if(isSorted) {
            break;
        }
    }
    return `第三版 arr=${arr}, countFirst=${countFirst}, countSecond=${countSecond}`
}
console.log('------------------------')
console.log(bubbleSort1(arr3))
console.log(bubbleSort2(arr33))
console.log(bubbleSort3(arr333))