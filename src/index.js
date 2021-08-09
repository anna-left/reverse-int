module.exports = function reverse(n) {
    let nStr = String(Math.abs(n));
    let res = '';
    for (var i = 0; i < nStr.length; i++) {
        res = nStr[i] + res;
    }
    return Number(res);
}
