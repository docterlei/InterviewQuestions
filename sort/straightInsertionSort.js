/*
 * @Author: Guohui Lei 
 * @Date: 2020-08-17 20:29:12 
 * @Last Modified by: Guohui Lei
 * @Last Modified time: 2020-08-17 21:46:23
 */

 // 直接插入排序 将一个记录插入到已经排好序到有序表中

 var arr = [9,1,5,8,3,7,4,6,2,0];

 const insertSort = arr => {
     for(let i = 1; i < arr.length; i++) {
         if(arr[i] < arr[i-1]) {
             let temp = arr[i];
             let j = i - 1
             for(; j >= 0 && temp < arr[j]; j--) {
                arr[j + 1] = arr[j]
             }
             arr[j + 1] = temp;
         }
     }
     return arr
 }

 console.log(insertSort(arr));