module.exports = function (str, separator) {  
    let arr = str.split(separator);
    let unique = [...new Set(arr)];
    return unique.join(separator);
};