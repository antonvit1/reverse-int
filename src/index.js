module.exports = function reverse(n) {
    let strN = String(Math.abs(n));
    let strLength = strN.length;
    let a = "";
    while (strLength > 0) {
        a += strN[strLength - 1];
        strLength -= 1;
    }
    return Number(a);
};
