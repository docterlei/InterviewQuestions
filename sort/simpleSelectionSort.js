/*
 * @Author: Guohui Lei 
 * @Date: 2020-08-13 20:40:06 
 * @Last Modified by: Guohui Lei
 * @Last Modified time: 2020-08-13 21:05:10
 */


 // 简单选择排序算法
 
 var arr = [9,1,5,8,3,7,4,6,2,0];
 const selectSort = arr => {
     let minIndex = 0;
     let count = 0;
     let temp = 0;
     for(let i = 0; i < arr.length; i++) {
         minIndex = i;
         for(let j = i + 1; j < arr.length; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
         }
         if(i !== minIndex) {
             count++;
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
         }
     }
     return `arr=${arr}, count=${count}`
 }

 console.log(selectSort(arr))
