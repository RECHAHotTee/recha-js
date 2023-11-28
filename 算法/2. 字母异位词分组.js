/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);//字符转成数组
        array.sort();//排序
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : new Array();//从map中取到相应的数组
        list.push(str);//加入数组
        map.set(key, list);//重新设置该字符的数组
    }
    return Array.from(map.values());//map中的value转成数组
};