/*
 * @Author: Guohui Lei 
 * @Date: 2020-08-18 21:18:39 
 * @Last Modified by: Guohui Lei
 * @Last Modified time: 2020-08-19 20:05:53
 */

 // 希尔排序 先进行 分组粗调 再进行插入排序 是直接插入排序到优化 不是一步步往前挪动 而是跳跃地往前移
 var arr = [9,1,5,8,3,7,4,6,2,0];

 const shellSort = arr => {
     let gap = arr.length;
     while(gap > 1) {
        gap = Math.floor(gap/3) + 1;

        console.log(gap)
        for(let i = gap; i < arr.length; i++) {
            if(arr[i] < arr[i-gap]) {
                let temp = arr[i];
                let j = i - gap;
                for(; j >= 0 && temp < arr[j]; j -= gap) {
                    arr[j + gap] = arr[j]
                }
                arr[j + gap] = temp;
            }
        }
        
    }
    return arr
 }

 console.log(shellSort(arr));