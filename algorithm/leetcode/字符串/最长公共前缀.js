//编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 输入: ["flower","flow","flight"]
// 输出: "fl"\输入: ["dog","racecar","car"]
// 输入: ["dog","racecar","car"]
// 输出: ""
var lonestCommonPrefix = function(strs) {
    let comstr = strs[0];
    for(let i = 1; i < strs.length; i++) {
        for(let j = 0; j < strs[i].length && j< comstr.length; j++) {
            if(comstr[j] !== strs[i][j]) {
                comstr = comstr.slice(0, j)
                break;
            }
        }
    }
    
    if(comstr ==='') return comstr;
                
    return comstr
}

console.log(lonestCommonPrefix(["flower","flowjjjjjjjj","flight"]))
console.log(lonestCommonPrefix(["dog","racecar","car"]))